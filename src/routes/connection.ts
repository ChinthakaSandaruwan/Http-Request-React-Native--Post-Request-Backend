import mysql from "mysql2";


const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "SUMBN2003cs#10020",
    database: "react_native"
});

db.connect((error) => {
    if (error) {
        console.error("Error connecting to the database:", error.message);
    } else {
        console.log("Connected to the MySQL database.");
    }   });

export default db;