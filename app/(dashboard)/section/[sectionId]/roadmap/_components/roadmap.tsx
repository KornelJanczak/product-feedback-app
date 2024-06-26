import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ITransformedFeedbackSection } from "@/lib/product/helpers/add-user-object";
import { cn } from "@/lib/utils";
import RoadmapColumn, { RoadmapColumnSkeleton } from "./roadmap-column";
import { cva } from "class-variance-authority";
import { Skeleton } from "@/components/ui/skeleton";

export type Variants = "planned" | "inprogress" | "live";

export interface IRoadmapFeedback {
  label: string;
  variant: Variants;
}

export interface IRoadmap extends IRoadmapFeedback {
  variant: Variants;
  description: string;
}

const tabClassName =
  "relative w-1/3 flex flex-col py-2.5 data-[state=active]:before:content-[''] data-[state=active]:before:absolute data-[state=active]:before:left-0 data-[state=active]:before:right-0 data-[state=active]:before:bottom-0 data-[state=active]:before:h-1 ";

const gradientVariants = cva(tabClassName, {
  variants: {
    variant: {
      planned: `data-[state=active]:before:bg-orange`,
      inprogress: `data-[state=active]:before:bg-primary`,
      live: `data-[state=active]:before:bg-lighterBlue`,
    },
  },
});

const roadmapOptions: IRoadmap[] = [
  {
    label: "Planned",
    description: "Ideas prioritized for research",
    variant: "planned",
  },
  {
    label: "In-Progress",
    description: "Currently being developed",
    variant: "inprogress",
  },
  {
    label: "Live",
    description: "Released features",
    variant: "live",
  },
];

export default async function Roadmap({
  suggestions,
  currentUserId,
}: {
  suggestions: ITransformedFeedbackSection[];
  currentUserId: string;
}) {
  return (
    <>
      <Tabs defaultValue="inprogress" className="w-full md:hidden p-0">
        <TabsList className="w-full items-center justify-around text-lightGrey font-bold p-0 border border-b-lightGrey">
          {roadmapOptions.map(({ variant, label }) => (
            <TabsTrigger
              key={variant}
              value={variant}
              className={cn(gradientVariants({ variant }))}
            >
              <p>{label}</p>
            </TabsTrigger>
          ))}
        </TabsList>

        {roadmapOptions.map(({ variant, label, description }) => (
          <TabsContent value={variant} key={variant}>
            <RoadmapColumn
              currentUserId={currentUserId}
              variant={variant}
              label={label}
              description={description}
              suggestions={suggestions}
            />
          </TabsContent>
        ))}
      </Tabs>
      <section className="hidden md:grid md:grid-cols-3 md:container md:px-0">
        {roadmapOptions.map(({ variant, label, description }) => (
          <RoadmapColumn
            key={variant}
            currentUserId={currentUserId}
            variant={variant}
            label={label}
            description={description}
            suggestions={suggestions}
          />
        ))}
      </section>
    </>
  );
}

export const RoadmapSkeleton = ({
  skeletonCount,
}: {
  skeletonCount: number;
}) => {
  return (
    <>
      <div className="pb-6 md:hidden">
        <div className="w-full">
          <Skeleton className="bg-skeletonTheme h-10" />
        </div>
        <RoadmapColumnSkeleton
          label={`${roadmapOptions[1].label} (${skeletonCount})`}
          description={roadmapOptions[1].description}
          skeletonCount={1}
        />
      </div>
      <section className="hidden md:grid md:grid-cols-3 md:container md:px-0">
        {roadmapOptions.map(({ label, description }) => (
          <RoadmapColumnSkeleton
            key={label}
            label={label}
            description={description}
            skeletonCount={skeletonCount}
          />
        ))}
      </section>
    </>
  );
};
