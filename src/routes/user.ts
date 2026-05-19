import Router from "express";

const router = Router();

router.get("/get-users", (req, res) => {
    console.log("Get Users Endpoint Hit Get Method");
});

router.post("/add-user", (req, res) => {
  const name = req.body.name;
  const email = req.body.email;
  const password = req.body.password;

   console.log(name, email, password);
   res.send("Hello Post Method");
});

export default router;



