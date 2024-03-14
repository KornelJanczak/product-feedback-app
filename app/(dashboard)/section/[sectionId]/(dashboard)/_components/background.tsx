import ImageBackground from "@/components/image-uploading/image-background";
import ImageUploaderButton from "@/components/image-uploading/image-uploader-button";
import getBase64 from "@/lib/get-local-base64";
import { ImagePlus } from "lucide-react";
import DeleteBackgroundImageAlert from "./delete-background-image-alert";

interface IBackground {
  image?: string | null;
  sectionId: string;
  sectionTitle: string;
  currentUserIsAdmin: boolean;
}

export default async function Background({
  image,
  sectionId,
  sectionTitle,
  currentUserIsAdmin,
}: IBackground) {
  const image64 = image ? await getBase64(image) : null;

  if (!currentUserIsAdmin)
    <ImageBackground image={image} image64={image64} className="h-44" />;

  if (currentUserIsAdmin)
    return (
      <ImageBackground
        image={image}
        image64={image64}
        className="h-44"
        buttonsWithoutImage={
          <ImageUploaderButton
            actionType="feedbackSectionBackgroundImage"
            successToast={`We upload background image for ${sectionTitle}!`}
            errorToast="Uploading background image for section failed!"
            className="rounded right-4 bottom-4"
            inputValue={sectionId}
          >
            <ImagePlus width={22} height={22} color="#fff" />
          </ImageUploaderButton>
        }
        buttonsWithImage={
          <>
            <ImageUploaderButton
              actionType="feedbackSectionBackgroundImage"
              successToast={`We upload background image for ${sectionTitle}!`}
              errorToast="Uploading background image for section failed!"
              className="rounded right-4 bottom-4"
              inputValue={sectionId}
            >
              <ImagePlus width={22} height={22} color="#fff" />
            </ImageUploaderButton>
            <DeleteBackgroundImageAlert
              sectionId={sectionId}
              sectionTitle={sectionTitle}
            />
          </>
        }
      />
    );
}
