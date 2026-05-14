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
          height="520"
          image="./src/assets/rohit.png"
          alt="Rohit - Junior Web Developer"
          sx={{ objectFit: "cover", }}
        />
        <CardContent>
          <Typography variant="h5" sx={{ fontWeight: 700 }}>
            Rohit
          </Typography>
          <Typography variant="body2" sx={{ color: "#bbb" }}>
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
        <Box sx={{ display: "flex", flexWrap: "wrap", mb: 5, ml: -1.3, pt: 3, cursor: "default" }}>
          <Typography gutterBottom variant="h6" sx={{ ml: 1, pt: 6, pr: 6 }} >
            Skills
          </Typography>
          {skills.map(skill => (
            <SkillCard img={skill.img} title={skill.title} />
          ))};
        </Box>
        <Button
          variant="contained"
          size="large"
          sx={{ display: "flex", flexWrap: "wrap", borderRadius: 2, justifyContent: "center", ml: "25%", mr: "25%" }}
          onClick={() => myProjectBtn("PROJECTS")}
        >
          My Projects
        </Button>
      </Card>
    </Box>
  );
}
