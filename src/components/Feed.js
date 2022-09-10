import {
  ExpandMore,
  FavoriteOutlined,
  MoreVert,
  ShareOutlined,
} from "@mui/icons-material";
import {
  Avatar,
  Box,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  CardMedia,
  Collapse,
  IconButton,
  Typography,
} from "@mui/material";

const Feed = function () {
  return (
    <Box flex={4} p={2}>
      <Card>
        <CardHeader
          avatar={
            <Avatar sx={{ bgcolor: "red" }} aria-label="recipe">
              R
            </Avatar>
          }
          action={
            <IconButton aria-label="settings">
              <MoreVert />
            </IconButton>
          }
          title="Shrimp and Chorizo Paella"
          subheader="September 14, 2016"
        />
        <CardMedia
          component="img"
          image="https://images.pexels.com/photos/103123/pexels-photo-103123.jpeg?cs=srgb&dl=pexels-julian-jagtenberg-103123.jpg&fm=jpg"
          alt="Paella dish"
        />
        <CardContent>
          <Typography variant="body2" color="text.secondary">
            This impressive paella is a perfect party dish and a fun meal to
            cook together with your guests. Add 1 cup of frozen peas along with
            the mussels, if you like.
          </Typography>
        </CardContent>
        <CardActions disableSpacing>
          <IconButton aria-label="add to favorites">
            <FavoriteOutlined />
          </IconButton>
          <IconButton aria-label="share">
            <ShareOutlined />
          </IconButton>
        </CardActions>
      </Card>
    </Box>
  );
};

export default Feed;
