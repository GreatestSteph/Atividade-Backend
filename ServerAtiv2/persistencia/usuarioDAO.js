import Usuario from '../modelo/usuario.js';
import Conectar from "./conexao.js";

//objeto que acessa os dados

export default class UsuarioDAO{

    //oferece metodos para gravar um usuario no banco
    async gravar(usuario){
        if (usuario instanceof Usuario){
            const conexao = await Conectar(); //pega uma conexao
            const sql = "INSERT INTO usuario (nome, sobrenome, username, cidade, estado, cep) VALUES (?, ?, ?, ?, ?, ?)";
            //insere
            const parametros = [usuario.nome, usuario.sobrenome, usuario.username, usuario.cidade, usuario.estado, usuario.cep]
            const resultado = await conexao.query(sql, parametros); //executa uma consulta no banco de dados com essas instruçoes
            
            //o resultado dessa instruçao vai vir um id inserido pelo banco de dados,
            usuario.id = resultado[0].insertId;
            
            global.poolConexoes.releaseConnection(conexao); //libera a conexao

        }
    }

    async atualizar(usuario) {
        if (usuario instanceof Usuario) {
            const conexao = await Conectar(); // pega uma conexao
            const sql = "UPDATE usuario SET nome = ?, sobrenome = ?, username = ?, cidade = ?, estado = ?, cep = ? WHERE id = ?";
            // atualiza/edita
            const parametros = [usuario.nome, usuario.sobrenome, usuario.username, usuario.cidade, usuario.estado, usuario.cep, usuario.id];
    
            await conexao.query(sql, parametros); // executa uma consulta no banco de dados com essas instruções
            global.poolConexoes.releaseConnection(conexao); // libera a conexao
        }
    }

    async excluir(usuario){
        if (usuario instanceof Usuario){
            const conexao = await Conectar(); //pega uma conexao
            const sql = "DELETE FROM usuario WHERE id = ?"
            //exclui
            const parametros = [usuario.id]
            
            await conexao.query(sql, parametros); //executa uma consulta no banco de dados com essas instruçoes
            global.poolConexoes.releaseConnection(conexao); //libera a conexao
        }
    }

    async consultar(usuario){
        let listaUsuarios = []; 
        //- cria lista de usuarios;
        const conexao = await Conectar(); 
        // - estabelece uma conexao por meio da funçao conectar

        const sql = 'SELECT * FROM usuario order by nome';

        const [rows, fields] = await conexao.query(sql); //recupera as linhas dessa consulta
        
        for (const registro of rows){ //instancia usuarios
            const usuario = new Usuario(registro.id, registro.nome, registro.sobrenome, registro.usuario, registro.cidade, registro.estado, registro.cep);
            //antes de ir ao proximo usuario, adiciona o usuario a lista
            listaUsuarios.push(usuario);
        }
        return listaUsuarios 
        //retorna lista de usuarios
    }
}