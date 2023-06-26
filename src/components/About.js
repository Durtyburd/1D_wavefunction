import "../stylesheets/about.css";
import { Box, Typography } from "@mui/material";

function About() {
  return (
    <>
      <Box
        sx={{
          height: "50%",
          backgroundColor: "white",
        }}
      >
        <Typography variant="h2" padding="5% 5% 3% 5%" align="center">
          <strong>About</strong>
        </Typography>
        <Typography variant="h5" align="center" padding="0 5% 10% 5%">
          Welcome to my 1D Wave Function website! As the sole creator, I invite
          you to delve into the captivating realm of one-dimensional waves
          through this interactive platform. Witness the mesmerizing beauty of
          light waves or immerse yourself in the immersive sounds of
          one-dimensional audio waves.
          <br />
          <br />
          While the current version of the website showcases predefined wave
          simulations without adjustable parameters, it serves as a visual
          gateway to the enchanting world of waves.
          <br />
          <br />
          Stay tuned for future updates where I'll introduce exciting features
          that allow you to customize and control wave properties, enabling an
          even more immersive and educational experience. Join me on this
          journey of exploration and gain a deeper understanding of the
          captivating dynamics of one-dimensional waves.
        </Typography>
      </Box>
    </>
  );
}

export { About };
