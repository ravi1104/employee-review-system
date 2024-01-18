import server from "./index.js";
import { connectToDb } from "./src/config/db.js";

const local=3000

server.listen(process.env.PORT|| local, async () => {
  await connectToDb();
  console.log(`server is running at port 3000`);
});
