import GithubIcon from "@/public/icons/github";
import EmailIcon from "@/public/icons/email";
import Link from "next/link";

export default function MainInformation({
  location,
  bio,
  email,
  gitHub,
  userName,
  createDate,
  company,
  preferRole,
}: {
  bio?: string | null;
  location: ProfileInformation;
  gitHub?: string | null;
  email: string;
  userName: string;
  createDate: Date;
  company: ProfileInformation;
  preferRole: ProfileInformation;
}) {
  const information = [company, preferRole];

  const dateOptions: Intl.DateTimeFormatOptions = {
    year: "numeric",
    month: "long",
    day: "numeric",
  };

  const formatedDate = createDate.toLocaleDateString("en-US", dateOptions);

  return (
    <div className="flex flex-col">
      <p className="flex flex-row text-grey text-lg justify-center items-center pt-1.5">
        {location?.icon}
        {location.data && location.data}
        {!location?.data && "No location"}
      </p>
      <div className="flex flex-row gap-2 items-center justify-center pt-1.5">
        {information.map(({ data, icon, type }, i) => (
          <div key={i} className="flex items-center justify-between">
            <span className="text-grey text-base flex gap-x-1.5 ">
              {icon}
              <p>
                {data && data}
                {!data && `No ${type.toLowerCase()}`}
              </p>
            </span>
          </div>
        ))}
      </div>
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
      <span className="text-secondDark font-semibold text-lg py-7 px-5 text-center">
        <strong className="text-pink"> @{userName} </strong>has been with us
        since {formatedDate}!
      </span>
    </div>
  );
}
