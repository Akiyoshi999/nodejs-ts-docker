import app from "./index";
import env from "dotenv";
env.config();

const PORT: number = parseInt(process.env.PORT || "3000");

app
  .listen(PORT, () => {
    console.log(`http://localhost:${PORT}`);
  })
  .on("error", (err: NodeJS.ErrnoException) => {
    console.log(err);
  });
