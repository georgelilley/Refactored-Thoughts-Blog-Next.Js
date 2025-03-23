import { MongoClient } from "mongodb";

const uri = process.env.MONGODB_URI; // Store your connection string in an environment variable
const options = {};

let client;
let clientPromise;

if (!global._mongoClientPromise) {
  client = new MongoClient(uri, options);
  global._mongoClientPromise = client.connect();
}
clientPromise = global._mongoClientPromise;

export default clientPromise;