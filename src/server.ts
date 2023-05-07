import Express from "express";
import fs from "fs";
import UserController from "./controllers/UserController";
import ImovelController from "./controllers/ImovelController";


const app = Express();
app.use(Express.json());

const PORT = 8080;
app.get('/', (request, response) => {
    return response.send( {message: 'Olá mundo'})
})

app.post('/createUser', UserController.createUser ),
app.post('/createImovel', ImovelController.createImovel ),
app.get('/listImovel/:id', ImovelController.listImovel),
app.put('/updateImovel', ImovelController.atualizarImovel),


app.listen(PORT, () => {
  console.log(`Servidor 🪁 na 🚪:${PORT}`)
})

fs.readFile("banner.txt", "utf8", (err, data) => {
  if (err) {
    console.error(err);
    return;
  }
  console.log(data);

});