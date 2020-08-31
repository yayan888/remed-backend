const express = require('express')
const { produkController } = require('../controller')
const router = express.Router()

router.get('/getProduk', produkController.getProduk)
router.delete("/deleteProduk/:id", produkController.deleteProduk);
router.patch("/editProduk/:id", produkController.editProduk);
router.post('/postProduk', produkController.addProduk)
router.get('/getProdukAsc', produkController.getProdukAsc)
module.exports = router