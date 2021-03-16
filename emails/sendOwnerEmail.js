const sgMail = require('@sendgrid/mail');

sgMail.setApiKey(process.env.SENDGRID_API_KEY);

const createMessage = userEmail => ({
  to: 'hello@tom-lamb.com', // Change to your recipient
  from: 'hello@tom-lamb.com', // Change to your verified sender
  subject: 'Latest currency rates',
  html: `<strong>This person has signed up for an email : ${userEmail}</strong>`,
});

const sendOwnerEmail = userEmail => {
  const msg = createMessage(userEmail);
  sgMail
    .send(msg)
    .then(() => {
      console.log('Email sent');
    })
    .catch(error => {
      console.error(error);
    });
};

module.exports = {
  sendOwnerEmail,
};
