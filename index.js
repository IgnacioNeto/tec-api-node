import express from "express";
import { ler, inserir, lerUm, atualizar, excluir } from "./src/aluno.js";
const app = express();
// Local
// const porta =3000;

// Remoto (Qualquer porta ou a 3000)
const porta = process.env.PORT || 3000;


// Configurando suporte ao formato JSON (Sintaxe do express)
app.use(express.json());

// Configurando suporte a dados de inputs de formularios
app.use(express.urlencoded({extended : true}) );

// Rotas

// Rotas (endpoint) para a raiz da API
app.get('/', (req, res) => {
    res.send('Página inicial da aplicação');

});

// Rotas (endpoint) para exibir todos os alunos
app.get('/alunos', (req, res) => {
    // res.send('Exibindo todos os alunos');
    ler(res);
});

// Rotas (endpoint) para exibir um único aluno
app.get('/alunos/:id', (req, res) => {
    // res.send('Exibindo dados de um aluno');

    const id = req.params.id;
    lerUm(id, res);
});

// Rotas (endpoint) para inserir aluno
app.post('/alunos', (req, res) => {
    // res.send('Inserindo alunos');

    /* Capturando os dados a partir do corpo da requisição */
    const novoAluno = req.body;
    /* Executando a função inserir e passando o parâmetros da função novoAluno */
    inserir(novoAluno, res);
});

// Rotas (endpoint) para atualizar todos os dados dos alunos
app.put('/alunos/:id', (req, res) => {
    res.send('Atualizando todos os dados de um aluno');
});

// Rotas (endpoint) para atualizar alguns dados de um aluno
app.patch('/alunos/:id', (req, res) => {
    // res.send('Atualizando alguns dados de um aluno');

    // capturar id
    const id = parseInt(req.params.id);

    // dados do aluno
    const aluno = req.body;

    // chamar função
    atualizar(id, aluno, res);

});

// Rotas (endpoint) para excluir um aluno
app.delete('/alunos/:id', (req, res) => {
    // res.send('Excluir um aluno');

    // capturar id
    const id = parseInt(req.params.id);

    // chamar função
    excluir(id, res);

});


// configurando o servidor

app.listen(porta, () => {
    console.log('Servidor express rodando...');
});