import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  Box,
  Button,
  CardActionArea,
} from "@mui/material";

export const AboutMePage = () => {
  return (
      <Box
          sx={{ display : {xs: "grid", md: "flex" }, gap: 0.5, m: 0.5 }}
            //sx={{ display: "grid", gap: 0.5, m: 0.5, gridTemplateColumns: "repeat(1, 1fr)"}}
        //  sx={{ display: "flex", gap: 0.5, p: 0.5 }}
      >
        {/* Image Card */}    
          <Card
            sx={{
              borderRadius: 3,
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
              sx={{  objectFit: "cover",}}
            />
            <CardContent>
              <Typography variant="h5" fontWeight={700}>
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
            <Typography variant="h4" fontWeight={700} gutterBottom>
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
            <Box sx={{ display: "flex", flexWrap: "wrap", mb: 5, ml: -1.3, pt: 3 }}>
              <Typography gutterBottom variant="h6" sx={{ ml: 1, pt: 6, pr: 6 }} >
                Skills
              </Typography>
              <Card sx={{ maxWidth: 345, background: "#000", ml: 5 }}>
                <CardActionArea>
                  <CardMedia
                    component="img"
                    height="100"
                    image="./src/assets/react.png"
                    alt="react"
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h6" sx={{ m: -1.5, color: "#6c63ff", textAlign: "center" }} >
                      React
                    </Typography>
                    </CardContent>
                </CardActionArea>
              </Card>
              <Card sx={{ maxWidth: 345, background: "#000", ml: 3 }}>
                <CardActionArea>
                  <CardMedia
                    component="img"
                    height="100"
                    image="./src/assets/nodejs.png"
                    alt="nodejs"
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h6" sx={{ m: -1.5, color: "#6c63ff", textAlign: "center" }} >
                      NodeJs
                    </Typography>
                    </CardContent>
                </CardActionArea>
              </Card>
              <Card sx={{ maxWidth: 345, background: "#000", ml: 3 }}>
                <CardActionArea>
                  <CardMedia
                    component="img"
                    height="100"
                    image="./src/assets/javascript.png"
                    alt="javascript"
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h6" sx={{ m: -1.5, color: "#6c63ff", textAlign: "center" }} >
                      JavaScript
                    </Typography>
                    </CardContent>
                </CardActionArea>
              </Card>
              <Card sx={{ maxWidth: 345, background: "#000", ml: 3 }}>
                <CardActionArea>
                  <CardMedia
                    component="img"
                    height="100"
                    image="./src/assets/html.png"
                    alt="html"
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h6" sx={{ m: -1.5, color: "#6c63ff", textAlign: "center" }} >
                      HTML & CSS
                    </Typography>
                    </CardContent>
                </CardActionArea>
              </Card>
              <Card sx={{ maxWidth: 345, background: "#000", ml: 3 }}>
                <CardActionArea>
                  <CardMedia
                    component="img"
                    height="100"
                    image="./src/assets/postgresql.png"
                    alt="postgresql"
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h6" sx={{ m: -1.5, color: "#6c63ff", textAlign: "center" }} >
                      PostgreSQL
                    </Typography>
                    </CardContent>
                </CardActionArea>
              </Card>
              <Card sx={{ maxWidth: 345, background: "#000", ml: 3 }}>
                <CardActionArea>
                  <CardMedia
                    component="img"
                    height="100"
                    image="./src/assets/github.png"
                    alt="github"
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h6" sx={{ m: -1.5, color: "#6c63ff", textAlign: "center" }} >
                      Git Hub
                    </Typography>
                    </CardContent>
                </CardActionArea>
              </Card>
            </Box>
            <Button
              variant="contained"
              size="large"
              sx={{ display: "flex", flexWrap: "wrap", borderRadius: 2, justifyContent: "center", ml: "25%", mr: "25%" }}
              href="/projects"
            >
              My Projects
            </Button>
          </Card>
      </Box>
  );
}
