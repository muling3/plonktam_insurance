import { type NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";
import Mail from "nodemailer/lib/mailer";

export async function POST(request: NextRequest) {
  const {
    name,
    email,
    phone,
    location,
    category,
    service,
    provider,
    cost,
    logbook,
    idCard,
  } = await request.json();

  const message = `<p>Dear Admin</p></br>
                  <p>Hope this email finds you well</p></br>
                  <p>Find details of the insurance request:</p></br></br>
                  <h2>Requester Details</h2>
                  <ol>
                    <li>Name: <b>${name}</b></li>
                    <li>Email: <b>${email}</b></li>
                    <li>Phone: <b>${phone}</b></li>
                    <li>Location: <b>${location}</b></li>
                  </ol></br></br>
                  <h2>Insurance Details</h2>
                  <ol>
                    <li>Service Name: <b>${service}</b></li>
                    <li>Category: <b>${category}</b></li>
                    <li>Provider: <b>${provider}</b></li>
                    <li>Cost: <b>${cost}</b></li>
                  </ol></br></br>

                  <p>Find attached the requester documents for your inspection</p></br></br>
                  <p>Kind regards</p>
                  <p>Plonktam Mailing Team</p>
                  `;

  const transport = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.EMAIL,
      pass: process.env.PASS,
    },
  });

  console.log(process.env.EMAIL, process.env.PASS, email, name, logbook);

  const mailOptions: Mail.Options = {
    from: process.env.EMAIL,
    to: email,
    subject: `Insurance Request From ${name}`,
    html: message,
    attachments: [
      {
        filename: `${name}-id-card`,
        content: idCard,
        // contentType: "application/pdf",
      },
      {
        filename: `${name}-logbook.pdf`,
        content: logbook,
        contentType: "application/pdf",
      },
    ],
  };

  const sendMailPromise = () =>
    new Promise<string>((resolve, reject) => {
      transport.sendMail(mailOptions, function (err) {
        if (!err) {
          resolve("Email sent");
        } else {
          reject(`ERROR Encountered: ${err}`);
        }
      });
    });

  try {
    await sendMailPromise();
    return NextResponse.json({ message: "Email sent" });
  } catch (err) {
    return NextResponse.json({ error: err }, { status: 500 });
  }
}
