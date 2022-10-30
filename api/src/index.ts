import express from "express";
import cors from "cors";
import { sseMiddleware } from "express-sse-middleware";

const app = express();

app.use(cors({ origin: ["http://localhost:3000"] }));
app.use(sseMiddleware);
app.get("/path", (req, res) => {
  const sse = res.sse();

  let count = 0;
  setInterval(() => {
    console.log(res);
    sse.send(`REST API localhost:4000`);
  }, 4000);
});

app.listen(4000, () => {
  console.log(`REST API localhost:4000`);
});
