import { MailtrapClient } from "mailtrap";
import dotenv from "dotenv"

dotenv.config();

const TOKEN = process.env.MAILTRAP_API_TOKEN;

export const mailtrapClient = new MailtrapClient({
  token: "3aec99220296c28ed8f7f928fc476a7a",
});

export const sender = {
  email: "hello@dwaveentertainment.co.uk",
  name: "D-Wave Entertainment",
};


// const recipients = [
//   {
//     email: "dayone.codes@gmail.com",
//   }
// ];

// mailtrapClient
//   .send({
//     from: sender,
//     to: recipients,
//     subject: "You are awesome!",
//     text: "Congrats for sending test email with Mailtrap!",
//     // html:
//     category: "Integration Test",
//   })
//   .then(console.log, console.error);


  // node mailtrap.config.js