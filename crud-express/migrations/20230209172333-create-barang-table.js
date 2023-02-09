const { Sequelize } = require("../models/index");

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("barang", {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
      namaBarang: {
        type: Sequelize.STRING,
      },
      deskripsi: {
        type: Sequelize.STRING,
      },
      masuk: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      keluar: {
        type: Sequelize.STRING,
        allowNull: false,
      },
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("barang");
  },
};
