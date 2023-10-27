// @ts-ignore
import { Box, Container, Stack } from "@mui/material";

const NavBar = () => {
  return (
    <Container sx={{ py: 3 }}>
      <Stack
        sx={{
          alignItems: "center",
          flexDirection: "row",
          justifyContent: "space-between",
          maxWidth: "980px",
          margin: "0 auto",
          padding: "0 22px",
        }}
      >
        <Box
          sx={{
            color: "#fff",
            opacity: ".92",
            letterSpacing: "inherit",
            cursor: "pointer",
            fontWeight: 400,
            fontSize: { xs: " 10px", md: "14px" },
          }}
        >
          Air Pods Pro
        </Box>
        <Box sx={{ color: "#fff" }}>
          <Stack
            sx={{
              alignItems: "center",
              flexDirection: "row",

              px: 2,
              cursor: "pointer",
              fontSize: { xs: " 9px", md: "14px" },
            }}
          >
            <Box sx={{ px: 1, color: "#807e7e", cursor: "auto   " }}>
              Overview
            </Box>
            <Box sx={{ px: 1, "&:hover": { color: "#0071e3" } }}>Tech</Box>
            <Box sx={{ px: 1, "&:hover": { color: "#0071e3" } }}>Compare</Box>
            <Box
              sx={{
                px: 1,
                bgcolor: "#0071e3",
                borderRadius: "980px",
                fontSize: "12px",
                lineHeight: "1.33337",
                fontWeight: 400,
                letterSpacing: "-.01em",
                borderStyle: "solid",
                borderWidth: "1px",
                minWidth: "25px",
                paddingLeft: "10px",
                paddingRight: "10px",
                paddingBottom: "3px",
                paddingTop: "3px",
                borderColor: "#0071e3",
                alignItems: "center",
                "&:hover": { opacity: "95%" },
              }}
            >
              Buy
            </Box>
          </Stack>
        </Box>
      </Stack>
    </Container>
  );
};

export default NavBar;
