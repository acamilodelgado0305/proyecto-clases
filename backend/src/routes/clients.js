//importamos router desde express
const { Router } = require("express");

//almacenamos Router en router
const router = Router();

//importamos los metodos desde controllers

const {
  getClient,
  getClients,
  createClient,
  updateClient,
  deleteClient,
} = require("../controllers/client.controller");
const { route } = require("../app");

// asociar o enrutar a cada direccon si esta vacia o esta identificada
router.route("/")
.get(getClients)
.post(createClient);

router.route("/:id")
.get(getClient)
.put(updateClient)
.delete(deleteClient);

module.exports = router;
