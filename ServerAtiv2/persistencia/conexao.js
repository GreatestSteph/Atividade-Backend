import mysql from 'mysql2/promise' //modulo que oferece funçoes assincronas

export default async function Conectar(){
    //verifica se tem um pool de conexoes na sessao global
    //variavel global visivel por todo o sistema
    if (global.poolConexos){
        return await global.poolConexoes.getConnection();
    }
    
    //cria um pool de conexoes
    const pool = mysql.createPool({
        host: '129.146.68.51',
        user: 'aluno10-p1engsoft',
        database: 'TesteAtividadeBackend1',
        password: 'brWF9Fp5sujGmrYBwUNS',
        waitForConnections: true,
        connectionLimit: 10,
        maxIdle: 10,
        idleTimeout: 60000,
        queueLimit: 0,
        enableKeepAlive: true,
        keepAliveInitialDelay: 0
    })

    global.poolConexoes = pool; 
    //coloca a variavel global do pool de conexoes numa variavel com nome pool
    return await pool.getConnection(); //aguarda conexao do pool

}

//o pool é um mecanismo utilizado para estabelecer uma conexao com o banco de dados

//um aplicativo precisa de uma conexao 
// para executar consultas, inserções, atualizações ou outras operações 
// no banco de dados. 