const express = require("express");

const authMiddleware = require("../middleware/authMiddleware");
const { createCatController, getAllCatController, updateCatController, deleteCatController } = require("../controller/categoryController");

const router = express.Router();


//CREATE CAT
router.post('/create', authMiddleware, createCatController )

//GET ALL CAT
router.get('/getAll', getAllCatController )

//UPDATE CAT
router.put('/update/:id', authMiddleware, updateCatController)

//DELETE CAT
router.delete('/delete/:id', authMiddleware,deleteCatController )

module.exports = router;
