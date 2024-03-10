import ImageBackground from "@/components/image-uploading/image-background";
import getBase64 from "@/lib/getLocalBase64";

export default async function Background({ image }: { image?: string | null }) {
  const image64 = image ? await getBase64(image) : null;

  return <ImageBackground image={image} image64={image64} />;
}
