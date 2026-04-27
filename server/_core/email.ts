import sgMail from "@sendgrid/mail";
import { ENV } from "./env";

sgMail.setApiKey(ENV.sendgridApiKey);

export const sendQuoteEmail = async (data: {
  name: string;
  email: string;
  message: string;
}) => {    
  
  await sgMail.send({
  to: "info@transfaro.com",
  from: {
    email: "info@transfaro.com",
    name: "Transfaro"
  },
  subject: "Test Quote",
  text: "It works"
});
};