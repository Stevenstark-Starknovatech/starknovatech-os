const express = require("express");
const cors = require("cors");

const pool = require("./config/db");

const leadRoutes = require("./routes/leadRoutes");
const clientRoutes = require("./routes/clientRoutes");
const projectRoutes = require("./routes/projectRoutes");
const invoiceRoutes = require("./routes/invoiceRoutes");
const proposalRoutes = require("./routes/proposalRoutes");

require("dotenv").config();

const app = express();

app.use(cors());
app.use(express.json());

app.use("/", leadRoutes);
app.use("/", clientRoutes);
app.use("/", projectRoutes);
app.use("/", invoiceRoutes);
app.use("/", proposalRoutes);

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