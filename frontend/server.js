import express from 'express';
import nodemailer from 'nodemailer';
import cors from 'cors';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 3001;
const RECIPIENT_EMAIL = process.env.RECIPIENT_EMAIL || 'shetenikita21@gmail.com';
const EMAIL_USER = process.env.EMAIL_USER || 'varkhadenikita21@gmail.com';
const EMAIL_PASS = process.env.EMAIL_PASS || process.env.VITE_EMAIL_APP_PASSWORD || 'jddw pipe wdpm mlgv';

// Nodemailer transport setup
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: EMAIL_USER,
    pass: EMAIL_PASS
  }
});

app.post('/api/contact', async (req, res) => {
  const { name, email, mobile, message } = req.body;

  if (!name?.trim() || !email?.trim() || !mobile?.trim() || !message?.trim()) {
    return res.status(400).json({
      success: false,
      error: 'All fields (Name, Email, Mobile Number, Message) are required.'
    });
  }

  const submissionDate = new Date().toLocaleString('en-IN', {
    timeZone: 'Asia/Kolkata',
    dateStyle: 'full',
    timeStyle: 'medium'
  });

  const mailOptions = {
    from: `"${name}" <${EMAIL_USER}>`,
    to: RECIPIENT_EMAIL,
    replyTo: email,
    subject: `New Portfolio Inquiry — ${name}`,
    text: `
You have received a new inquiry from your portfolio website!

--- Contact Details ---
Sender Name: ${name}
Sender Email: ${email}
Sender Mobile: ${mobile}
Submission Date & Time: ${submissionDate}

--- Message ---
${message}
    `,
    html: `
      <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; max-width: 600px; margin: 0 auto; background: #ffffff; border: 1px solid #eaeaea; border-radius: 12px; overflow: hidden;">
        <div style="background: #6d5dfb; padding: 24px; color: #ffffff;">
          <h2 style="margin: 0; font-size: 20px; font-weight: 700;">New Portfolio Inquiry</h2>
          <p style="margin: 6px 0 0 0; opacity: 0.9; font-size: 14px;">Received from ${name}</p>
        </div>
        <div style="padding: 24px; color: #333333; font-size: 15px; line-height: 1.6;">
          <table style="width: 100%; border-collapse: collapse; margin-bottom: 20px;">
            <tr>
              <td style="padding: 8px 0; color: #777777; width: 140px; font-weight: 600;">Sender Name:</td>
              <td style="padding: 8px 0; color: #111111; font-weight: 600;">${name}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0; color: #777777; font-weight: 600;">Email Address:</td>
              <td style="padding: 8px 0;"><a href="mailto:${email}" style="color: #6d5dfb; text-decoration: none;">${email}</a></td>
            </tr>
            <tr>
              <td style="padding: 8px 0; color: #777777; font-weight: 600;">Mobile Number:</td>
              <td style="padding: 8px 0;"><a href="tel:${mobile}" style="color: #111111; text-decoration: none;">${mobile}</a></td>
            </tr>
            <tr>
              <td style="padding: 8px 0; color: #777777; font-weight: 600;">Submitted At:</td>
              <td style="padding: 8px 0; color: #555555;">${submissionDate}</td>
            </tr>
          </table>

          <div style="background: #f8f9fa; border-left: 4px solid #6d5dfb; padding: 16px; border-radius: 6px; margin-top: 12px;">
            <p style="margin: 0 0 8px 0; font-weight: 600; color: #555555; font-size: 13px; text-transform: uppercase; letter-spacing: 0.5px;">Message</p>
            <p style="margin: 0; color: #222222; white-space: pre-wrap;">${message}</p>
          </div>
        </div>
      </div>
    `
  };

  const autoReplyOptions = {
    from: `"Nikita Varkhade" <${EMAIL_USER}>`,
    to: email,
    subject: 'Thank you for reaching out!',
    text: `Hello ${name},\n\nThank you for reaching out through my portfolio! I have received your inquiry and will connect with you as soon as possible.\n\nBest regards,\nNikita Varkhade`,
    html: `
      <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; max-width: 600px; margin: 0 auto; padding: 24px; color: #333333; line-height: 1.6;">
        <h2 style="color: #6d5dfb;">Hello ${name},</h2>
        <p>Thank you for reaching out through my portfolio!</p>
        <p>I have received your inquiry and will connect with you as soon as possible.</p>
        <br/>
        <p style="margin-bottom: 2px;">Best regards,</p>
        <p style="margin-top: 0; font-weight: bold; color: #111111;">Nikita Varkhade</p>
      </div>
    `
  };

  try {
    if (!EMAIL_PASS) {
      console.warn('EMAIL_PASS / VITE_EMAIL_APP_PASSWORD is not set in environment.');
      return res.status(500).json({
        success: false,
        error: 'Email service is not yet configured with an application password.'
      });
    }

    await transporter.sendMail(mailOptions);

    try {
      await transporter.sendMail(autoReplyOptions);
    } catch (replyErr) {
      console.warn('Auto-reply failed:', replyErr.message);
    }

    res.status(200).json({ success: true, message: 'Inquiry received and email sent successfully.' });
  } catch (error) {
    console.error('Error sending email:', error);
    res.status(500).json({ success: false, error: 'Failed to send email. Please check server configuration.' });
  }
});

app.listen(PORT, () => {
  console.log(`Backend server running on http://localhost:${PORT}`);
});
