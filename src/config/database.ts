import mongoose from 'mongoose';

const connectToDatabase = () => {
  const mode = process.env.MODE;
  const dbUri =
    mode === 'PROD' ? process.env.MONGO_PROD_URL : process.env.DB_LOCAl_URI;

  mongoose
    .connect(dbUri, {
      dbName: 'Linkedin',
    })
    .then((con) => {
      if (mode.match('DEV')) {
        console.log(
          `Connected to MongoDB with Host: ${con.connection.host}:${con.connection.port}`
        );
      }
      if (mode.match('PROD')) {
        console.log('Connected to MongoDB in Production environment');
      }
    })
    .catch((error) => {
      console.log(error);
    });
};

export default connectToDatabase;
