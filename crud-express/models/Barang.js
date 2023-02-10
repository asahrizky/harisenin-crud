module.exports = (sequelize, DataTypes) => {
  const barang = sequelize.define(
    "barang",
    {
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
    },
    {
      tableName: "barang",
    }
  );
  return barang;
};
