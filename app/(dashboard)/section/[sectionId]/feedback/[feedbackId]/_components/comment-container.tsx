export default async function CommentContainer({
  children,
  commentsCount,
}: {
  children: React.ReactNode;
  commentsCount: number;
}) {
  return (
    <div className="my-2 mb-36 pt-2">
      <h3 className="text-secondDark text-semibold text-lg">
        {commentsCount} Comments
      </h3>
      <div className="flex flex-col gap-6 pt-0.5">{children}</div>
    </div>
  );
}
