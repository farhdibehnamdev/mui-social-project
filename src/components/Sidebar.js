import { Box } from "@mui/material";

const Sidebar = function () {
  return (
    <Box
      bgcolor="skyblue"
      flex={1}
      p={2}
      sx={{ display: { xs: "none", sm: "block" } }}
    >
      Sidebar
    </Box>
  );
};

export default Sidebar;
