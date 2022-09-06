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

// Inserindo alunos
function inserir(aluno, res) {
        /* SET ? estão vindo do mysql2 e a ? recebe os dados e atribui na ordem
        Proteção contra Injection e tratamento de Strings vindos do módulo mysql2
        (Que instalamos previamente) */
        const sql = 'INSERT INTO alunos SET ?';

        conexao.query(sql, aluno, (erro) => {
            if(erro) {
                res.status(400).json(erro.code);
            } else {
                res.status(201).json({"status":"Aluno inserido!"}); 
            }
    });

}

// Função que exibe UM aluno
function lerUm(id, res) {
    const sql = 'SELECT * FROM alunos WHERE id = ?';

    conexao.query(sql, id, (erro, resultados) => {
        if(resultados.length === 0) {
            res.status(204).end(); // 204 = Sem conteúdo.
            return;
        } 
        // Se erro ou resultado
        if(erro) {
            res.status(400).json(erro.code);
        } else {
            res.status(200).json(resultados[0]); 
        }

    });

}

// Atualizar aluno
// Essa função vai receber um id, os dados aluno, res.
function atualizar(id, aluno, res) {
    const sql = 'UPDATE alunos SET ? WHERE id = ?';

    /* para passar mais de um parâmetro usamos o array.
    dentro dele a ordem importa, pois precisa corresponder
    ao SQL acima */
    conexao.query(sql, [aluno, id], (erro, resultados) => {
        if(erro) {
            res.status(400).json(erro.code);
        } else {
            // res.status(200).json({"Status" : "Atualizado com sucesso!"}); 

            // spread operator (operador de espalhamento de objetos)
            res.status(200).json({...aluno, id});
        }

    });

}
function atualizarTodos(id, aluno, res) {
    const sql = 'UPDATE alunos SET ? WHERE id = ?';

    /* para passar mais de um parâmetro usamos o array.
    dentro dele a ordem importa, pois precisa corresponder
    ao SQL acima */
    conexao.query(sql, [aluno, id], (erro, resultados) => {
        if(erro) {
            res.status(400).json(erro.code);
        } else {
            // res.status(200).json({"Status" : "Atualizado com sucesso!"}); 

            // spread operator (operador de espalhamento de objetos)
            res.status(200).json({...aluno, id});
        }

    });

}

// Função para excluir alunos
function excluir(id, res) {
    const sql = 'DELETE FROM alunos WHERE id = ?';

    conexao.query(sql, id, (erro, resultados) => {
        if(erro) {
            res.status(400).json(erro.code);
        } else {

            res.status(200).json({"status":"Aluno excluido!", id});
        }

    });
}

export {ler, inserir, lerUm, atualizar, excluir, atualizarTodos};