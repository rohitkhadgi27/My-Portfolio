import { Box, Typography, Card, CardMedia, CardContent, Chip } from "@mui/material";

const projects = [
  {
    title: "Responsive Portfolio Website",
    desc: "A modern, fully responsive personal portfolio built with HTML, CSS, and JavaScript.",
    tech: ["HTML", "CSS", "JavaScript"],
  },
  {
    title: "Interactive To‑Do App",
    desc: "A clean productivity app with add, edit, delete, and filter functionality.",
    tech: ["React", "LocalStorage"],
  },
  {
    title: "Weather Dashboard",
    desc: "Real‑time weather data fetched from OpenWeather API with dynamic UI updates.",
    tech: ["JavaScript", "API"],
  },
  {
    title: "User Registration System",
    desc: "Full‑stack authentication system with secure password hashing and form validation.",
    tech: ["React", "Node.js", "Express", "MongoDB"],
  },
];

export const ProjectPage = () => {
  return (
    <Box sx={{ maxWidth: "85%", mx: "auto", mt: 6, px: 2 }}>
        <Typography
            variant="h4"
            sx={{
            mb: 4,
            fontWeight: 700,
            borderLeft: "4px solid #dfcf40",
            pl: 2,
            }}
        >
            Projects
        </Typography>
        <Box  sx={{ display: "grid", gap: 2, gridTemplateColumns: "repeat(2, 1fr)"}}>
            {projects.map((p, i) => (
                <Card
                key={i}
                sx={{
                    mb: 3,
                    background: "#1a1a1a",
                    border: "1px solid #2a2a2a",
                    transition: "0.3s",
                    "&:hover": {
                    transform: "translateY(-4px)",
                    borderColor: "#6c63ff",
                    boxShadow: "0 10px 15px rgba(108, 99, 255, 0.3)",
                    },
                }}
                >
                    <CardMedia
                        component="img"
                        height="140"
                        image="./src/assets/computer.jpg"
                        alt="green iguana"
                        /> 
                    <CardContent>
                        <Typography variant="h6" sx={{ color: "#fff", mb: 1 }}>
                        {p.title}
                        </Typography>

                        <Typography sx={{ color: "#bfbfbf", mb: 2 }}>
                        {p.desc}
                        </Typography>

                        <Box sx={{ display: "flex", gap: 1, flexWrap: "wrap" }}>
                        {p.tech.map((t, idx) => (
                            <Chip
                            key={idx}
                            label={t}
                            sx={{
                                background: "#2a2a2a",
                                color: "#6c63ff",
                                fontWeight: 600,
                            }}
                            />
                        ))}
                        </Box>
                    </CardContent>   
                </Card>      
            ))}
        </Box>
    </Box>
  );
}
