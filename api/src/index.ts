import express, { Request, Response } from "express";
import cors, { CorsOptions } from "cors";
import { sseMiddleware } from "express-sse-middleware";

const PORT = 4000;

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

/** cors region */
const options: CorsOptions = {
  origin: ["http://localhost:3000"],
};
app.use(cors(options));
/** region emd */

app.get("/init", (req: Request, res: Response) => {
  res.status(200).send({
    message: "init",
  });

  res.writeHead(200, { "Content-Type": "text/plain" });
  res.end("hello express\n");
});

/** sse region */
app.use(sseMiddleware);
app.get("/events", (req, res) => {
  const sse = res.sse();

  let count = 0;
  setInterval(() => {
    sse.send(String(count++));
  }, 4000);
});
/** region emd */

app.listen(PORT, () => {
  console.log(`REST API localhost:4000`);
});
