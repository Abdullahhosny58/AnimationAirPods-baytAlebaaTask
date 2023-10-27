import Divider from "@mui/material-next/Divider";

import NavBar from "./components/header/NavBar";

import "./index.css";
import Animation from "./components/animated/Animation";

function App() {
  return (
    <div>
      <NavBar />
      <Divider
        sx={{ color: "#515151" }}
        // orientation="horizontal"
        variant="middle"
      />
      <Animation />
    </div>
  );
}

export default App;
