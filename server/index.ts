import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import nodemailer from 'nodemailer';
import type { Request, Response } from 'express';

dotenv.config();

const app = express();
const PORT = process.env.API_PORT || 5000;

interface ContactSubmission {
  name?: unknown;
  email?: unknown;
  subject?: unknown;
  message?: unknown;
}

// Middleware
app.use(cors());
app.use(express.json());

// Health Check Endpoint
app.get('/api/health', (_req: Request, res: Response) => {
  res.json({
    status: 'healthy',
    uptime: process.uptime(),
    timestamp: new Date().toISOString(),
    service: 'Fatema Akter Portfolio Backend API',
  });
});

// Contact Form Endpoint
app.post('/api/contact', async (req: Request<Record<string, never>, unknown, ContactSubmission>, res: Response) => {
  try {
    const { name, email, subject, message } = req.body;

    // Server-side validation
    if (
      typeof name !== 'string' ||
      typeof email !== 'string' ||
      typeof subject !== 'string' ||
      typeof message !== 'string' ||
      !name.trim() ||
      !email.trim() ||
      !subject.trim() ||
      !message.trim()
    ) {
      return res.status(400).json({
        success: false,
        error: 'All fields (name, email, subject, message) are required.',
      });
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email.trim())) {
      return res.status(400).json({
        success: false,
        error: 'Invalid email address provided.',
      });
    }

    const { SMTP_HOST, SMTP_USER, SMTP_PASS, CONTACT_EMAIL } = process.env;
    const SMTP_PORT = Number(process.env.SMTP_PORT || 587);

    if (
      !SMTP_HOST ||
      !SMTP_USER ||
      !SMTP_PASS ||
      !CONTACT_EMAIL ||
      !Number.isInteger(SMTP_PORT) ||
      SMTP_PORT < 1 ||
      SMTP_PORT > 65535
    ) {
      console.error('Contact email is not configured. Set SMTP_HOST, SMTP_PORT, SMTP_USER, SMTP_PASS, and CONTACT_EMAIL in .env.');
      return res.status(503).json({
        success: false,
        error: 'Email forwarding is not configured on the server.',
      });
    }

    const smtpPassword = SMTP_HOST === 'smtp.gmail.com'
      ? SMTP_PASS.replace(/\s/g, '')
      : SMTP_PASS;

    if (SMTP_HOST === 'smtp.gmail.com' && smtpPassword.length !== 16) {
      return res.status(503).json({
        success: false,
        error: 'Gmail SMTP_PASS must be the 16-character Google App Password for SMTP_USER. Update it in the project root .env file and restart the API server.',
      });
    }

    const transporter = nodemailer.createTransport({
      host: SMTP_HOST,
      port: SMTP_PORT,
      secure: SMTP_PORT === 465,
      auth: {
        user: SMTP_USER,
        pass: smtpPassword,
      },
    });

    await transporter.sendMail({
      from: process.env.SMTP_FROM || SMTP_USER,
      to: CONTACT_EMAIL,
      replyTo: { name: name.trim(), address: email.trim() },
      subject: `[Portfolio Contact] ${subject.trim()}`,
      text: `Name: ${name.trim()}\nEmail: ${email.trim()}\n\n${message.trim()}`,
    });

    return res.status(200).json({
      success: true,
      message: 'Your inquiry has been emailed successfully. Thank you for reaching out!',
    });
  } catch (error) {
    const smtpError =
      typeof error === 'object' && error !== null && 'code' in error
        ? error
        : null;
    const errorCode =
      smtpError && typeof smtpError.code === 'string' ? smtpError.code : undefined;
    const responseCode =
      smtpError && 'responseCode' in smtpError && typeof smtpError.responseCode === 'number'
        ? smtpError.responseCode
        : undefined;

    if (errorCode === 'EAUTH') {
      console.error(`SMTP authentication failed (response ${responseCode ?? 'unknown'}).`);
      return res.status(502).json({
        success: false,
        error:
          responseCode === 534
            ? 'Gmail rejected the login. SMTP_PASS must be a Google App Password created for the same account as SMTP_USER; a regular or manually created 16-character password will not work.'
            : 'SMTP login was rejected. Check SMTP_USER and SMTP_PASS in .env; for Gmail, use a Google App Password, not your account password.',
      });
    }

    console.error(`SMTP email delivery failed (${errorCode ?? 'unknown error'}).`);
    return res.status(502).json({
      success: false,
      error: 'Your message could not be emailed. Check the SMTP settings and server log, then try again.',
    });
  }
});

// 404 handler for unknown API routes
app.use((_req: Request, res: Response) => {
  res.status(404).json({ error: 'Endpoint not found' });
});

app.listen(PORT, () => {
  console.log(`🚀 Portfolio API server is running on http://localhost:${PORT}`);
});
