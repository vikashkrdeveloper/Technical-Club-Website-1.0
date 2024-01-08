const AWS = require('aws-sdk');
const ses = new AWS.SES({ region: 'your-region' });

const mailSend = async (req, res) => {
    const params = {
        Destination: {
          ToAddresses: ['vikashjjp728@gmail.com'],
        },
        Message: {
          Body: {
            Text: {
              Data: 'This is the email body.',
            },
            Html: {
              Data: '<b>This is the HTML body.</b>',
            },
          },
          Subject: {
            Data: 'Test Email from Amazon SES',
          },
        },
        Source: '',
      };
      
      ses.sendEmail(params, (err, data) => {
        if (err) {
          console.error(err);
        } else {
          console.log('Email sent:', data);
        }
      });
      

}


module.exports = mailSend;
