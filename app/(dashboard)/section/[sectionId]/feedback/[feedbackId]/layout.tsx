import { CreateCommentForm } from "./_components/create-comment-form";

interface ILayout {
  children: React.ReactNode;
  params: {
    sectionId: string;
    feedbackId: string;
  };
}

export default function Layout({ children, params }: ILayout) {
  const { sectionId, feedbackId } = params;

  return (
    <main className="relative flex flex-col justify-between">
      {children}
      <CreateCommentForm feedbackId={feedbackId} sectionId={sectionId} />
    </main>
  );
}
