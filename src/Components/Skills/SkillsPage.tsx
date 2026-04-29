import { Box, Typography, Grid, Chip, Stack, Card } from "@mui/material";
import LinearProgress, { linearProgressClasses } from '@mui/material/LinearProgress';
import { styled } from '@mui/material/styles';

const skills = {
  "Front-End": [
    "HTML5 & CSS3",
    "JavaScript",
    "React",
    "Bootstrap",
    "Material UI (MUI)",
  ],
  "Back-End & APIs": [
    "Node.js",
    "Express",
    "REST APIs",
    "PostgreSQL / SQL basics",
    "MongoDB"
  ],
  "Tools & Workflow": [
    "Git & GitHub",
    "VS Code",
    "Chrome DevTools",
    "npm",
    "AWS",
  ],
  "Soft Skills": [
    "Problem-Solving",
    "Communication",
    "Team Collaboration",
    "Attention to Detail",
    "Continuous Learning",
  ],
};

const skillLevels = {
  "HTML5 & CSS3": 60,
  JavaScript: 60,
  React: 60,
  Bootstrap: 65,
  "Material UI (MUI)": 52,

  "Node.js": 55,
  Express: 54,
  "REST APIs": 50,
  "PostgreSQL": 56,
  "MongoDB": 50,

  "Git & GitHub": 63,
  "VS Code": 60,
  "Chrome DevTools": 52,
  npm: 50,
  AWS: 40,

  "Problem-Solving": 90,
  Communication: 85,
  "Team Collaboration": 80,
  "Attention to Detail": 85,
  "Continuous Learning": 95,
};

const BorderLinearProgress = styled(LinearProgress)(() => ({
  height: 10,
  borderRadius: 5,
  [`& .${linearProgressClasses.bar}`]: {
    backgroundColor: 'rgb(48, 232, 85)',
  },
}));

export const SkillsPage = () => {
  return (
    <Box
      id="skills"
      sx={{
        maxWidth: "auto", m: 0.5,
        gap: 0.5,
        borderRadius: 2,
        py: 6,
        px: { xs: 2, sm: 4, md: 8 },
        bgcolor: "#000",
        color: "#f5f5f5",
      }}
    >
      <Typography
        variant="h4"
        sx={{
          mb: 4,
          fontWeight: 700,
          borderLeft: "4px solid #dfcf40",
          pl: 2,
        }}
      >
        Skills
      </Typography>

      <Typography variant="body1" sx={{ mb: 4, color: "grey.400" }}>
        A snapshot of the technologies and strengths I use to build modern web experiences.
      </Typography>

      <Box sx={{ display: "grid", gap: 2, gridTemplateColumns: { xs: "repeat(1, 1fr)", md: "repeat(2, 1fr)" } }}>
        {Object.entries(skills).map(([category, items]) => (
          <Grid item xs={12} md={6} key={category}>
            <Card
              sx={{
                background: "#0b0f19",
                border: "0px solid #2a2a2a",
                p: 2,
                transition: "0.3s",
                "&:hover": {
                  transform: "translateY(-4px)",
                  borderColor: "#6c63ff",
                  boxShadow: "0 10px 15px rgba(108, 99, 255, 0.3)",
                },
              }}
            >
              <Typography
                variant="h6"
                sx={{ fontWeight: 600, color: "grey.200", mb: 2 }}
              >
                {category}
              </Typography>

              {items.map((skill) => (
                <Box
                  key={skill}
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    gap: 2,
                    mb: 1,
                  }}
                >
                  <Chip
                    label={skill}
                    variant="outlined"
                    sx={{
                      borderColor: "grey.700",
                      color: "grey.100",
                      bgcolor: "rgba(108, 99, 255, 0.3)",
                      px: 1,
                      "&:hover": { bgcolor: "#6c63ff" },
                    }}
                  />

                  <Stack sx={{ flexGrow: 1 }}>
                    <BorderLinearProgress
                      variant="determinate"
                      value={skillLevels[skill] || 50}
                    />
                  </Stack>

                  <Typography
                    variant="body2"
                    sx={{ fontWeight: 600, color: "grey.200", minWidth: "32px" }}
                  >
                    {skillLevels[skill] || 50}%
                  </Typography>
                </Box>
              ))}
            </Card>
          </Grid>
        ))}
      </Box>
    </Box>
  );
};




