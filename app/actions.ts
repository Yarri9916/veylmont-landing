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
          <div style="display:flex;align-items:center;gap:8px;margin-bottom:32px;">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="11900 8700 4200 4900" style="height:14px;width:auto;opacity:0.5;">
              <path fill="none" stroke="#112D4E" stroke-width="100" stroke-linecap="round" stroke-linejoin="round" d="M13971.26 13343.63c-1127.74,-515.91 -1881.36,-1767.06 -1881.36,-2763.85l0 -1635.3c726,-49.77 1345.61,-297.47 1883.02,-698.12 537.41,400.65 1151.18,648.35 1877.19,698.12l0 1635.3c0,996.78 -751.11,2247.94 -1878.85,2763.85z"/>
              <path fill="#112D4E" d="M14605.62 10310.7l866.57 0 0 27.96c-135.11,10.99 -218.94,121.09 -313.44,308.49l-822.52 1631.12 -1407.31 -2674.01c-104.18,-197.96 -195.58,-298.99 -321.19,-301.08l0 -38.92 928.17 0 0 39.18c-165.84,7.33 -203.04,116.41 -118.19,281.94l921.05 1797.11 356.13 -738.16c74.88,-155.21 81.61,-272.69 -21.08,-284.6l-68.19 -7.91 0 -41.12z"/>
              <path fill="#112D4E" d="M13658.99 11423.45l884.43 -1877.93c69.34,-147.24 10.71,-236.6 -150.03,-239.56l0 -42.99 886.73 0 -1.32 41.5c-127.58,17.63 -227.1,148.14 -341.2,385.27l-1048.53 2179.02 -230.08 -445.31z"/>
            </svg>
            <p style="font-size: 11px; letter-spacing: 0.2em; text-transform: uppercase; color: #6B6B6B; margin: 0;">VEYLMONT</p>
          </div>
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
