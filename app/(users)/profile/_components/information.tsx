export default function Information({
  userName,
  createDate,
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
      </div>
    </div>
  );
}
