const sgMail = require('@sendgrid/mail');

sgMail.setApiKey(process.env.SENDGRID_API_KEY);

const createMessage = receiver => ({
  to: receiver, // Change to your recipient
  from: 'hello@tom-lamb.com', // Change to your verified sender
  subject: 'Latest currency rates',
  text: 'coming soon...',
  html: '<strong>currency rates coming soon...</strong>',
});

const sendMonthlyEmail = arrayOfUsers => {
  arrayOfUsers.forEach(user => {
    const msg = createMessage(user.email);
    sgMail
      .send(msg)
      .then(() => {
        console.log('Email sent');
      })
      .catch(error => {
        console.error(error);
      });
  });
};

module.exports = {
  sendMonthlyEmail,
};
