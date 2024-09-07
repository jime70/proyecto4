const express = require("express");
const cors = require("cors");

const port = process.env.PORT;
const serverurl = process.env.SERVER_URL;
const app = express();

app.use(cors());
app.use(express.json());
app.use("/api/reservas", require("./routes/index")) //crea ruta principal http://localhost:3001/api/reservas
app.listen(port, () => {
  console.log(`servidor corriendo en el puerto`);
});
