var express = require("express");
var router = express.Router();
const Validation = require("fastest-validation");
const v = new Validation();
const { barang } = require("../models");
const barang = require("../models/barang");

router.get("/", function (req, res, next) {
  res.send("Barang ni boss");
});

router.get("/env", function (req, res, next) {
  res.send(process.env.APP_NAME);
});

//For Post
router.post("/", async (req, res, next) => {
  //For Validating
  const schema = {
    namaBarang: "String",
    deskripsi: "String | Optional",
  };

  const Validation = v.Validation(req.body, schema);
  if (Validation.length) {
    return res.status(400).json(Validation);
  }

  // Create
  const barang = await barang.create(req, body);
  res.json({
    status: 200,
    message: "Selamat anda telah membuat data ",
    data: barang,
  });
});

module.exports = router;
