import * as React from "react";
import { Button, Box, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import { Tune as TuneIcon } from '@material-ui/icons';import CustomButton from "@/components/custombutton";
import SlideShow from "@/components/slideshow";
import IconBox from "@/components/iconbox";
import { Computer as ComputerIcon } from '@material-ui/icons';
import { School as SchoolIcon } from '@material-ui/icons';
import { data } from "../mock";
import { useRouter } from "next/router";

const StyledLink = styled("a")({
  textDecoration: "none"
});
export default function HomePage() {
  const router = useRouter()
  return (
    <div style={{marginRight:"10%", marginLeft:"10%"}}>
    <Box maxWidth="1500px" mx="auto" marginTop='100px' >
      <Box display="flex">
        <Box
          style={{ marginRight: "32px", marginBottom: "24px" }}
          maxWidth="800px"
        >
          <Typography fontWeight="bold" variant="h3">
            <span style={{ color: "rebeccapurple" }}>Discover</span> your potential with our guided course roadmap.
          </Typography>
          
          <Typography
            marginTop={12}
            variant="body1"
            style={{ marginBottom: "24px" ,marginTop:"10px" , color:"#9CA0A4"}}
          >
            We help students choose the right course with a personalized roadmap to success, offering valuable resources and support for informed decision-making.
          </Typography>
          <Box display="flex" marginTop={8}>
            <Box style={{ marginRight: "16px" }}>
              {/* <Typography
                variant="h4"
                fontWeight="bold"
                style={{ color: "rebeccapurple" }}
              > */}
                {/* 30M */}
              {/* </Typography> */}
              {/* <Typography variant="caption">Students learning</Typography> */}
            </Box>
            {/* <Box style={{ marginRight: "16px" }}>
              <Typography
                variant="h4"
                fontWeight="bold"
                style={{ color: "rebeccapurple" }}
              >
                300M+
              </Typography>
              <Typography variant="caption">Oppotunities got</Typography>
            </Box> */}
            {/* <Box style={{ marginRight: "16px" }}>
              <Typography
                variant="h4"
                fontWeight="bold"
                style={{ color: "rebeccapurple" }}
              >
                400+
              </Typography>
              <Typography variant="caption">Groups created</Typography>
            </Box> */}
          </Box>

          <Box display="flex" marginTop={8}>
            <StyledLink href="/material-ui/getting-started/overview/">
              <a href="#about">
              <CustomButton text="Know More"></CustomButton>
              </a>
              
            </StyledLink>
          </Box>
        </Box>

        <Box>
          <img
            src="/undraw_Learning.png"
            alt="Beautiful Image"
            style={{
              borderRadius: "20% 4% 2% 2%",
              width: "99%",
              height: "99%",
              boxShadow: "0 0 20px rgba(0, 0, 0, 0.5)"
            }}
          />
        </Box>
      </Box>

      <Box display="flex" justifyContent="space-between" marginTop={10}>
        <Typography fontWeight="bold" variant="h3">
          <span style={{ color: "rebeccapurple" }}>Popular</span> Roadmaps
        </Typography>
        <div onClick={()=>router.push('/roadmaps')}>
        <CustomButton text="All Roadmaps"></CustomButton>
        </div>

        
      </Box>
      <SlideShow cardData={data}></SlideShow>
      <Box display="flex" marginTop={12}>
        <Box
          style={{ marginRight: "32px", marginBottom: "24px" }}
          maxWidth="800px"
        >
          <Typography fontWeight="bold" variant="h3">
            <span id="about" style={{ color: "rebeccapurple" }}>What Sets</span> Us Apart
            
          </Typography>
          <Box marginTop={6}></Box>
          <Typography
            marginTop={12}
            variant="body1"
            style={{ marginBottom: "24px" }}
          >
            Our website is a comprehensive educational platform designed to help students navigate the complexities of choosing the right course. We offer a personalized roadmap to success, guiding students through the best course options based on their interests, goals, and career aspirations.
          </Typography>
      
          <Box container marginTop={6}>
            <IconBox icon={<ComputerIcon></ComputerIcon>} text1='Personalized Course Roadmap' text2='Our platform offers a tailored course roadmap that helps students choose the right course based on their interests, goals, and career aspirations.'></IconBox>
            <Box marginTop={6}></Box>
            <IconBox icon={<SchoolIcon></SchoolIcon>} text1='Resources and Support' text2='We provide students with a wealth of resources and support, including expert advice, informational articles, and tools to help them make informed decisions about their education.'></IconBox>
            <Box marginTop={6}></Box>
            <IconBox icon={<TuneIcon></TuneIcon>} text1='Course Comparison and Reviews' text2=' Our platform allows students to compare courses and read reviews from other students, helping them make well-informed decisions about their education.'></IconBox>
          </Box>

          <Box display="flex" marginTop={6}>
          </Box>
        </Box>
      
      </Box>

    </Box>
    </div>
  );
}
