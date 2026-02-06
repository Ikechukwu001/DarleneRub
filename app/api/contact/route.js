import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req) {
  try {
    const data = await req.json();
    const { name, email, phone, zipcode, message } = data;

    await resend.emails.send({
      from: "Booking <onboarding@resend.dev>",
      to: [email, "michaeljustice727@gmail.com"],
      replyTo: "michaeljustice727@email.com",
      subject: "Appointment Request Received",
      html: `
        <h2>Hello ${name},</h2>
        <p>Thank you for reaching out. I’ve received your booking request.</p>

        <p><strong>Details:</strong></p>
        <ul>
          <li>Phone: ${phone}</li>
          <li>Zip Code: ${zipcode}</li>
          <li>Message: ${message}</li>
        </ul>

        <p>I’ll get back to you shortly.</p>
      `,
    });

    return new Response(JSON.stringify({ success: true }), { status: 200 });
  } catch (error) {
    console.error(error);
    return new Response(JSON.stringify({ error: "Email failed to send" }), { status: 500 });
  }
}
