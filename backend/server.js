const express = require("express");
const cors = require("cors");

const pool = require("./config/db");

const leadRoutes = require("./routes/leadRoutes");
const clientRoutes = require("./routes/clientRoutes");

require("dotenv").config();

const app = express();

app.use(cors());
app.use(express.json());

app.use("/", leadRoutes);
app.use("/", clientRoutes);

app.get("/", async (req, res) => {
  const result = await pool.query(
    "SELECT NOW()"
  );

  res.json({
    message: "Backend Running",
    database_time: result.rows[0],
  });
});

app.listen(process.env.PORT, () => {
  console.log(
    `Server running on port ${process.env.PORT}`
  );
});