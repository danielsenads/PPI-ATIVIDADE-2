import { Router } from "express";
import ClienteCtrl from "../Controllers/ClienteCtrl.js"; // Verifique o caminho correto

const rotaCliente = Router(); // Mini aplicação HTTP
const cliCtrl = new ClienteCtrl();

rotaCliente.get("/", cliCtrl.consultar);
rotaCliente.post("/", cliCtrl.gravar);
rotaCliente.put("/", cliCtrl.alterar);
rotaCliente.patch("/", cliCtrl.alterar);
rotaCliente.delete("/", cliCtrl.excluir);

export default rotaCliente;
