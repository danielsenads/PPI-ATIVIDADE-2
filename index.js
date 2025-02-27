import Cliente from "./Model/cliente.js";


var cliente = new Cliente("111.111.111-11", 
                          "Daniel Sena", 
                          "Rua 1",
                          "Bairro 1",
                          "Cidade 1",
                          "SP",
                          "(11) 1111-1111",
                          "2eH3y@example.com");

//gravar o cliente no banco de dados
//resolvendo os métodos assíncronos

/*cliente.gravar().then(() => {
    console.log("Cliente gravado com sucesso!");
}).catch((erro) => {
    console.log("Erro ao gravar o cliente: " + erro);
});*/

//alterar o cliente no banco de dados
/*cliente.alterar().then(() => {
    console.log("Cliente alterado com sucesso!");
}).catch((erro) => {
    console.log("Erro ao alterar o cliente: " + erro);
});*/

cliente.excluir().then(() => {
    console.log("Cliente excluido com sucesso!");
}).catch((erro) => {
    console.log("Erro ao excluir o cliente: " + erro);
})
//recuperação da informação a partir do banco de dados
cliente.consultar().then((listaClientes) => {
    for (const cliente of listaClientes) {
        console.log(cliente.toJSON());
    }
});