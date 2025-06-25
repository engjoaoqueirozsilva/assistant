const express = require('express');
const basicAuth = require('basic-auth');
const path = require('path');

const app = express();
const port = 3000;

// Usuário e senha hardcoded
const USER = 'trator'
const PASSWORD = 'Mu0602@@#';

// Middleware de autenticação básica
app.use((req, res, next) => {
    const user = basicAuth(req);

    if (!user || user.name !== USER || user.pass !== PASSWORD) {
        res.setHeader('WWW-Authenticate', 'Basic realm="Restricted Access"');
        return res.status(401).send('Acesso não autorizado');
    }

    next();
});

// Servir o HTML
app.use(express.static(path.join(__dirname, 'html')));

app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`);
});
