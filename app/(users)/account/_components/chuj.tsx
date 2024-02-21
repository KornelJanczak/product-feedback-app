"use client";
import { UploadButton } from "../../../../utils/uploadthing";

export default function ImageUpload() {
  return (
    <div>
      <UploadButton endpoint="imageUploader" />
    </div>
  );
}
