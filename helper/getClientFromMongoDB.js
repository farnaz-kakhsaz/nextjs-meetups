import { MongoClient } from "mongodb";

export async function getClientFromMongoDB() {
  const client = await MongoClient.connect(
    "mongodb+srv://Admin:iLzxtqi71qLaZPLK@cluster0.sl8gz.mongodb.net/meetups?retryWrites=true&w=majority"
  );
  const db = client.db();
  const meetupsCollection = db.collection("meetups");

  return [client, meetupsCollection];
}
