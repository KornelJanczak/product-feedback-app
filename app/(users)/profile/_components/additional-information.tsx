export default function AdditionalInformation({
  userName,
  createDate,
  company,
  preferRole,
}: {
  userName: string;
  createDate: Date;
  company: ProfileInformation;
  preferRole: ProfileInformation;
}) {
  const dateOptions: Intl.DateTimeFormatOptions = {
    year: "numeric",
    month: "long",
    day: "numeric",
  };
  const formatedDate = createDate.toLocaleDateString("en-US", dateOptions);

  const information = [company, preferRole];

  return (
    <div className="px-5 mt-80 pt-4">
      <h2 className="text-2xl font-semibold text-dark">Information</h2>
      <div className="flex flex-col gap-1 pt-2 pb-10">
        <span className="text-grey text-base">
          <strong className="text-pink"> @{userName} </strong>has been with us
          since {formatedDate}!
        </span>
        {information.map(({ data, icon, type }, i) => (
          <div key={i} className="flex items-center justify-between">
            <span className="text-grey text-base flex gap-x-1.5 ">
              {icon}
              <strong className="text-secondDark">{type}: </strong>
              <p>{data ? data : "no information available."}</p>
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
