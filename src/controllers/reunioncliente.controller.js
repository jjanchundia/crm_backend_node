const { Pool } = require('pg');

const pool = new Pool({
    host:'localhost',
    user:'postgres',
    password:'ms2010adkp4100',
    database:'crm',
    port:'5432'
});

const getReunionClientes = async (req, res)=>{
    const response = await pool.query("SELECT * FROM reunion_cliente");
    res.status(200).json(response.rows);
}

const getReunionClientesbyId = async (req, res)=>{
    const id = req.params.id;
    const response = await pool.query("SELECT * FROM reunion_cliente where idreunion_cliente = $1", [id]);
    res.status(200).json(response.rows);
}

const createReunionCliente = async (req, res)=>{
    const {idreunion, idcliente} = req.body;
    const response = await pool.query("INSERT INTO reunion_cliente(idreunion, idcliente) values($1, $2)", [idreunion, idcliente]);
    console.log(response);
    res.json({
        message: "Reunión-Cliente creado",
        body: {
            user:{idreunion, idcliente}
        }
    });
}

const updateReunionCliente = async (req, res)=>{
    const id = req.params.id;
    const {idreunion, idcliente} = req.body;
    const response = await pool.query("UPDATE reunion_cliente SET idreunion= $1, idcliente= $2 where idreunion_cliente = $3", [
        idreunion, idcliente, id
    ]);
    res.json(`Reunión-Cliente actualizado`);
}

const deleteReunionCliente = async (req, res)=>{
    const id = req.params.id;
    const response = await pool.query("DELETE FROM reunion_cliente where idreunion_cliente = $1", [id]);
    res.json(`Reunión-Cliente: ${id} eliminado`);
}

module.exports ={
    getReunionClientes,
    getReunionClientesbyId,
    createReunionCliente,
    deleteReunionCliente,
    updateReunionCliente
}