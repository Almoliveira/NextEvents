import { connectDatabase, insertDocument } from "../../helpers/db-util";

async function handler(req, res) {
  if (req.method === "POST") {
    const userEmail = req.body.email;

    if (!userEmail || !userEmail.includes("@")) {
      res.status(422).json({ message: "Invalid email address." });
      return;
    }

    let client;

    try {
      client = await connectDatabase();
    } catch (er) {
      res.status(500).json({ message: "Connecting to database failed!" });
      return;
    }

    try {
      await insertDocument(client, "newsletter", { email: userEmail });
      client.close();
    } catch (er) {
      res.status(500).json({ message: "Inserting data failed!" });
      return;
    }

    client.close();

    res.status(201).json({ message: "Signed up!" });
  }
}

export default handler;