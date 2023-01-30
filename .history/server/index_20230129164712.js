import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import helmet from "helmet";
import morgan from "morgan";

import clientRoutes from "./routes/client.js";
import generalRoutes from "./routes/general.js";
import managementRoutes from "./routes/management.js";
import salesRoutes from "./routes/sales.js";

import { dataUser,dataProduct, dataProductStat, dataTransaction,dataOverallStat} from "./data/index.js";
import User from './models/User.js'
import Product from './models/Product.js'
import ProductStat from './models/ProductStat.js'
import Transaction from './models/Transactions.js'
import OverallStat from './models/OverallStat.js'


/*Configurations */
dotenv.config();
const app = express();
app.use(express.json());
app.use(helmet());
app.use(helmet.crossOriginResourcePolicy({ policy: "cross-origin" }));
app.use(morgan("common"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());

/*ROUTES */
app.use("/client", clientRoutes);
app.use("/general", generalRoutes);
app.use("/management", managementRoutes);
app.use("/sales", salesRoutes);

/*MONGOOSE SETUP */
const PORT = process.env.PORT;
mongoose.set('strictQuery', false)
mongoose
  .connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    app.listen(PORT, async() => {
      console.log(`listening on port : ${PORT}`);
      //one time upload fake data
      // await User.insertMany(dataUser)
      // await Product.insertMany(dataProduct)
      // await ProductStat.insertMany(dataProductStat)
      // await Transaction.insertMany(dataTransaction)
    });
  })
  .catch((error) => {
    console.log(`${error} did not connect`);
  });
