import { Card, CardActionArea, CardMedia, CardContent, Typography } from "@mui/material";

export const SkillCard = ({ img, title }: { img: string; title: string }) => {
  return (
    <Card sx={{ maxWidth: 345, background: "#000", ml: 3, pb: 5 }}>
      <CardActionArea sx={{ cursor: "default" }}>
        <CardMedia component="img" sx={{
          height: { lg: 70, md: 60, sm: 60, xs: 50 }, width: "auto",
          objectFit: "contain",
          p: 2
        }} image={img} alt={title} />
        <CardContent>
          <Typography gutterBottom variant="h6" sx={{
            m: -2.5, color: "#6c63ff",
            textAlign: "center", fontSize: { md: 18, xs: 16 }, width: "auto",
            objectFit: "contain",
            p: 2
          }}>
            {title}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};
