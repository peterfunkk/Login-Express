const express = require('express')
const path = require('path')
const app = express()
const port = 4001
const cors = require('cors')
const cookieParser = require("cookie-parser")
const bodyParser = require("body-parser")
const connectDB = require("./db/Db.js")
const UserRouter = require('./Routes/User.js')
//settings
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs')

// middlewares

app.use(express.json());
app.use(express.urlencoded({extended: false}))
app.use(express.static('Public'));
app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(cors({
  origin: 'http://localhost:3000',
  credentials: true
}));

// routes
app.use("/", UserRouter);




async function main() {
  await connectDB();  
}

main();


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})