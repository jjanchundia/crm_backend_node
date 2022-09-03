const { Pool } = require('pg');

const pool = new Pool({
    host:'localhost',
    user:'postgres',
    password:'ms2010adkp4100',
    database:'crm',
    port:'5432'
});

const getProyect = async (req, res)=>{
    const response = await pool.query("SELECT * FROM proyecto");
    res.status(200).json(response.rows);
}

const getProyectbyId = async (req, res)=>{
    const id = req.params.id;
    const response = await pool.query("SELECT * FROM proyecto where idproyecto = $1", [id]);
    res.status(200).json(response.rows);
}

const createProject = async (req, res)=>{
    const {nombres, descripcion, enlace} = req.body;
    const response = await pool.query("INSERT INTO proyecto(nombres, descripcion) values($1, $2)", [nombres, descripcion]);
    console.log(response);
    res.json({
        message: "proyecto creado",
        body: {
            user:{nombres, descripcion, enlace}
        }
    });
}

const updateProject = async (req, res)=>{
    const id = req.params.id;
    const {nombres, descripcion} = req.body;
    const response = await pool.query("UPDATE proyecto SET nombres= $1, descripcion= $2 where idproyecto = $3", [
        nombres, descripcion, id
    ]);
    res.json(`proyecto actualizado`);
}

const deleteProject = async (req, res)=>{
    const id = req.params.id;
    const response = await pool.query("DELETE FROM proyecto where idproyecto = $1", [id]);
    res.json(`proyecto: ${id} eliminado`);
}

module.exports ={
    getProyect,
    getProyectbyId,
    createProject,
    deleteProject,
    updateProject
}