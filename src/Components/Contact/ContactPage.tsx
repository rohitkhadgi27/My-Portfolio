import { Box, Typography, TextField, Button, Stack } from "@mui/material";

import { useState } from "react";
//import { toast } from 'react-toastify';
import "./ContactPage.css";

export const ContactPage = () => {
   const [name, setName] = useState("");
   const [nameError, setNameError] = useState(false);

   const [email, setEmail] = useState("");
   const [emailError, setEmailError] = useState(false);

   const handleSubmit = (e) => {
      e.preventDefault(); 
     //Name Custom Validation 
      if (name != "" && name.length >= 3 && name.length < 20) {
         setNameError(false);
      } else {
         setNameError(true);
      }
      //Email Custom Validation
      const isValid = /^[a-zA-Z0-9._:$!%-]+@[a-zA-Z0-9.-]+.[a-zA-Z]$/.test(email)
      if (email == "" || !isValid) {
         setEmailError(true);
      } else {
         setEmailError(false);
      }
   };

   return (
      <Box
         component="form"
         onSubmit={handleSubmit} noValidate
         sx={{
            py: 8,
            px: { xs: 2, sm: 4, md: 8 },
            bgcolor: "#000",
            color: "#f5f5f5",
         }}
      >
         <Typography variant="h4" sx={{
            mb: 4,
            fontWeight: 700,
            borderLeft: "4px solid #dfcf40",
            pl: 2
         }} gutterBottom>
            Contact Me
         </Typography>
         <Typography variant="body1" sx={{ mb: 4, color: "grey.400" }}>
            Have a project in mind or want to connect? Send me a message and I’ll get back to you.
         </Typography>
         <Stack spacing={3} sx={{ maxWidth: 600 }} >
            <TextField
               required
               label="Your Name"
               variant="outlined"
               fullWidth
               value={name}
               onChange={(e) => setName(e.target.value)}
               error={nameError}
               helperText={nameError ? "Invalid Name (can only contain letters and space, more than 3 but less than 20 letters)" : ""}
               sx={{
                  "& .MuiOutlinedInput-root": {
                     color: "#fff",
                     "& fieldset": { borderColor: "#444" },
                     "&:hover fieldset": { borderColor: "#777" },
                  },
                  "& .MuiInputLabel-root.Mui-focused": {
                     color: "#fff"
                  },
               }}
            />
            <TextField
               required
               label="Your Email"
               variant="outlined"
               fullWidth
               value={email}
               onChange={(e) => setEmail(e.target.value)}
               error={emailError}
               helperText={emailError ? "Invalid Email (Example: abc@xyz.com)" : ""}
               sx={{
                  "& .MuiOutlinedInput-root": {
                     color: "#fff",
                     "& fieldset": { borderColor: "#444" },
                     "&:hover fieldset": { borderColor: "#777" },
                  },
                  "& .MuiInputLabel-root.Mui-focused": {
                     color: "#fff"
                  },
               }}
            />
            <TextField
               label="Message"
               variant="outlined"
               fullWidth
               multiline
               rows={4}
               sx={{
                  "& .MuiOutlinedInput-root": {
                     color: "#fff",
                     "& fieldset": { borderColor: "#444" },
                     "&:hover fieldset": { borderColor: "#777" },
                  },
                  "& .MuiInputLabel-root.Mui-focused": {
                     color: "#fff"
                  },
               }}
            />
            <Button
               variant="contained"
               size="large"
               type="submit"
               sx={{
                  bgcolor: "#4f46e5",
                  "&:hover": { bgcolor: "#4338ca" },
                  width: "fit-content",
               }}
            >
               Send Message
            </Button>
         </Stack>
         <Box sx={{ mt: 6 }}>
            <Typography variant="body2" sx={{ color: "grey.500" }}>
               Or reach me directly:
            </Typography>
            <Typography variant="body1" sx={{ mt: 1 }}>
               📧 rohitkhadgi27@gmail.com
               <br />
               🌐 Sunshine Coast, Australia
            </Typography>
         </Box>
      </Box>
   );
}   