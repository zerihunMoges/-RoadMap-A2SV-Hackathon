import Talk from 'talkjs';
import { useEffect, useState, useRef } from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import { useAuth } from '@/context/AuthContext';
import axios from 'axios';


export default function MyChatComponent() {
  // wait for TalkJS to load
  const inboxEl = useRef();
  const { user } = useAuth();

  const [talkLoaded, markTalkLoaded] = useState(false);
  Talk.ready.then(() => markTalkLoaded(true));

  const getStudyGroup = (conversationId, appId) => {
    const apiKey = 'sk_test_sksdrg2NZweOeuXUssxeXUQEhIHrDHY5';
  
    // Fetch the conversation details from the Talk JS API
    return axios.get(`https://api.talkjs.com/v1/${appId}/conversations/${conversationId}`, {
      headers: {
        Authorization: `Bearer ${apiKey}`
      }
    })
    .then(response => response.data)
    .catch(error => {
      console.error(error);
    });
  }

  useEffect(() => {
    if (talkLoaded) {
      // Safe to use the SDK here
      console.log(user);
      const currentUser = new Talk.User({...user, name: user.displayName ? user.displayName: user.email, id: user.uid});


      const session = new Talk.Session({
        appId: 'tjGXfUD3',
        me: currentUser,
      });

      let conversationId = "123";
      const roomFull = getStudyGroup(conversationId,"tjGXfUD3").then(response => response ? (Object.keys(response.participants).length> 5? true: false) : console.log(response))
      if(roomFull){
        conversationId += "1"
      } 
      const conversation = session.getOrCreateConversation(conversationId);
      conversation.setParticipant(currentUser);



      const chatbox = session.createInbox();
      chatbox.select(conversation);
      chatbox.mount(inboxEl.current);

      return () => session.destroy();

    }
  }, [talkLoaded]);

  return(
    <Container>
      <Box sx={{ bgcolor: 'white', height: '80vh', paddingTop: 7}} ref={inboxEl} />
  </Container>

  )
  

}