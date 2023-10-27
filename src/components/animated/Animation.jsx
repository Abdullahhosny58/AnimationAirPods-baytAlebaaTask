import { useEffect, useState } from "react";
// @ts-ignore
import { Box, Container, Typography } from "@mui/material";

// @ts-ignore
import video from "./Image/large.mp4";

// @ts-ignore
import image1 from "./Image/1.jpg";
// @ts-ignore
import image2 from "./Image/2.jpg";
// @ts-ignore
import image3 from "./Image/3.jpg";

const Animation = () => {
  // Typographys text
  const [showTypography, setShowTypography] = useState(true);
  const [showTypography2, setShowTypography2] = useState(true);

  // hide &&show Container
  const [hideContainer, sethideContainer] = useState(true);

  // scrollValue
  const [scrollValue, setScrollValue] = useState(0);

  // change imageWidth && imageSrc
  const [imageWidth, setImageWidth] = useState(200);
  const [imageSrc, setimageSrc] = useState(image1);
  // --------------------------------------//

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      console.log(scrollPosition);
      setScrollValue(scrollPosition);

      // --------------------------------------//
      // hide Typographys && change imageSrc

      if (scrollPosition <= 700) {
        setImageWidth(200);

        setimageSrc(image1);
      }

      if (scrollPosition >= 700 && scrollPosition <= 800) {
        setImageWidth((prevState) => prevState - 0.25);
        setShowTypography(true);
        setimageSrc(image1);
      } else {
        setShowTypography(false);
      }
      // show && hide Typography1 with image 2
      if (scrollPosition >= 1700 && scrollPosition <= 1850) {
        setShowTypography(true);
      } else {
        setShowTypography(false);
      }
      // --------------------------------------//

      if (scrollPosition >= 900 && scrollPosition <= 1500) {
        setShowTypography2(true);
        setImageWidth((prevState) => prevState - 0.25);
      } else {
        setShowTypography2(false);
      }

      if (scrollPosition >= 1700 && scrollPosition <= 1900) {
        setImageWidth(200);

        setimageSrc(image2);
        // setImageWidth(200);
      }

      if (scrollPosition >= 2000 && scrollPosition <= 2500) {
        setimageSrc(image3);
        setImageWidth(200);
      }
      // --------------------------------------//
      // hide Container
      if (scrollPosition >= 600) {
        sethideContainer(true);
      } else {
        sethideContainer(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [scrollValue]);

  useEffect(() => {
    // animation fade with css code
    const container = document.querySelector(".fade-in-image");
    container.classList.add("fade-in");

    const handleAnimationEnd = () => {
      container.classList.remove("fade-in");
    };

    container.addEventListener("animationend", handleAnimationEnd);

    return () => {
      container.removeEventListener("animationend", handleAnimationEnd);
    };
  }, [imageSrc]);

  return (
    <Box>
      <Box sx={{ width: { xs: "100%" } }}>
        <video width="100%" autoPlay muted loop src={video} />
      </Box>

      <Container
        sx={{
          opacity: hideContainer ? 1 : 0,
          transition: ".3s",

          position: "fixed",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          display: "flex",
          flexWrap: "wrap",
          my: { xs: 20, md: 10, lg: "0" },
          alignItems: "center",
          overflow: "auto",
          minHeight: { xs: "100%", md: "auto" },
        }}
      >
        <Box sx={{ display: scrollValue >= 700 ? "flex" : "none" }}>
          <Box
            className="mainBox"
            sx={{
              display: "flex",
              position: "none",
              alignItems: "center",
              flexDirection: { xs: "column", md: "row" },
              mb: { xs: "200px", md: "0px" },
            }}
          >
            <Box
              sx={{
                display: "flex",
                zIndex: "1",
              }}
            >
              <Box sx={{ width: "360px" }}>
                <Typography
                  className="Typography1 "
                  sx={{
                    fontSize: "21px",
                    lineHeight: "1.1904761905",
                    fontWeight: 400,
                    letterSpacing: ".011em",
                    margin: "0",
                    padding: "0",
                    color: "#6e6e73",
                    opacity: showTypography ? 1 : 0,
                    transition: ".8s",
                  }}
                  variant="caption"
                >
                  The chip uses powerful <span>adaptation algorithms </span> to
                  process sound more quickly, tuning audio at the precise moment
                  you hear it. Every detail is rendered for your specific ear
                  shape, immersing you in{" "}
                  <span style={{ color: "#00ff41" }}>
                    {" "}
                    higher‑fidelity sound
                  </span>
                </Typography>

                <Typography
                  className="Typography2"
                  sx={{
                    fontSize: "21px",
                    lineHeight: "1.1904761905",
                    fontWeight: 400,
                    letterSpacing: ".011em",
                    margin: "0",
                    padding: "0",
                    color: "#6e6e73",
                    marginTop: "82px  ",
                    opacity: showTypography2 ? 1 : 0,
                    transition: ".8s",
                  }}
                >
                  <span>An inward-facing microphones</span> works with voice
                  enhancement algorithms to recognize and articulate your voice,
                  so your phone and video calls always
                  <span style={{ color: "#00ff41" }}>
                    {" "}
                    sound completely natural.
                  </span>
                </Typography>
              </Box>
            </Box>

            <Box
              className="fade-in-image"
              sx={{
                opacity: imageSrc ? 1 : 0,
                transition: "0.5s",
              }}
            >
              <img
                style={{
                  width: imageWidth,
                  scale: imageWidth,
                  // position: "sticky",
                  opacity: imageSrc ? 1 : 0,
                  transition: "0.5s",
                }}
                src={imageSrc}
                alt="AirPods Pro"
              />
            </Box>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default Animation;
