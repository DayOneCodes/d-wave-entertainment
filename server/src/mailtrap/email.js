import { VERIFICATION_EMAIL_TEMPLATE } from "./emailTemplates.js";
import { mailtrapClient, sender } from "./mailtrap.config.js";

export const sendVerificationEmail = async (email, verificationLink) => {
  const recipient = [{email}]
  try 
  {
    await mailtrapClient
    .send({
      from: sender,
      to: recipient,
      subject: "Verify your email",
      html: VERIFICATION_EMAIL_TEMPLATE.replace(/{verificationLink}/g, verificationLink),
      category: "Email Verification"
    });

    console.log("Verification email sent successfully");

  }
  catch (error)
  {
    console.error("Error sending verification email", error.message);
    throw new Error (`Error sending verification: ${error.message}`)
  }
}