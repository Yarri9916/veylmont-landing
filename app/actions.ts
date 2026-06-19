"use server";

export async function subscribeToWaitlist(formData: FormData) {
  const email = formData.get("email") as string;

  if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return { success: false, error: "Please enter a valid email address." };
  }

  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    console.error("RESEND_API_KEY not set");
    return { success: false, error: "Service unavailable. Please try again." };
  }

  try {
    const { Resend } = await import("resend");
    const resend = new Resend(apiKey);

    await resend.emails.send({
      from: "VEYLMONT <hello@veylmont.in>",
      to: email,
      subject: "Welcome to the VEYLMONT Waitlist",
      html: `
        <div style="font-family: Georgia, serif; max-width: 560px; margin: 0 auto; padding: 48px 32px; background: #FAF8F5; color: #1E1E1E;">
          <p style="font-size: 11px; letter-spacing: 0.2em; text-transform: uppercase; color: #6B6B6B; margin-bottom: 32px;">VEYLMONT</p>
          <h1 style="font-size: 32px; font-weight: 300; margin-bottom: 16px; line-height: 1.2;">
            Welcome to the Waitlist.
          </h1>
          <p style="font-size: 15px; line-height: 1.8; color: #6B6B6B; margin-bottom: 32px;">
            Thank you for your interest in VEYLMONT. You will be among the first to experience
            our inaugural Oxford Cloth Button Down collection — early access, launch pricing,
            and first pick of colourways.
          </p>
          <p style="font-size: 13px; color: #6B6B6B; line-height: 1.8; border-top: 1px solid #E8E5DF; padding-top: 24px;">
            We will be in touch soon.<br/>
            — The VEYLMONT Team
          </p>
        </div>
      `,
    });

    await resend.emails.send({
      from: "VEYLMONT <hello@veylmont.in>",
      to: "yarris904@gmail.com",
      subject: `New Waitlist Signup: ${email}`,
      html: `<p>New waitlist signup: <strong>${email}</strong></p>`,
    });

    return { success: true };
  } catch (err) {
    console.error("Resend error:", err);
    return { success: false, error: "Something went wrong. Please try again." };
  }
}
