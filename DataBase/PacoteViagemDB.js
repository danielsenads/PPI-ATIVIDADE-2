// Database/PacoteViagemDB.js
import conectar from "./conexao.js";
import PacoteViagem from "../Model/PacoteViagemDB.js";

export default class PacoteViagemDB {
    constructor() {
        this.init();
    }

    async init() {
        try {
            const conexao = await conectar();
            const sql = `CREATE TABLE IF NOT EXISTS pacote_viagem (
                id INT AUTO_INCREMENT PRIMARY KEY,
                destino VARCHAR(100) NOT NULL,
                preco DECIMAL(10,2) NOT NULL,
                data_partida DATE NOT NULL,
                data_retorno DATE NOT NULL,
                descricao TEXT
            )`;
            await conexao.execute(sql);
        } catch (erro) {
            console.log("Erro ao criar a tabela pacote_viagem: " + erro);
        }
    }

    async gravar(pacote) {
        if (pacote instanceof PacoteViagem) {
            const conexao = await conectar();
            const sql = `INSERT INTO pacote_viagem (destino, preco, data_partida, data_retorno, descricao)
                         VALUES (?, ?, ?, ?, ?)`;
            const parametros = [
                pacote.destino,
                pacote.preco,
                pacote.dataPartida,
                pacote.dataRetorno,
                pacote.descricao
            ];
            await conexao.execute(sql, parametros);
            await conexao.release();
        }
    }

    async alterar(pacote) {
        if (pacote instanceof PacoteViagem) {
            const conexao = await conectar();
            const sql = `UPDATE pacote_viagem SET destino = ?, preco = ?, data_partida = ?, data_retorno = ?, descricao = ?
                         WHERE id = ?`;
            const parametros = [
                pacote.destino,
                pacote.preco,
                pacote.dataPartida,
                pacote.dataRetorno,
                pacote.descricao,
                pacote.id
            ];
            await conexao.execute(sql, parametros);
            await conexao.release();
        }
    }

    async excluir(pacote) {
        if (pacote instanceof PacoteViagem) {
            const conexao = await conectar();
            const sql = `DELETE FROM pacote_viagem WHERE id = ?`;
            const parametros = [pacote.id];
            await conexao.execute(sql, parametros);
            await conexao.release();
        }
    }

    async consultar() {
        const conexao = await conectar();
        const sql = `SELECT * FROM pacote_viagem ORDER BY destino`;
        const [registros] = await conexao.execute(sql);
        await conexao.release();
        let listaPacotes = [];
        for (const registro of registros) {
            const pacote = new PacoteViagem(
                registro.id,
                registro.destino,
                registro.preco,
                registro.data_partida,
                registro.data_retorno,
                registro.descricao
            );
            listaPacotes.push(pacote);
        }
        return listaPacotes;
    }
}
