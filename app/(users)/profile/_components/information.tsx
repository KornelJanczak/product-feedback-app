export default function Information({
  userName,
  createDate,
  profileInformation,
}: {
  userName: string;
  createDate: Date;
  profileInformation: ProfileInformation[];
}) {
  const dateOptions: Intl.DateTimeFormatOptions = {
    year: "numeric",
    month: "long",
    day: "numeric",
  };
  const formatedDate = createDate.toLocaleDateString("en-US", dateOptions);

  return (
    <div className="px-4 mt-60">
      <h2 className="text-2xl font-semibold text-dark">Information</h2>
      <div className="pt-2">
        <span className="text-grey text-lg">
          <strong className="text-pink"> @{userName} </strong>has been with us
          since {formatedDate}!
        </span>
        {profileInformation.map(({ data, icon, type }, i) => (
          <div key={i} className="flex items-center justify-between pl-2">
            <span className="text-grey text-base flex gap-x-1.5 ">
              {icon}
              <strong className="text-secondDark">{type}: </strong>
              {type === "GitHub" && (
                <a href={data as string}>
                  {data ? data : "no information available."}
                </a>
              )}
              {type !== "GitHub" && (
                <p>{data ? data : "no information available."}</p>
              )}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
