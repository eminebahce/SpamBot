const Sequelize = require("sequelize");
const connectionString =
  process.env.DATABASE_URL ||
  "postgres://postgres:secret@localhost:5432/postgres";
const sequelize = new Sequelize(connectionString, {
  define: { timestamps: true },
  logging: false
});

sequelize
  .sync({ force: false })
  .then(() => {
    console.log("Sequelize updated the database schema");
  })
  .catch(console.error);

module.exports = sequelize;
