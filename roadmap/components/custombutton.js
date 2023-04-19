import * as React from 'react';
import Box from '@mui/material/Box';
import ArrowRight from "@material-ui/icons/ArrowRight";
import Button from '@mui/material/Button';


export default function CustomButton({text}) {
    return <Button
                variant="contained"
                color="primary"
                size="large"
                style={{
                //   marginTop: "24px",
                  color: "white",
                  backgroundColor: "rebeccapurple"
                }}
              >
                {text}
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                    backgroundColor: "white",
                    width: "32px",
                    height: "24px",
                    borderRadius: "20%",
                    marginLeft: "14px",
                    marginRight: "-8px"
                  }}
                >
                  <ArrowRight style={{ color: "rebeccapurple" }} />
                </Box>
              </Button>

}

