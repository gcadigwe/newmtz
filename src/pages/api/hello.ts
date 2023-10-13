// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import fs from "fs";

type Data = {
  name: string;
};

export const config = {
  api: {
    bodyParser: {
      sizeLimit: "10mb", // Set desired value here
    },
  },
};

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const updatedJSON = {
    name: "arif updated",
    surname: "shariati updated",
  };
  fs.writeFile("./myFile.json", req.body.emails, (err) => {
    if (err) console.log("Error writing file:", err);
  });
  res.status(200).json({ name: "John Doe" });
}
