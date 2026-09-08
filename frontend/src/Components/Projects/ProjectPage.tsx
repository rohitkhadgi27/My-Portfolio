import { Box, Typography, Card, CardMedia, CardContent, Chip } from "@mui/material";

const projects = [
    {
        image: "./src/assets/game-logo.png",
        title: "Tic‑Tac‑Toe Game",
        desc: "A classic Tic‑Tac‑Toe game built with React and TypeScript.",
        tech: ["React", "JavaScript", "CSS"],
        url: "https://tic-tac-toe-g6l6.onrender.com"
    },
    {
        image: "./src/assets/full-stack-form.png",
        title: "Full‑Stack Signup & Login System",
        desc: "A secure authentication system featuring user signup, login, frontend and backend validation, session‑based authentication, and Google OAuth integration.",
        tech: ["React", "Node.js", "Express", "PostgreSQL"],
        url: "https://frontend-1fmo.onrender.com"
    },
    {
        image: "./src/assets/computer.png",
        title: "Weather Dashboard",
        desc: "Real‑time weather data fetched from OpenWeather API with dynamic UI updates.",
        tech: ["JavaScript", "API"],
    },
    {
        image: "./src/assets/computer.png",
        title: "User Registration System",
        desc: "Full‑stack authentication system with secure password hashing and form validation.",
        tech: ["React", "Node.js", "Express", "MongoDB"],
    },
];

export const ProjectPage = () => {
    return (
        <Box sx={{
            maxWidth: "auto", m: 0.5,
            gap: 0.5,
            borderRadius: 2,
            py: 6,
            px: { xs: 2, sm: 4, md: 8 },
            bgcolor: "#000",
            color: "#f5f5f5",
        }}>
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
            <Box sx={{ display: "grid", gap: 2, gridTemplateColumns: { xs: "repeat(1, 1fr)", md: "repeat(2, 1fr)" } }}>
                {projects.map((p, i) => (
                    <Card
                        key={i}
                        onClick={() => p.url && window.open(p.url, "_blank")}
                        sx={{
                            mb: 3,
                            background: "#000",
                            height: "auto",
                            borderRadius: "10px",
                            border: "1px solid #100f0f",
                            transition: "0.3s",
                            cursor: "pointer", 
                            "&:hover": {
                                transform: "translateY(-4px)",
                                borderColor: "#070707",
                                boxShadow:"8px 8px 8px rgba(250, 250, 252, 0.3)"
                            }
                        }}
                    >
                        <CardMedia
                            component="img"
                            height="250"
                            image={p.image}
                            alt="computer"
                            sx={{
                                objectFit: "contain",
                                backgroundColor: "#111",   // optional, looks cleaner
                            }}
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
