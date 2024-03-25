export default async function CommentContainer({
  children,
  commentsCount,
}: {
  children: React.ReactNode;
  commentsCount: number;
}) {
  return (
    <div className="my-2 mb-36">
      <h3 className="text-secondDark text-semibold text-lg sm:text-xl md:text-2xl">
        {commentsCount} Comments
      </h3>
      <div className="flex flex-col gap-6">{children}</div>
    </div>
  );
}
