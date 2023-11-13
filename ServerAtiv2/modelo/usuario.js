import UsuarioDAO from "../persistencia/usuarioDAO.js";

// cria classe usuario
export default class Usuario{
    #id
    #nome
    #sobrenome
    #username
    #cidade
    #estado
    #cep

    constructor(id, nome, sobrenome, username, cidade, estado, cep){
        this.#id = id;
        this.#nome = nome;
        this.#sobrenome = sobrenome;
        this.#username = username;
        this.#cidade = cidade;
        this.#estado = estado;
        this.#cep = cep;
    }

    get id(){
        return this.#id
    }

    set id(novoid){
        this.#id = novoid
    }


    get nome(){
        return this.#nome
    }

    set nome(novonome){
        this.#nome = novonome
    }


    get sobrenome(){
        return this.#sobrenome
    }

    set sobrenome(novosobrenome){
        this.#sobrenome = novosobrenome
    }



    get username(){
        return this.#username
    }

    set username(novousername){
        this.#username = novousername
    }



    get cidade(){
        return this.#cidade
    }

    set cidade(novacidade){
        this.#cidade = novacidade
    }



    get estado(){
        return this.#estado
    }

    set estado(novoestado){
        this.#estado = novoestado
    }



    get cep(){
        return this.#cep
    }

    set cep(novocep){
        this.#cep = novocep
    }

    //override 
    // ele faz o javascript converter o objeto de outra forma 
    // na saida do terminal
    toString(){
        const conteudo =
        `
            id: ${this.#id}
            nome: ${this.#nome},
            sobrenome: ${this.#sobrenome},
            username: ${this.#username},
            cidade: ${this.#cidade},
            estado: ${this.#estado},
            cep: ${this.#cep}
        `;
        return conteudo
    }

    //O método toJSON tambem serve para personalizar a aparência da saída de um objeto. 
    toJSON(){
        return {
            id: this.#id,
            nome: this.#nome,
            sobrenome: this.#sobrenome,
            username: this.#username,
            cidade: this.#cidade,
            estado: this.#estado,
            cep: this.#cep,
        }
    }

    //o async quer dizer que esses metodos estao sendo executados em paralelo
    //eles tambem aguardam uma resposta que nao depende dessa aplicaçao
    //eles dependem da ação do banco de dados
    async gravar(){
        const usuDAO = new UsuarioDAO();
        await usuDAO.gravar(this);
    };
    async atualizar(){
        const usuDAO = new UsuarioDAO();
        await usuDAO.atualizar(this);
    };
    async excluir(){
        const usuDAO = new UsuarioDAO();
        await usuDAO.excluir(this);
    };
    async consultar(){
        const usuDAO = new UsuarioDAO();
        return await usuDAO.consultar(this);
    };
}