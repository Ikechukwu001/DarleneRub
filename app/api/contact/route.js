import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req) {
  try {
    const data = await req.json();
    const { name, email, phone, zipcode, message } = data;

    // 1️⃣ Send confirmation to user
    await resend.emails.send({
      from: "Booking <onboarding@resend.dev>",
      to: email,
      subject: "We Received Your Booking Request",
      html: `
        <h2>Hello ${name},</h2>
        <p>Thank you for reaching out! We’ve received your booking request.</p>
        <p>We will get back to you shortly.</p>
      `,
    });

    // 2️⃣ Send full form submission to your email
    await resend.emails.send({
      from: "Booking Form <onboarding@resend.dev>",
      to: "michaeljustice727@gmail.com",
      replyTo: email, // optional: reply to the user's email
      subject: `New Booking Request from ${name}`,
      html: `
        <h2>New Booking Request</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Zip Code:</strong> ${zipcode}</p>
        <p><strong>Message:</strong> ${message}</p>
      `,
    });

    return new Response(JSON.stringify({ success: true }), { status: 200 });
  } catch (error) {
    console.error(error);
    return new Response(JSON.stringify({ error: "Email failed to send" }), { status: 500 });
  }
}
