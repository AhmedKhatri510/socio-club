import "./FixedBar.css";

import { AppBar, Toolbar } from "@mui/material";

import { styled } from "@mui/material/styles";
import Fab from "@mui/material/Fab";

const StyledFab = styled(Fab)({
  position: "absolute",
  zIndex: 1,
  top: -30,
  left: 0,
  right: 0,
  margin: "0 auto",
});

const FixedBar = () => {
  const element1 = (
    <AppBar
      position="fixed"
      color="primary"
      sx={{ top: "auto", bottom: 0 }}
      className="appbar"
    >
      <Toolbar className="toolbar">
        <a
          href="https://play.google.com/store/apps/details?id=com.socioclub.socio_club"
          target="_blank"
        >
          <div className="text-block">
            <span>Download</span> our SuperApp now
          </div>

          <a
            href="https://play.google.com/store/apps/details?id=com.socioclub.socio_club"
            target="_blank"
            className="w-inline-block"
          >
            <img
              src="https://uploads-ssl.webflow.com/5fb3782ace5676c46e40c6b3/6130995c545fb201a8433b3b_google-play-badge%201.png"
              alt="playstore"
              className="image"
            />
          </a>
        </a>
      </Toolbar>
    </AppBar>
  );
  return <>{element1}</>;
};

export default FixedBar;
