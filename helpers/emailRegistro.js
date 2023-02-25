import nodemailer from "nodemailer";

const emailRegistro = async (datos) => {
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
        subject: "Comprueba tu cuenta en APV",
        text: "Comprueba tu cuenta en APV",
        html: `<p>Hola: ${nombre}, comprueba tu cuenta en APV.</p>
            <p>Tu cuenta ya esta lista, solo debes comprobarla en el siguiente enlace:
            <a href="${process.env.FRONTEND_URL}
            /confirmar/${token}">Comprobar Cuenta</a> </p>

            <p>Si tu no creaste esta cuenta, purdes ignorarla este mensaje</p>

        `,
        
      });

      console.log("Mensaje enviado: %S", info.mensajeId);
   };

export default emailRegistro;