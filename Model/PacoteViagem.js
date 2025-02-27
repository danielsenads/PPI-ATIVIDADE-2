// Model/PacoteViagem.js
import PacoteViagem from "./pacoteviagem";
export default class PacoteViagem {
    #id;
    #destino;
    #preco;
    #dataPartida;
    #dataRetorno;
    #descricao;

    constructor(id, destino, preco, dataPartida, dataRetorno, descricao) {
        this.#id = id;
        this.#destino = destino;
        this.#preco = preco;
        this.#dataPartida = dataPartida;
        this.#dataRetorno = dataRetorno;
        this.#descricao = descricao;
    }

    get id() { return this.#id; }
    set id(novoId) { this.#id = novoId; }

    get destino() { return this.#destino; }
    set destino(novoDestino) { this.#destino = novoDestino; }

    get preco() { return this.#preco; }
    set preco(novoPreco) { this.#preco = novoPreco; }

    get dataPartida() { return this.#dataPartida; }
    set dataPartida(novaData) { this.#dataPartida = novaData; }

    get dataRetorno() { return this.#dataRetorno; }
    set dataRetorno(novaData) { this.#dataRetorno = novaData; }

    get descricao() { return this.#descricao; }
    set descricao(novaDescricao) { this.#descricao = novaDescricao; }

    toJSON() {
        return {
            "id": this.#id,
            "destino": this.#destino,
            "preco": this.#preco,
            "dataPartida": this.#dataPartida,
            "dataRetorno": this.#dataRetorno,
            "descricao": this.#descricao
        };
    }
}