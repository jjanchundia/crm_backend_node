const {Router} = require("express");
const { getUsers, createUser, getUserLogin, getUsersId, deleteUser, updateUser } = require("../controllers/index.controller");
const { getClientes, createCliente, getClientesbyId, deleteCliente, updateCliente } = require("../controllers/cliente.controller");
const { getProyect, getProyectbyId, createProject, deleteProject, updateProject } = require("../controllers/proyecto.controller");
const { getReunion, getrReunionsbyId, createReunion, deleteReunion, updateReunion } = require("../controllers/reunion.controller");
const { getContactos, getContactosbyId, createContacto, deleteContacto, updateContacto } = require("../controllers/contacto.controller");

const router = Router();

//Usuario
router.get('/users', getUsers);
router.post('/users', createUser);
router.get('/login/', getUserLogin);
router.get('/users/:id', getUsersId);
router.delete('/users/:id', deleteUser);
router.put('/users/:id', updateUser);

//Clientes
router.get('/clientes', getClientes);
router.get('/clientes/:id', getClientesbyId);
router.post('/clientes', createCliente);
router.delete('/clientes/:id', deleteCliente);
router.put('/clientes/:id', updateCliente);

//Proyectos
router.get('/proyectos', getProyect);
router.get('/proyectos/:id', getProyectbyId);
router.post('/proyectos', createProject);
router.delete('/proyectos/:id', deleteProject);
router.put('/proyectos/:id', updateProject);

//Contactos
router.get('/contactos', getContactos);
router.get('/contactos/:id', getClientesbyId);
router.post('/contactos', createContacto);
router.delete('/contactos/:id', deleteContacto);
router.put('/contactos/:id', updateContacto);

//Reuniones
router.get('/reuniones', getReunion);
router.get('/reuniones/:id', getrReunionsbyId);
router.post('/reuniones', createReunion);
router.delete('/reuniones/:id', deleteReunion);
router.put('/reuniones/:id', updateReunion);

// //Proyectos
// router.get('/proyectos', getProyect);
// router.get('/proyectos/:id', getProyectbyId);
// router.post('/proyectos', createProject);
// router.delete('/proyectos/:id', deleteProject);
// router.put('/proyectos/:id', updateProject);

module.exports = router;

