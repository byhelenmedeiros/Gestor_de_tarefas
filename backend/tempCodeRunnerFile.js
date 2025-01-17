const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
require('dotenv').config();
const app = express();

app.use(bodyParser.json());
app.use(cors());

// Configuração da chave JWT_SECRET
const crypto = require('crypto');
let jwtSecret = process.env.JWT_SECRET;

// Middleware para configurar o CORS explicitamente para a rota específica
app.options('/api/v2/auth/signup', cors()); // Adiciona essa linha

// Rotas
const routes = require('./routes/index');
app.use('/api', routes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});
