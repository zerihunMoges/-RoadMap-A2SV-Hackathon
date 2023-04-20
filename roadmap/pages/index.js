import * as React from "react";
import { Button, Box, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import { Tune as TuneIcon } from '@material-ui/icons';import CustomButton from "@/components/custombutton";
import SlideShow from "@/components/slideshow";
import IconBox from "@/components/iconbox";
import { Computer as ComputerIcon } from '@material-ui/icons';
import { School as SchoolIcon } from '@material-ui/icons';
import { data } from "../mock";

const StyledLink = styled("a")({
  textDecoration: "none"
});
export default function HomePage() {
  return (
    <div style={{marginRight:"10%", marginLeft:"10%"}}>
    <Box maxWidth="1500px" mx="auto" marginTop='100px' >
      <Box display="flex">
        <Box
          style={{ marginRight: "32px", marginBottom: "24px" }}
          maxWidth="800px"
        >
          <Typography fontWeight="bold" variant="h3">
            <span style={{ color: "rebeccapurple" }}>Move faster</span> with
            intuitive React UI tools
          </Typography>
          
          <Typography
            marginTop={12}
            variant="body1"
            style={{ marginBottom: "24px" }}
          >
            MUI offers a comprehensive suite of UI tools to help you ship new
            features faster. Start with Material UI, our fully-loaded component
            library, or bring your own design system to our production-ready
            components.
          </Typography>
          <Box display="flex" marginTop={8}>
            <Box style={{ marginRight: "16px" }}>
              <Typography
                variant="h4"
                fontWeight="bold"
                style={{ color: "rebeccapurple" }}
              >
                30M
              </Typography>
              <Typography variant="caption">Students learning</Typography>
            </Box>
            <Box style={{ marginRight: "16px" }}>
              <Typography
                variant="h4"
                fontWeight="bold"
                style={{ color: "rebeccapurple" }}
              >
                300M+
              </Typography>
              <Typography variant="caption">Oppotunities got</Typography>
            </Box>
            <Box style={{ marginRight: "16px" }}>
              <Typography
                variant="h4"
                fontWeight="bold"
                style={{ color: "rebeccapurple" }}
              >
                400+
              </Typography>
              <Typography variant="caption">Groups created</Typography>
            </Box>
          </Box>

          <Box display="flex" marginTop={8}>
            <StyledLink href="/material-ui/getting-started/overview/">
              <CustomButton text="Know More"></CustomButton>
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
          <span style={{ color: "rebeccapurple" }}>Popular</span> Courses
        </Typography>

        <CustomButton text="All Courses"></CustomButton>
      </Box>
      <SlideShow cardData={data}></SlideShow>
      <Box display="flex" marginTop={12}>
        <Box
          style={{ marginRight: "32px", marginBottom: "24px" }}
          maxWidth="800px"
        >
          <Typography fontWeight="bold" variant="h3">
            <span style={{ color: "rebeccapurple" }}>Best Speciality</span> about
            our platform
          </Typography>
          <Box marginTop={6}></Box>
          <Typography
            marginTop={12}
            variant="body1"
            style={{ marginBottom: "24px" }}
          >
            MUI offers a comprehensive suite of UI tools to help you ship new
            features faster. Start with Material UI, our fully-loaded component
            library, or bring your own design system to our production-ready
            components.
          </Typography>
      
          <Box container marginTop={6}>
            <IconBox icon={<ComputerIcon></ComputerIcon>} text1='UI tools to help you ship new
            features faster. Start with Material UI' text2='UI tools to help you ship new
            features faster. Start with Material UI' text3='features faster. Start with Material UI'></IconBox>
            <Box marginTop={6}></Box>
            <IconBox icon={<SchoolIcon></SchoolIcon>} text1='UI tools to help you ship new
            features faster. Start with Material UI' text2='UI tools to help you ship new
            features faster. Start with Material UI' text3='features faster. Start with Material UI'></IconBox>
            <Box marginTop={6}></Box>
            <IconBox icon={<TuneIcon></TuneIcon>} text1='UI tools to help you ship new
            features faster. Start with Material UI' text2='UI tools to help you ship new
            features faster. Start with Material UI' text3='features faster. Start with Material UI'></IconBox>
          </Box>

          <Box display="flex" marginTop={6}>
            <StyledLink href="/material-ui/getting-started/overview/">
              <CustomButton text="Know More"></CustomButton>
            </StyledLink>
          </Box>
        </Box>
      
      </Box>

    </Box>
    </div>
  );
}
