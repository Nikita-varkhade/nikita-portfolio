import express from 'express';
import nodemailer from 'nodemailer';
import cors from 'cors';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

// Nodemailer transport setup
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'varkhadenikita21@gmail.com',
    pass: process.env.VITE_EMAIL_APP_PASSWORD || 'jddw pipe wdpm mlgv' // Put your 16-digit app password here
  }
});

app.post('/api/contact', async (req, res) => {
  const { name, email, mobile, message } = req.body;

  const mailOptions = {
    from: email,
    to: 'varkhadenikita21@gmail.com',
    replyTo: email,
    subject: `New Portfolio Contact from ${name}`,
    text: `
You have received a new message from your portfolio website!

--- Contact Details ---
Name: ${name}
Email: ${email}
Mobile: ${mobile}

--- Message ---
${message}
    `
  };

  const autoReplyOptions = {
    from: 'varkhadenikita21@gmail.com',
    to: email,
    subject: 'Thank you for reaching out!',
    text: 'Thank you for contacting me , will connect you as soon as possible .'
  };

  try {
    // Send email to you
    await transporter.sendMail(mailOptions);
    // Send auto-reply to the sender
    await transporter.sendMail(autoReplyOptions);

    res.status(200).json({ success: true, message: 'Email sent successfully' });
  } catch (error) {
    console.error('Error sending email:', error);
    res.status(500).json({ success: false, error: 'Failed to send email' });
  }
});

const PORT = 3001;
app.listen(PORT, () => {
  console.log(`Backend server running on http://localhost:${PORT}`);
});
