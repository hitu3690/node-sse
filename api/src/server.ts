import http, { IncomingMessage, ServerResponse } from "http";

const PORT = 5000;

http
  .createServer((req: IncomingMessage, res: ServerResponse) => {
    console.log(req.url);
    if (req === undefined && req?.url === undefined) return;
    switch (req.url.toLowerCase()) {
      case "/events":
        res.writeHead(200, {
          Connection: "keep-alive",
          "Content-Type": "text/event-stream",
          "Cache-Control": "no-cache",
        });
        setTimeout(() => {
          res.write('data: { "message": "hello" }');
        }, 3000);
        res.end();
      default:
        res.writeHead(404);
        res.end();
    }
  })
  .listen(5000, () => {
    console.log("server running");
  });
