const { Pool } = require('pg');

const pool = new Pool({
    host:'localhost',
    user:'postgres',
    password:'ms2010adkp4100',
    database:'crm',
    port:'5432'
});

const getContactos = async (req, res)=>{
    const response = await pool.query("select cc.idcontacto, cc.numero, cc.idcliente, cc.nombrecontacto, c.nombres || ' ' || c.apellidos as cliente from cliente c join contacto cc on cc.idcliente = c.idcliente");
    res.status(200).json(response.rows);
}

const getContactosbyId = async (req, res)=>{
    const id = req.params.id;
    const response = await pool.query("select cc.idcontacto, cc.idcliente, cc.nombrecontacto, c.nombres || ' ' || c.apellidos as cliente from cliente c join contacto cc on cc.idcliente = c.idcliente where idContacto = $1", [id]);
    res.status(200).json(response.rows);
}

const createContacto = async (req, res)=>{
    const {nombrecontacto, numero, idcliente } = req.body;
    const response = await pool.query("INSERT INTO Contacto(nombrecontacto, numero, idcliente) values($1, $2, $3)", [nombrecontacto, numero, idcliente]);
    console.log(response);
    res.json({
        message: "Contacto creado",
        body: {
            user:{nombrecontacto, numero, idcliente}
        }
    });
}

const updateContacto = async (req, res)=>{
    const id = req.params.id;
    const {nombrecontacto, numero, idcliente} = req.body;
    const response = await pool.query("UPDATE Contacto SET nombrecontacto= $1, numero=$2, idcliente= $3 where idContacto = $4", [
        nombrecontacto,numero,idcliente,id
    ]);
    res.json(`Contacto actualizado`);
}

const deleteContacto = async (req, res)=>{
    const id = req.params.id;
    const response = await pool.query("DELETE FROM Contacto where idContacto = $1", [id]);
    res.json(`Contacto: ${id} eliminado`);
}

module.exports ={
    getContactos,
    getContactosbyId,
    createContacto,
    deleteContacto,
    updateContacto
}