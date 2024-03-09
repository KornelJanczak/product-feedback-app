import ImageBackground from "@/components/image-background";
import ImageUploaderButton from "@/components/image-uploader-button";
import getBase64 from "@/lib/getLocalBase64";
import { ImagePlus } from "lucide-react";

export default async function Background({ image }: { image?: string | null }) {
  const image64 = image ? await getBase64(image) : null;

  return (
    <ImageBackground
      image={image}
      image64={image64}
      className="h-44"
      buttonsWithoutImage={
        <ImageUploaderButton
          actionType="feedbackSectionBackgroundImage"
          successToast="We upload your background image!"
          errorToast="Uploading background image failed!"
          className="rounded right-4 bottom-4"
        >
          <ImagePlus width={22} height={22} color="#fff" />
        </ImageUploaderButton>
      }
    />
  );
}
