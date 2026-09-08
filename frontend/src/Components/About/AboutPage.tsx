import { Card, CardContent, CardMedia, Typography, Box, Button } from "@mui/material";
import { SkillCard } from "./SkillCard";

interface AboutPageProps {
  myProjectBtn: (section: string) => void;
};

export const AboutPage = ({ myProjectBtn }: AboutPageProps) => {
  const skills = [
    { img: "./src/assets/react.png", title: "React" },
    { img: "./src/assets/nodejs.png", title: "NodeJs" },
    { img: "./src/assets/javascript.png", title: "JavaScript" },
    { img: "./src/assets/html.png", title: "HTML & CSS" },
    { img: "./src/assets/postgresql.png", title: "PostgreSQL" },
    { img: "./src/assets/github.png", title: "GitHub" },
  ];

  return (
    <Box sx={{ display: { xs: "grid", md: "flex" }, gap: 0.5, m: 0.5 }}>
      {/* Image Card */}
      <Card
        sx={{
          borderRadius: 2,
          boxShadow: 4,
          background: "#000",
          color: "#fff",
        }}
      >
        <CardMedia
          component="img"
          image="./src/assets/rohit.png"
          alt="Rohit - Junior Web Developer"
          sx={{ objectFit: {md: "cover", xs: "contain"}, height: { md: 540, xs: 300 } }}
        />
        <CardContent>
          <Typography variant="h5" sx={{ fontWeight: 700, textAlign: "center"}}>
            Rohit
          </Typography>
          <Typography variant="body2" sx={{ color: "#bbb", textAlign: "center" }}>
            Junior Web Developer
          </Typography>
        </CardContent>
      </Card>

      {/* Info Card */}
      <Card
        sx={{
          p: 3,
          borderRadius: 3,
          background: "#000",
          color: "#fff",
          boxShadow: 4,
        }}
      >
        <Typography variant="h4" sx={{
          mb: 4,
          fontWeight: 700,
          borderLeft: "4px solid #dfcf40",
          pl: 2
        }} gutterBottom>
          About Me
        </Typography>

        <Typography variant="body1" sx={{ mb: 2, color: "#ccc" }}>
          I'm a junior web developer passionate about building clean,
          responsive, and user‑friendly web interfaces. I enjoy working with
          modern tools like React, JavaScript, and Material UI to create
          smooth and engaging digital experiences.
        </Typography>

        <Typography variant="body1" sx={{ mb: 3, color: "#ccc" }}>
          I’m always learning, improving, and exploring new technologies to
          grow as a developer and bring ideas to life.
        </Typography>

        {/* Skills */}
        <Box sx={{ display: "flex", gridTemplateColumns: "repeat(2, 1fr)", cursor: "default" }}>

          {/* SECTION TITLE */}
          <Typography
            gutterBottom
            variant="h6"
            sx={{ pt: 5, ml: 1, mb: 3, color: "#fff", fontWeight: "bold" }}
          >
            Skills
          </Typography>

          {/* SKILLS WRAPPER */}
          <Box
            sx={{
              display: "flex",
              flexWrap: "wrap",
              gap: 3,
              ml: 1
            }}
          >
            {skills.map(skill => (
              <SkillCard key={skill.title} img={skill.img} title={skill.title} />
            ))}
          </Box>
        </Box>
        <Box sx={{ display: "flex", justifyContent: "center", ml: { md: -10, xs: 0 } }}>
          <Button
            variant="contained"
            size="large"
            sx={{
              display: "flex",
              flexWrap: "wrap",
              borderRadius: 2,
              alignItems: "center"
            }}
            onClick={() => myProjectBtn("PROJECTS")}
          >
            My Projects
          </Button>
        </Box>
      </Card>
    </Box>
  );
}
