import './HomePage.css';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

export const HomePage = () => {
    return(
        <Box sx={{ display: { xs: "grid", md: "flex" }, gap: {xs: 4, md: 0 }, m: 1 }}>
            <img src="./src/assets/rohit.png" alt="Rohit" className="profile-image" />
            <Card sx={{ display: 'flex', flexDirection: 'column', borderRadius: { md: "50%" }, 
                padding: {xs: 3, md: 10, lg: 20 }, backgroundColor: 'rgba(219, 219, 219, 0.882)', boxShadow: 10 }}>
                <CardContent>
                    <Typography component="div" variant="h2" sx={{ color: 'text.primary', fontWeight: 'bold'}}>
                        Hello, I'm Rohit
                        <img src="./src/assets/wavehand.png" alt="wave" className="wave-image" />
                    </Typography>
                    <Typography
                        variant="subtitle1"
                        component="div"
                        sx={{ color: 'text.secondary', fontWeight: 'bold', paddingTop: 3 }}
                    >
                        Web Developer
                        <p>I am a Junior Web Developer. 
                            I build clean, responsive, and user‑friendly websites with a focus on modern front‑end
                            & back‑end development. 
                            I love turning ideas into interactive experiences using front-end(HTML, CSS, JavaScript, React)
                            and back-end(Node.js, Express, MongoDB, PostgreSQL).</p>
                    </Typography>
                </CardContent>
            </Card> 
        </Box>
    );
}
