//ARQUIVO ENDRY POINT DO PROJETO, FAZENDO USO DO EXPRESS 
const app = require('./app');

//FAZENDO USO DO DOTENV
const dotenv = require('dotenv');
dotenv.config();
const PORT = process.env.PORT || 3333;

app.get('/', (req, res)=> res.send('Olá Mundo'));
app.listen(PORT, ()=> console.log('SERVIDOR RODANDO EM http://localhost:${PORT}'));


