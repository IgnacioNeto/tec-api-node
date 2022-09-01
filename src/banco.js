import mysql from 'mysql2';

const conexao = mysql.createConnection({
    // host: 'localhost',
    // user: 'root',
    // password: '',
    // database: 'escola'

    // Remoto

    host: 'ns350.hostgator.com.br',
    user: 'alvoea33_aluno29',
    password: 'p^3jrt[+;3Ku',
    database: 'alvoea33_esc29'

});

// conectando ao banco de dados
// conexao.connect();

conexao.connect( erro=> {
    if(erro) {
        console.error(`Erro ao conectar: ${erro.message}`);
    } else {
        // Local
        // console.log(`Banco de dados conectado com sucesso!`);

        // Remoto
        console.log(`Banco de dados conectado: ${conexao.config.host}`);
    }
});

export default conexao;