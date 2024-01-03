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
    kraPin,
    msg,
  } = await request.json();

  const message = msg
    ? msg
    : `<p>Dear Admin</p></br>
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
    host: process.env.MAIL_HOST,
    port: process.env.MAIL_PORT,
    secureConnection: false,
    auth: {
      user: process.env.SENDER_EMAIL,
      pass: process.env.SENDER_EMAIL_PASS,
    },
    tls: {
      ciphers: "SSLv3",
    },
  });

  let attachments: Mail.Attachment[] = [];
  idCard &&
    attachments.push({
      filename: `${name}-id-card`,
      content: Buffer.from(idCard),
    });

  logbook &&
    attachments.push({
      filename: `${name}-logbook.pdf`,
      content: Buffer.from(logbook),
    });

  kraPin && attachments.push(kraPin);

  const mailOptions: Mail.Options = {
    from: {
      name: `${name}`,
      address: process.env.SENDER_EMAIL as string,
    },
    to: process.env.BUSINESS_EMAIL,
    subject: `Insurance Request From ${name}`,
    html: message,
    attachments,
  };

  const sendMailPromise = () =>
    new Promise<string>((resolve, reject) => {
      transport.sendMail(mailOptions, function (err) {
        if (!err) {
          resolve("Message was sent successfully");
        } else {
          console.log("error ", err);
          reject(`ERROR Encountered: ${err}`);
        }
      });
    });

  try {
    // await sendMailPromise();
    return NextResponse.json({ message: "Message was sent successfully" });
  } catch (err) {
    return NextResponse.json(
      { message: "Failed to send message. Kindly try again later" },
      { status: 500 }
    );
  }
}
