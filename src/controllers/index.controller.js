const { Pool } = require('pg');

const pool = new Pool({
    host:'localhost',
    user:'postgres',
    password:'ms2010adkp4100',
    database:'crm',
    port:'5432'
});

const getUsers = async (req, res)=>{
    const response = await pool.query("SELECT * FROM usuario");
    res.status(200).json(response.rows);
}

const getUsersId = async (req, res)=>{
    const id = req.params.id;
    const response = await pool.query("SELECT * FROM usuario where idusuario = $1", [id]);
    res.status(200).json(response.rows);
}

const getUserLogin = async (req, res)=>{
    const {usuario, clave} = req.query;
    const response = await pool.query("SELECT * FROM usuario where usuario=$1 and clave= $2", [usuario, clave]);
    res.status(200).json(response.rows);
}

const createUser = async (req, res)=>{
    const {usuario, clave} = req.body;
    const response = await pool.query("INSERT INTO usuario(usuario, clave) values($1, $2)", [usuario, clave]);
    console.log(response);
    res.send('creado');
}

const updateUser = async (req, res)=>{
    const id = req.params.id;
    const {usuario, clave} = req.body;
    // console.log(usuario);
    // res.send(usuario);
    const response = await pool.query("UPDATE usuario SET usuario= $1, clave= $2 where idusuario = $3", [
        usuario, clave, id
    ]);
    res.json(`Usuario actualizado`);
}

const deleteUser = async (req, res)=>{
    const id = req.params.id;
    const response = await pool.query("DELETE FROM usuario where idusuario = $1", [id]);
    res.json(`Usuario: ${id} eliminado`);
}



module.exports ={
    getUsers,
    getUsersId,
    createUser,
    updateUser,
    deleteUser, getUserLogin
}