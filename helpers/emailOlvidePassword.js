import nodemailer from "nodemailer";


const emailOlvidePassword = async (datos) => {
    const transporter = nodemailer.createTransport({
        host: process.env.EMAIL_HOST,
        port: process.env.EMAIL_PORT,
        auth:{ 
          user: process.env.EMAIL_USER,
          pass: process.env.EMAIL_PASS,
        },
      });

      console.log(datos);

      //Email el mail 
      const info = await transporter.sendMail({
        from: "APV - Aministrador de Pacientes de Veterianaria",
        to: email,
        subject: "Reestablece tu Password",
        text: "Reestablece tu Password",
        html: `<p>Hola: ${nombre}, has solicitado reestablecer tu password.</p>

            <p>Sigue el siguiente enlace para generar un nuevo password:
            <a href="${process.env.FRONTEND_URL}/olvide-password/${token}">Reestablecer Password</a> </p>

            <p>Si tu no creaste esta cuenta, purdes ignorarla este mensaje</p>

        `,
        
      });

      console.log("Mensaje enviado: %S", info.mensajeId);
   };

export default emailOlvidePassword;