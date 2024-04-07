import prisma from "@/lib/db";
import Link from "next/link";
import { cn } from "@/lib/utils";

async function getFeedbacks(sectionId: string) {
  if (!sectionId) throw new Error("No sectionId provided");

  let feedbacks;
  try {
    feedbacks = await prisma.feedbackToFeedbackSection.findMany({
      where: {
        feedbackSectionId: sectionId,
      },
    });
  } catch {
    throw new Error("Failed to get feedbacks");
  }

  const numberOfPlannedFeedbacks = feedbacks.filter(
    (feedback) => feedback.status === "planned"
  ).length;
  const numberOfInprogressFeedbacks = feedbacks.filter(
    (feedback) => feedback.status === "inprogress"
  ).length;
  const numberOfLiveFeedbacks = feedbacks.filter(
    (feedback) => feedback.status === "live"
  ).length;

  return {
    numberOfPlannedFeedbacks,
    numberOfInprogressFeedbacks,
    numberOfLiveFeedbacks,
  };
}

export default async function RoadmapPanel({ params }: { params: string }) {
  const {
    numberOfPlannedFeedbacks,
    numberOfInprogressFeedbacks,
    numberOfLiveFeedbacks,
  } = await getFeedbacks(params);

  const roadmapOptions = [
    {
      label: "Planned",
      backgroundColor: "bg-orange",
      numberOfFeedbacks: numberOfPlannedFeedbacks,
    },
    {
      label: "In Progress",
      backgroundColor: "bg-primary",
      numberOfFeedbacks: numberOfInprogressFeedbacks,
    },
    {
      label: "Live",
      backgroundColor: "bg-lighterBlue",
      numberOfFeedbacks: numberOfLiveFeedbacks,
    },
  ];

  return (
    <div className="flex flex-col px-3 pt-6">
      <div className="flex justify-between items-center">
        <h3 className="text-lg text-secondDark font-semibold">Roadmap</h3>
        <Link
          href={`/section/${params}/roadmap`}
          className="text-blue underline font-semibold"
        >
          View
        </Link>
      </div>
      <div className="flex flex-col pt-3 gap-y-2">
        {roadmapOptions.map(({ label, backgroundColor, numberOfFeedbacks }) => (
          <div className="flex justify-between items-center" key={label}>
            <span className={cn("p-1 rounded-full", backgroundColor)} />
            <span className="text-base text-grey mr-auto pl-3">{label}</span>
            <span className="text-base text-grey font-semibold">
              {numberOfFeedbacks}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
