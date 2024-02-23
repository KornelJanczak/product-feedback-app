import GithubIcon from "@/public/icons/github";
import EmailIcon from "@/public/icons/email";
import Link from "next/link";

export default function MainInformation({
  location,
  bio,
  email,
  gitHub,
}: {
  bio?: string | null;
  location: ProfileInformation;
  gitHub?: string | null;
  email: string;
}) {
  return (
    <div className="flex flex-col">
      <p className="flex flex-row text-grey text-lg justify-center items-center pt-1.5">
        {location?.icon}
        {location?.data ? location.data : "no location avaible"}
      </p>

      {bio && (
        <p className="flex flex-row text-dark text-xl justify-center items-center pt-1.5">
          {bio}
        </p>
      )}
      <div className="flex justify-center items-center pt-3.5 gap-x-1">
        <Link
          href={"mailto:" + email}
          className="bg-pink p-1.5 rounded-full hover:hover:opacity-70 duration-300"
        >
          <EmailIcon width={26} height={26} stroke="#ffffff" />
        </Link>
        {gitHub && (
          <Link
            href={gitHub}
            className="bg-pink p-1.5 rounded-full hover:hover:opacity-70 duration-300"
          >
            <GithubIcon width={26} height={26} />
          </Link>
        )}
      </div>
    </div>
  );
}
