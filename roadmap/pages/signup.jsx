import { useState } from 'react';
import { useRouter } from 'next/router'
import {
  Box,
  Button,
  Container,
  Grid,
  TextField,
  Typography
} from '@mui/material';
import { useAuth } from '@/context/AuthContext';
import firebase from 'firebase/app';


export default function SignUpPage() {
    const router = useRouter();
    const {user, signup} = useAuth()
  const [newUser, setNewUser] = useState({name: "", email: "", password: ""});

  const handleSubmit = async (e) => {
    e.preventDefault();
    try{
        await signup(newUser.email, newUser.password);
        router.push('/');
        firebase.database().ref('users/' + user.uid).set({
            name: newUser.name,
          });
        
    }
    catch(err){
        console.log(err);
    }
  };

  return (
    <Box sx={{ marginTop: 8 }}>
      <Container maxWidth="xs">
        <Typography variant="h4" align="center" gutterBottom>
          SIGNUP
        </Typography>
        <Box sx={{ mt: 3 }}>
          <form onSubmit={handleSubmit}>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  label="Full Name"
                  name="name"
                  value={newUser.name}
                  onChange={(e) => setNewUser({...newUser, name: e.target.value})}
                  required
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  label="Email Address"
                  name="email"
                  value={newUser.email}
                  onChange={(e) => setNewUser({...newUser, email: e.target.value})}
                  required
                />
              </Grid>

              <Grid item xs={12}>
                <TextField
                  fullWidth
                  label="Password"
                  name="password"
                  type="password"
                  value={newUser.password}
                  onChange={(e) => setNewUser({...newUser, password: e.target.value})}
                  required
                />
              </Grid>
            </Grid>
            <Box sx={{ mt: 2 }}>
              <Button
                type="submit"
                fullWidth
                variant="contained"
                color="primary"
              >
                Sign UP
              </Button>
            </Box>
          </form>
        </Box>
      </Container>
    </Box>
  );
}
