import conexao from "./banco.js";

// Função que lê a tabela alunos do BD
function ler(res) {

// Criando CRUD
const sql = 'SELECT * FROM alunos ORDER BY nome';

// Conectando ao BD
conexao.query(sql, (erro, resultados) => {
    if(resultados.length === 0) {
        res.status(204).end(); // 204 = Sem conteúdo. O
        // método.end() para qualquer comunicação.
        return; // Neste caso funciona como se fosse um (Die do PHP)
    }
    if(erro) {
        res.status(400).json(erro.code); // 400 = (Bad request) Requisição inválida
        
    } else {
        res.status(200).json(resultados); // 200 = deu certo

    }

})
}

export {ler};