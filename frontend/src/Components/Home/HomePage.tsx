import './HomePage.css';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

export const HomePage = () => {
    return (
        <Box sx={{ px: { xs: 2, md: 6 }, py: 4, bgcolor: "#000", borderRadius: 2, m: 0.5 }}>
            {/* HERO SECTION */}
            <Box sx={{ display: { xs: "grid", md: "flex" }, gap: { xs: 4, md: 4 }, m: 1 }}>
                <img src="./src/assets/rohit.png" alt="Rohit" className="profile-image" />
                <Card
                    sx={{
                        display: "flex",
                        flexDirection: "column",
                        borderRadius: { xs: "20px", md: "40px" },
                        minWidth: 260,
                        padding: { xs: 3, md: 8, lg: 12 },
                        background: "linear-gradient(135deg, #0d0d0d 0%, #1a1a1a 100%)",
                        boxShadow: {
                            xs: "6px 6px 12px rgba(224, 230, 55, 0.15)",
                            md: "12px 12px 20px rgba(224, 230, 55, 0.25)"
                        },
                        transition: "0.3s ease"
                    }}
                >
                    <CardContent>
                        <Typography
                            component="div"
                            sx={{
                                fontSize: { xs: "1.8rem", md: "3rem" },
                                color: "#fff",
                                fontWeight: 'bold',
                                display: "flex",
                                alignItems: "center",
                                gap: 1
                            }}
                        >
                            <Box>Hello, I'm Rohit<img src="./src/assets/wavehand.png" alt="wave" className="wave-image" /></Box>  
                        </Typography>

                        <Typography
                            variant="subtitle1"
                            component="div"
                            sx={{ color: "rgba(255,255,255,0.85)", fontWeight: 'bold', mt: 2 }}
                        >
                            Web Developer
                        </Typography>

                        <Typography
                            sx={{
                                color: "rgba(255,255,255,0.75)",
                                mt: 1.5,
                                lineHeight: 1.6
                            }}
                        >
                            I am a Junior Web Developer. I build clean, responsive, and user‑friendly
                            websites with a focus on modern front‑end & back‑end development. I love
                            turning ideas into interactive experiences using front‑end (HTML, CSS,
                            JavaScript, React) and back‑end (Node.js, Express, MongoDB, PostgreSQL).
                        </Typography>
                    </CardContent>
                </Card>
            </Box>
        </Box>
    );
};
