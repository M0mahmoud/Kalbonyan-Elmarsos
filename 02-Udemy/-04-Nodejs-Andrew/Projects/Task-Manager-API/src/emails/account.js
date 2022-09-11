const sgMail = require("@sendgrid/mail");

sgMail.setApiKey(process.env.SENDGRID_API_KEY);

const sendWelcomEmail = (email, name) => {
  sgMail.send({
    to: email,
    from: "houdmohamed85@gmail.com",
    subject: "Thanks For Joinig In!",
    text: `Welcome To The App , ${name}, Let Me Know How You Get Along With The App.`,
  });
};

const sendCancelEmail = (email, name) => {
  sgMail.send({
    to: email,
    from: "houdmohamed85@gmail.com",
    subject: "Thanks For Using Our App",
    text: `Sorry To See You Go !, Goodby,${name}, I Hope To See You Back Soon.`,
  });
};


module.exports = { sendWelcomEmail , sendCancelEmail };
