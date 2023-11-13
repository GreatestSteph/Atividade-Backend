import Usuario from "./modelo/usuario.js"

const usuario = new Usuario(1, 'Helena', "Beatriz", "HelandaABC1200", "Sao Paulo", "SP", "12323-123");

//usuario.excluir().then(() => {
//    console.log('Usuario excluido com sucesso!');
//}).catch((erro) => {
//    console.log('Não foi possível excluir o usuário!' + erro.message);
//})

usuario.consultar().then((listaUsuarios) => {
    for (const usuario of listaUsuarios){
        console.log(usuario.toJSON())
    }
}).catch((erro) => {
    console.log('Não foi possível consultar o usuário!' + erro.message);
})