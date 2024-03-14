import ImageBackground from "@/components/image-uploading/image-background";
import ImageUploaderButton from "@/components/image-uploading/image-uploader-button";
import { ImagePlus } from "lucide-react";
import getBase64 from "@/lib/get-local-base64";
import DeleteImageButton from "../../_components/delete-image-button";

export default async function Background({ image }: { image?: string | null }) {
  const image64 = image ? await getBase64(image) : null;

  return (
    <ImageBackground
      image={image}
      image64={image64}
      buttonsWithoutImage={
        <ImageUploaderButton
          actionType="profileBackground"
          successToast="We upload your background image!"
          errorToast="Uploading background image failed!"
          className="rounded right-4 bottom-4"
        >
          <ImagePlus width={22} height={22} color="#fff" />
        </ImageUploaderButton>
      }
      buttonsWithImage={
        <>
          <ImageUploaderButton
            actionType="profileBackground"
            successToast="We upload your background image!"
            errorToast="Uploading background image failed!"
            className="rounded right-4 bottom-4"
          >
            <ImagePlus width={22} height={22} color="#fff" />
          </ImageUploaderButton>
          <DeleteImageButton
            className="rounded right-4 bottom-14"
            type="profile"
          />
        </>
      }
    ></ImageBackground>
  );
}
