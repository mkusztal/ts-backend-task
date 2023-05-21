import express, { Request, Response } from "express";
import cors from "cors";
import bookRoutes from "./routes/books.routes";

const app = express();
app.use(cors());

app.use("/", bookRoutes);
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.get("/", (req: express.Request, res: express.Response) => {
  res.send("Books API");
});

app.use((req, res) => {
  res.status(404).json({ message: "404 not found..." });
});

const server = app.listen(3000, () => {
  console.log("Server is listening on port 3000");
});
