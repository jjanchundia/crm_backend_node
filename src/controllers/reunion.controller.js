const { Pool } = require('pg');

const pool = new Pool({
    host:'localhost',
    user:'postgres',
    password:'ms2010adkp4100',
    database:'crm',
    port:'5432'
});

const getReunion = async (req, res)=>{
    const response = await pool.query("SELECT * FROM reunion");
    res.status(200).json(response.rows);
}

const getrReunionsbyId = async (req, res)=>{
    const id = req.params.id;
    const response = await pool.query("SELECT * FROM reunion where idreunion = $1", [id]);
    res.status(200).json(response.rows);
}

const createReunion = async (req, res)=>{
    const {nombre, descripcion, enlace} = req.body;
    const response = await pool.query("INSERT INTO reunion(nombre, descripcion, enlace) values($1, $2, $3)", [nombre, descripcion, enlace]);
    console.log(response);
    res.json({
        message: "reunion creada",
        body: {
            user:{nombre, descripcion, enlace}
        }
    });
}

const updateReunion = async (req, res)=>{
    const id = req.params.id;
    const {nombre, descripcion, enlace} = req.body;
    const response = await pool.query("UPDATE reunion SET nombre= $1, descripcion=$2, enlace= $3 where idreunion = $4", [
        nombre, descripcion, enlace, id
    ]);
    res.json(`reunion actualizada`);
}

const deleteReunion = async (req, res)=>{
    const id = req.params.id;
    const response = await pool.query("DELETE FROM reunion where idreunion = $1", [id]);
    res.json(`reunion: ${id} eliminado`);
}

module.exports ={
    getReunion,
    getrReunionsbyId,
    createReunion,
    deleteReunion,
    updateReunion
}