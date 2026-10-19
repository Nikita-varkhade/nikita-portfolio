import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';
import nodemailer from 'nodemailer';

function contactApiDevPlugin(env) {
  return {
    name: 'contact-api-dev',
    configureServer(server) {
      server.middlewares.use('/api/contact', async (req, res, next) => {
        if (req.method !== 'POST') {
          return next();
        }

        let body = '';
        req.on('data', (chunk) => {
          body += chunk;
        });

        req.on('end', async () => {
          try {
            const data = JSON.parse(body || '{}');
            const { name, email, mobile, message } = data;

            if (!name?.trim() || !email?.trim() || !mobile?.trim() || !message?.trim()) {
              res.statusCode = 400;
              res.setHeader('Content-Type', 'application/json');
              res.end(JSON.stringify({
                success: false,
                error: 'All fields (Name, Email, Mobile Number, Message) are required.'
              }));
              return;
            }

            const emailUser = env.EMAIL_USER || process.env.EMAIL_USER || 'varkhadenikita21@gmail.com';
            const emailPass = env.EMAIL_PASS || process.env.EMAIL_PASS || env.VITE_EMAIL_APP_PASSWORD || process.env.VITE_EMAIL_APP_PASSWORD || 'jddw pipe wdpm mlgv';
            const recipientEmail = env.RECIPIENT_EMAIL || process.env.RECIPIENT_EMAIL || 'shetenikita21@gmail.com';

            const transporter = nodemailer.createTransport({
              service: 'gmail',
              auth: {
                user: emailUser,
                pass: emailPass
              }
            });

            const submissionDate = new Date().toLocaleString('en-IN', {
              timeZone: 'Asia/Kolkata',
              dateStyle: 'full',
              timeStyle: 'medium'
            });

            const mailOptions = {
              from: `"${name}" <${emailUser}>`,
              to: recipientEmail,
              replyTo: email,
              subject: `New Portfolio Inquiry — ${name}`,
              text: `You have received a new inquiry from your portfolio website!\n\n--- Contact Details ---\nSender Name: ${name}\nSender Email: ${email}\nSender Mobile: ${mobile}\nSubmission Date & Time: ${submissionDate}\n\n--- Message ---\n${message}`,
              html: `
                <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; max-width: 600px; margin: 0 auto; background: #ffffff; border: 1px solid #eaeaea; border-radius: 12px; overflow: hidden;">
                  <div style="background: #6d5dfb; padding: 24px; color: #ffffff;">
                    <h2 style="margin: 0; font-size: 20px; font-weight: 700;">New Portfolio Inquiry</h2>
                    <p style="margin: 6px 0 0 0; opacity: 0.9; font-size: 14px;">Received from ${name}</p>
                  </div>
                  <div style="padding: 24px; color: #333333; font-size: 15px; line-height: 1.6;">
                    <table style="width: 100%; border-collapse: collapse; margin-bottom: 20px;">
                      <tr><td style="padding: 8px 0; color: #777777; width: 140px; font-weight: 600;">Sender Name:</td><td style="padding: 8px 0; color: #111111; font-weight: 600;">${name}</td></tr>
                      <tr><td style="padding: 8px 0; color: #777777; font-weight: 600;">Email Address:</td><td style="padding: 8px 0;"><a href="mailto:${email}" style="color: #6d5dfb; text-decoration: none;">${email}</a></td></tr>
                      <tr><td style="padding: 8px 0; color: #777777; font-weight: 600;">Mobile Number:</td><td style="padding: 8px 0;"><a href="tel:${mobile}" style="color: #111111; text-decoration: none;">${mobile}</a></td></tr>
                      <tr><td style="padding: 8px 0; color: #777777; font-weight: 600;">Submitted At:</td><td style="padding: 8px 0; color: #555555;">${submissionDate}</td></tr>
                    </table>
                    <div style="background: #f8f9fa; border-left: 4px solid #6d5dfb; padding: 16px; border-radius: 6px; margin-top: 12px;">
                      <p style="margin: 0 0 8px 0; font-weight: 600; color: #555555; font-size: 13px; text-transform: uppercase;">Message</p>
                      <p style="margin: 0; color: #222222; white-space: pre-wrap;">${message}</p>
                    </div>
                  </div>
                </div>
              `
            };

            await transporter.sendMail(mailOptions);

            res.statusCode = 200;
            res.setHeader('Content-Type', 'application/json');
            res.end(JSON.stringify({
              success: true,
              message: 'Inquiry received and email sent successfully.'
            }));
          } catch (err) {
            console.error('Error handling contact submission in Vite dev server:', err);
            res.statusCode = 500;
            res.setHeader('Content-Type', 'application/json');
            res.end(JSON.stringify({
              success: false,
              error: err.message || 'Failed to deliver email.'
            }));
          }
        });
      });
    }
  };
}

// https://vite.dev/config/
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '');

  return {
    plugins: [
      react(),
      contactApiDevPlugin(env)
    ],
    server: {
      historyApiFallback: true,
      proxy: {
        '/api': {
          target: 'http://localhost:3001',
          changeOrigin: true
        }
      }
    }
  };
});
