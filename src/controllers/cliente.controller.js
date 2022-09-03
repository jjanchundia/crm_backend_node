const { Pool } = require('pg');

const pool = new Pool({
    host:'localhost',
    user:'postgres',
    password:'ms2010adkp4100',
    database:'crm',
    port:'5432'
});

const getClientes = async (req, res)=>{
    const response = await pool.query("SELECT *, nombres || apellidos as nombrecompleto FROM cliente");
    res.status(200).json(response.rows);
}

const getClientesbyId = async (req, res)=>{
    const id = req.params.id;
    const response = await pool.query("SELECT * FROM cliente where idcliente = $1", [id]);
    res.status(200).json(response.rows);
}

const createCliente = async (req, res)=>{
    const {nombres, apellidos} = req.body;
    const response = await pool.query("INSERT INTO cliente(nombres, apellidos) values($1, $2)", [nombres, apellidos]);
    console.log(response);
    res.json({
        message: "Cliente creado",
        body: {
            user:{nombres, apellidos}
        }
    });
}

const updateCliente = async (req, res)=>{
    const id = req.params.id;
    const {nombres, apellidos} = req.body;
    const response = await pool.query("UPDATE cliente SET nombres= $1, apellidos= $2 where idcliente = $3", [
        nombres, apellidos, id
    ]);
    res.json(`Cliente actualizado`);
}

const deleteCliente = async (req, res)=>{
    const id = req.params.id;
    const response = await pool.query("DELETE FROM cliente where idcliente = $1", [id]);
    res.json(`Cliente: ${id} eliminado`);
}

module.exports ={
    getClientes,
    getClientesbyId,
    createCliente,
    deleteCliente,
    updateCliente
}