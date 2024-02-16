const nodemailer = require('nodemailer');
const mailSend = async (email,message,subject) => {
  try {
    
    const transporter = nodemailer.createTransport({
      service: "gmail",
      host: "smtp.gmail.com",
      port: 587,
      secure: false,
      auth: {
        user: process.env.MAILEMAIL,
        pass: process.env.MAILPASSWORD,
      },
    });
    await transporter.sendMail({
      from: {
        name: "InnovateGecSiwan",
        address: process.env.MAILEMAIL
      },
      to: [email],
      subject: `${subject}`,
      html: `    <div style="border: 1px solid #c2d7e3; border-radius: 10px; width: 400px; height: auto; padding:20px;">
      <h1
                style="text-align: center; font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; color: #000000; font-size: 24px;">
          InnovateGecSiwan</h1>
      <h2
          style="text-align: center; font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; color: #000000; font-size: 16px; font-weight: 500;">${subject}</h2>
      <h4
          style="text-align: center; font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; color: #000000; font-size: 12px; font-weight: 500;">${email}</h4>
      <div style="padding: 20px;">
          <p
              style="font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; font-size: 13px; font-weight: 400; color: #000000;">${message}</p>
      </div>
    
  </div>`,
    });

  } catch (error) {

    console.log('some technical issue ');
  }

}


module.exports = mailSend;
