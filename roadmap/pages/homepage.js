import * as React from "react";
import { Button, Box, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import ArrowRight from "@material-ui/icons/ArrowRight";

const StyledLink = styled("a")({
  textDecoration: "none"
});
export default function HomePage() {
  return (
    <Box maxWidth="1500px" mx="auto">
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
            marginTop={4}
            variant="body1"
            style={{ marginBottom: "24px" }}
          >
            MUI offers a comprehensive suite of UI tools to help you ship new
            features faster. Start with Material UI, our fully-loaded component
            library, or bring your own design system to our production-ready
            components.
          </Typography>
          <Box display="flex" marginTop={2}>
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

          <Box display="flex">
            <StyledLink href="/material-ui/getting-started/overview/">
              <Button
                variant="contained"
                color="primary"
                size="large"
                style={{
                  marginTop: "24px",
                  color: "white",
                  backgroundColor: "rebeccapurple"
                }}
              >
                Know more
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
      boxShadow: "0 0 20px rgba(0, 0, 0, 0.5)",
    }}
  />
</Box>


      </Box>
    </Box>
  );
}

// // `getInitialProps` belongs to `_document` (instead of `_app`),
// // it's compatible with static-site generation (SSG).
// MyDocument.getInitialProps = async (ctx) => {
//   // Resolution order
//   //
//   // On the server:
//   // 1. app.getInitialProps
//   // 2. page.getInitialProps
//   // 3. document.getInitialProps
//   // 4. app.render
//   // 5. page.render
//   // 6. document.render
//   //
//   // On the server with error:
//   // 1. document.getInitialProps
//   // 2. app.render
//   // 3. page.render
//   // 4. document.render
//   //
//   // On the client
//   // 1. app.getInitialProps
//   // 2. page.getInitialProps
//   // 3. app.render
//   // 4. page.render

//   const originalRenderPage = ctx.renderPage;

//   // You can consider sharing the same emotion cache between all the SSR requests to speed up performance.
//   // However, be aware that it can have global side effects.
//   const cache = createEmotionCache();
//   const { extractCriticalToChunks } = createEmotionServer(cache);

//   /* eslint-disable */
//   ctx.renderPage = () =>
//     originalRenderPage({
//       enhanceApp: (App) =>
//         function EnhanceApp(props) {
//           return <App emotionCache={cache} {...props} />;
//         },
//     });
//   /* eslint-enable */

//   const initialProps = await Document.getInitialProps(ctx);
//   // This is important. It prevents emotion to render invalid HTML.
//   // See https://github.com/mui-org/material-ui/issues/26561#issuecomment-855286153
//   const emotionStyles = extractCriticalToChunks(initialProps.html);
//   const emotionStyleTags = emotionStyles.styles.map((style) => (
//     <style
//       data-emotion={`${style.key} ${style.ids.join(' ')}`}
//       key={style.key}
//       // eslint-disable-next-line react/no-danger
//       dangerouslySetInnerHTML={{ __html: style.css }}
//     />
//   ));

//   return {
//     ...initialProps,
//     // Styles fragment is rendered after the app and page rendering finish.
//     styles: [
//       ...React.Children.toArray(initialProps.styles),
//       ...emotionStyleTags,
//     ],
//   };
// };
