import { AppBar, styled, Toolbar, Typography } from "@mui/material";
import { Pets } from "@mui/icons-material";
import { borderRadius } from "@mui/system";
import React from "react";
const StyledToolbar = styled(Toolbar)({
  display: "flex",
  justifyContent: "space-between",
});

const Search = styled("div")(({ theme }) => ({
  backgroundColor: "white",
  padding: "0 10px",
  borderRadius: theme.shape.borderRadius,
}));

const Navbar = function () {
  return (
    <AppBar position="sticky">
      <StyledToolbar>
        <Typography variant="h6" sx={{ display: { xs: "none", sm: "block" } }}>
          Lama Dev
        </Typography>
        <Pets sx={{ display: { xs: "block", sm: "block" } }} />
        <Search> </Search>
      </StyledToolbar>
    </AppBar>
  );
};

export default Navbar;
