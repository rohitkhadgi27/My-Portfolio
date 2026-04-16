import './HomePage.css';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

export const HomePage = () => {
    return(
         <Card sx={{ display: 'flex', marginTop: 1, backgroundColor: 'rgba(219, 219, 219, 0.882)', 
            boxShadow: '10px 10px 5px 0px rgba(0,0,0,0.75)', backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat', height: '100vh' }}>
            <Box sx={{ display: 'flex', flexDirection: 'column', padding: 20 }}>
                <CardContent sx={{ flex: '1 0 auto',  }}>
                <Typography component="div" variant="h2" sx={{ color: 'text.primary', fontWeight: 'bold'}}>
                   Hello, I'm Rohit
                   <img src="./src/assets/wavehand.png" alt="wave" className="wave-image" />
                </Typography>
                <Typography
                    variant="subtitle1"
                    component="div"
                    sx={{ color: 'text.secondary', fontWeight: 'bold', paddingTop: 2 }}
                >
                    Web Developer
                    <p>I am a Junior Web Developer. 
                        I build clean, responsive, and user‑friendly websites with a focus on modern front‑end
                        & back‑end development. 
                        I love turning ideas into interactive experiences using front-end(HTML, CSS, JavaScript, React)
                        and back-end(Node.js, Express, MongoDB, PostgreSQL).</p>
                </Typography>
                </CardContent>
            </Box>
            <img src="./src/assets/rohit.png" alt="Rohit" className="profile-image" />
        </Card>
    );
}