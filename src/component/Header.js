import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import SearchIcon from "@mui/icons-material/Search";
import Container from "@mui/material/Container";
import "../App.css";
import { useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../store/Store";
import instance from "../api/Instance";
import { Button } from "@mui/material";
import { Box } from "@mui/system";
import ProductionQuantityLimitsOutlinedIcon from "@mui/icons-material/ProductionQuantityLimitsOutlined";

const Header = () => {
  const [search, setSearch] = React.useState("");
  const navigate = useNavigate();
  const location = useLocation();

  const context = React.useContext(AuthContext);

  return (
    <AppBar position="static" color="transparent">
      <Container maxWidth="xl">
        <Toolbar
          disableGutters
          sx={{
            display: { sm: "flex", xs: "flex" },
            flexDirection: { sm: "row", xs: "column" },
            justifyContent: "space-between",
            marginBottom: { xs: "1rem", sm: "0rem" },
          }}
        >
          <Box
            variant="h6"
            noWrap
            component="a"
            sx={{
              display: { sm: "flex", xs: "flex" },
              flexDirection: { sm: "column", xs: "row" },
              mr: 2,
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            <Typography
              sx={{
                display: { sm: "flex", xs: "flex" },
                alignItems: "center",
                justifyContent: "center",
                mr: 2,
                fontFamily: "monospace",
                fontWeight: 700,
                letterSpacing: ".3rem",
                color: "inherit",
                textDecoration: "none",
              }}
            >
              Ecommerce
            </Typography>
          </Box>
          <div style={{ cursor: "pointer" }}>
            <ProductionQuantityLimitsOutlinedIcon
              onClick={() => {
                navigate("/cart");
              }}
            />
          </div>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default Header;
