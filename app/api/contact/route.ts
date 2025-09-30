import nodemailer from 'nodemailer' 
import { NextRequest, NextResponse as res } from 'next/server'

export async function POST(req: NextRequest) {
  const { name, email, message ,mobile} = await req.json()
 

  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.SMTP_EMAIL,
      pass: process.env.SMTP_PASSWORD,
    },
    connectionTimeout: 10000
  })

 const mailOptions = {
  from: `"Portfolio Contact" <${process.env.SMTP_EMAIL}>`,
  to: process.env.SMTP_EMAIL,
  replyTo: email,
  subject: `New message from ${name}`,
  html: `
    <div style="font-family: Arial, sans-serif; padding: 20px; background: #f4f4f4; color: #333;">
      <div style="max-width: 600px; margin: auto; background: #fff; border-radius: 8px; overflow: hidden; box-shadow: 0 2px 8px rgba(0,0,0,0.05);">
        <div style="padding: 20px; border-bottom: 1px solid #eee;">
          <h2 style="margin: 0 0 8px;">📩 New Contact Message</h2>
          <p style="margin: 0; font-size: 14px; color: #666;">You have received a new message from your portfolio website.</p>
        </div>
        <div style="padding: 20px;">
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Mobile:</strong> ${mobile}</p>
          <p><strong>Message:</strong></p>
          <div style="background: #f1f1f1; padding: 12px; border-radius: 5px; white-space: pre-wrap; font-size: 14px;">
            ${message}
          </div>
        </div>
        <div style="padding: 16px 20px; background: #f0f0f0; text-align: center; font-size: 12px; color: #999;">
          This email was sent automatically from your contact form.
        </div>
      </div>
    </div>
  `
}


  try {
    await transporter.sendMail(mailOptions)
    return res.json({ message: "message send successfully!" })
  } catch (error) {
    console.error(error)
    return res.json({ success: false, error }, { status: 500 })
  }
}