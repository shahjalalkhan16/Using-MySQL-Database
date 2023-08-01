const mysql = require("mysql");

const connectDB = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE,
});
try {
  connectDB.connect((err, results, fields) => {
  //connectDB.query("select * from my_table", (err, results, fields) => {
    if (err) {
      console.log(err);
    } else {
      return console.log("DB is connected");
    }
  });
} catch (err) {
  console.log("DB is not connected");
}

exports.module = connectDB;
