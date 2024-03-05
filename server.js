const express = require ('express')
const nodemailer = require ('nodemailer')

const server = express();

server.use(express.static(__dirname + '/public'));
server.use(express.json());

server.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "http://localhost:3000");
    res.header("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, PATCH, DELETE");
    res.header("Access-Control-Allow-Headers", "Content-Type");
    next();
  });

server.get('*', (req, res) => {
    res.sendFile('src/components/cart/InputDataUser.jsx', { root: __dirname })
})

server.post('/api/feedback', async (req, res) => {
    try {
        const transporter = nodemailer.createTransport({
            host: "smtp.mail.ru",
            port: 465,
            secure: true,
            auth: {
                user: "пишем почту",
                pass: "пишем пароль для внешнимх отправителей "
            }
        });


        const { user_name, user_number, user_mail } = req.body;
        // console.log(req.body);

        await transporter.sendMail({
            from: "pupupu.321@mail.ru",
            to: "pupupu.321@mail.ru",
            subject: `${user_name} (${user_number})`,
            text: user_mail,
            html: `
              <p>${user_name}</p>
              <p>${user_number}</p>
              <p>${user_mail}</p>
              `,
          });
      
          return res.status(200).send({ status: 200, message: "Success" });

    } catch (e) {
        return res.status(500).send({
            status: 500,
            message: 'Ошибка при запросе'
        })
    }
})

server.listen(3001, ()=>{
    console.log('listen on port 3001');
})