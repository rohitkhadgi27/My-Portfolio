import { Box, Typography, TextField, Button, Stack } from "@mui/material";
import { useState } from "react";
import emailjs from "emailjs-com";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./ContactToast.css";

export const ContactPage = () => {
   const [name, setName] = useState("");
   const [nameError, setNameError] = useState(false);

   const [email, setEmail] = useState("");
   const [emailError, setEmailError] = useState(false);

   const [message, setMessage] = useState("");

   const validateName = (value: string) => {
      const isLengthValid = value.length >= 3 && value.length < 20;
      const isNameValid = /^[A-Za-z ]+$/.test(value);
      return isLengthValid && isNameValid;
   };

   const validateEmail = (value: string) => {
      const isValidEmail = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i.test(value);
      return isValidEmail;
   };

   const handleNameChange = (e) => {
      const value = e.target.value;
      setName(value);
      setNameError(!validateName(value));
   };

   const handleEmailChange = (e) => {
      const value = e.target.value;
      setEmail(value);
      setEmailError(!validateEmail(value));
   };

   const handleSubmit = (e) => {
      e.preventDefault();

      const isNameOk = validateName(name);
      const isEmailOk = validateEmail(email);

      setNameError(!isNameOk);
      setEmailError(!isEmailOk);

      if (!isNameOk || !isEmailOk) return;

      emailjs.send(
         "service_8v07b5p",
         "template_pqpgy97",
         {
            name,
            email,
            message,
            to_email: "rohitkhadgi27@gmail.com"
         },
         "lcxQ44Z3jMT5xyunm"
      )
         .then(() => {
            toast.success("Message sent successfully!");
            setName("");
            setEmail("");
            setMessage("");
         })
         .catch(() => {
            toast.error("Failed to send message!");
         });
   };

   return (
      <Box
         component="form"
         onSubmit={handleSubmit} noValidate
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
         <Box sx={{ position: "relative", display: "flex", alignItems: "center" }}>
            <Typography variant="h4" sx={{
               mb: 4,
               fontWeight: 700,
               borderLeft: "4px solid #dfcf40",
               pl: 2
            }} gutterBottom>
               Contact Me
            </Typography>
            <ToastContainer position="top-center" theme="colored" style={{ position: "absolute" }} />
         </Box>
         <Typography variant="body1" sx={{ mb: 4, color: "grey.400" }}>
            Have a project in mind or want to connect? Send me a message and I’ll get back to you.
         </Typography>
         <Stack spacing={3} sx={{ maxWidth: 600 }} >
            <TextField
               required
               label="Name Required"
               variant="outlined"
               fullWidth
               value={name}
               onChange={handleNameChange}
               //onChange={(e) => setName(e.target.value)}
               error={nameError}
               helperText={nameError ? "Name must be 3–20 letters (letters & spaces only)" : ""}
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
               label="Email Required"
               variant="outlined"
               fullWidth
               value={email}
               onChange={handleEmailChange}
               //onChange={(e) => setEmail(e.target.value)}
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
               value={message}
               onChange={(e) => setMessage(e.target.value)}
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