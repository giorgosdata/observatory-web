import nodemailer from "nodemailer";

function isEmail(s: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(s);
}

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const name = String(body?.name ?? "").trim();
    const email = String(body?.email ?? "").trim();
    const message = String(body?.message ?? "").trim();

    // Honeypot anti-spam (αφήνεται κενό στο form)
    const company = String(body?.company ?? "").trim();
    if (company) {
      return Response.json({ ok: true }); // pretend success
    }

    if (!name || name.length < 2) {
      return Response.json({ ok: false, error: "Το όνομα είναι πολύ σύντομο." }, { status: 400 });
    }
    if (!email || !isEmail(email)) {
      return Response.json({ ok: false, error: "Μη έγκυρο email." }, { status: 400 });
    }
    if (!message || message.length < 10) {
      return Response.json({ ok: false, error: "Το μήνυμα είναι πολύ σύντομο." }, { status: 400 });
    }

    const host = process.env.SMTP_HOST!;
    const port = Number(process.env.SMTP_PORT || "465");
    const secure = String(process.env.SMTP_SECURE || "true") === "true";

    const transporter = nodemailer.createTransport({
      host,
      port,
      secure,
      auth: {
        user: process.env.SMTP_USER!,
        pass: process.env.SMTP_PASS!,
      },
    });

    const to = process.env.CONTACT_TO_EMAIL!;
    const from = process.env.CONTACT_FROM_EMAIL!;

    const subject = `Νέο μήνυμα από το site: ${name}`;
    const text = `Όνομα: ${name}\nEmail: ${email}\n\nΜήνυμα:\n${message}\n`;

    await transporter.sendMail({
      to,
      from,
      replyTo: email,
      subject,
      text,
    });

    return Response.json({ ok: true });
  } catch (err: any) {
    return Response.json(
      { ok: false, error: "Αποτυχία αποστολής. Δοκίμασε ξανά." },
      { status: 500 }
    );
  }
}
