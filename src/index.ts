import  express  from "express";
import userRoute from "./routes/user";

const app = express();

app.use(express.json()); 

app.get("/", (req, res) => {
    res.send("Hello, World! Its Working");
});


app.use("/user", userRoute);

app.listen(3000, () => {
    console.log("Server is running on port 3000");
    console.log("Server URL: http://localhost:3000");
});