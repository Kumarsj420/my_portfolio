import nodemailer from "nodemailer";

export async function POST(req: Request) {
  const { fullName, email, subject, message } = await req.json();

  if (!fullName || !email || !subject || !message) {
    return new Response(JSON.stringify({ message: "All fields are required" }), { status: 400 });
  }

  try {
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    await transporter.sendMail({
      from: `"Contact Form" <${process.env.EMAIL_USER}>`,
      to: process.env.EMAIL_TO,
      subject: subject,
      text: `Name: ${fullName}\nEmail: ${email}\nMessage: ${message}`,
      html: `<p><b>Name:</b> ${fullName}</p>
             <p><b>Email:</b> ${email}</p>
             <p><b>Subject:</b> ${subject}</p>
             <p><b>Message:</b> ${message}</p>`,
    });

    return new Response(JSON.stringify({ message: "Email sent successfully" }), { status: 200 });
  } catch (error) {
    console.error(error);
    return new Response(JSON.stringify({ message: "Failed to send email" }), { status: 500 });
  }
}
