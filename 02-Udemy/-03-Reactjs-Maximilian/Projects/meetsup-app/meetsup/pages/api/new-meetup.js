import MongoClient from "mongodb";

async function handler(req, res) {
  if (req.method === "POST") {
    const data = req.body;

    const client = await MongoClient.connect(
      "mongodb+srv://mahmoud05:3Gs5ptMitrpaBtt@cluster0.3oztyhp.mongodb.net/test?retryWrites=true&w=majority"
    );
    const db = client.db();

    const meetupsCollection = db.collection("test");

    const result = await meetupsCollection.insertOne(data);

    console.log(result);

    client.close();

    res.status(201).json({ message: "Meetup inserted!" });
  }
}

export default handler;
