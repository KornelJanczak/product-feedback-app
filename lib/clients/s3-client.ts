import { S3Client } from "@aws-sdk/client-s3";

const s3Client = new S3Client({
  region: "eu-north-1",
  credentials: {
    accessKeyId: process.env.AWS_ACCESS_KEY_ID2 as string,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY2 as string,
  },
});

export default s3Client;
