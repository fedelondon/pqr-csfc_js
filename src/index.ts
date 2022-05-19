import connectDB from "./database";
import app from "./app";

//Connect to database
connectDB();

//Annonimus function that start application
(async (): Promise<any> => {
  await app.listen(app.get('PORT'));
  console.log("Server is running in port: ", app.get('PORT'));
})();
