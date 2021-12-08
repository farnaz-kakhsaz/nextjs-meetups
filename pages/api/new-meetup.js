import { getClientFromMongoDB } from "../../helper/getClientFromMongoDB";
import { MongoClient } from "mongodb";

export default async function handler(req, res) {
  if (req.method === "POST") {
    const data = req.body;

    const [client, meetupsCollection] = await getClientFromMongoDB();

    const result = await meetupsCollection.insertOne(data);
    client.close();

    console.log(result);

    res.status(201).json({ message: "Meetup inserted!" });
  }
}
