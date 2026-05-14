import { Card, CardActionArea, CardMedia, CardContent, Typography } from "@mui/material";

export const SkillCard = ({ img, title }: { img: string; title: string }) => {
  return (
    <Card sx={{ maxWidth: 345, background: "#000", ml: 3 }}>
      <CardActionArea sx={{ cursor: "default" }}>
        <CardMedia component="img" height="100" image={img} alt={title} />
        <CardContent>
          <Typography gutterBottom variant="h6" sx={{ m: -1.5, color: "#6c63ff", textAlign: "center" }}>
            {title}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};
