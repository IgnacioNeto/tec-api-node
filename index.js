import express from "express";
const app = express();
const porta =3000;


// Rotas

// Rotas (endpoint) para a raiz da API
app.get('/', (req, res) => {
    res.send('Página inicial da aplicação');

});

// Rotas (endpoint) para exibir todos os alunos
app.get('/alunos', (req, res) => {
    res.send('Exibindo todos os alunos');
});

// Rotas (endpoint) para exibir um único aluno
app.get('/alunos/:id', (req, res) => {
    res.send('Exibindo dados de um aluno');
});

// Rotas (endpoint) para inserir aluno
app.post('/alunos', (req, res) => {
    res.send('Inserindo alunos');
});

// Rotas (endpoint) para atualizar todos os dados dos alunos
app.put('/alunos/:id', (req, res) => {
    res.send('Atualizando todos os dados de um aluno');
});

// Rotas (endpoint) para atualizar alguns dados de um aluno
app.patch('/alunos/:id', (req, res) => {
    res.send('Atualizando alguns dados de um aluno');
});

// Rotas (endpoint) para excluir um aluno
app.delete('/alunos/:id', (req, res) => {
    res.send('Excluir um aluno');
});




// configurando o servidor

app.listen(porta, () => {
    console.log('Servidor express rodando...');
});