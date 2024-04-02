import BackButton from "@/components/back-button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function RoadMapPage() {
  return (
    <main>
      <div className="flex justify-between items-center px-5 py-4 bg-secondDark">
        <div className="flex flex-col gap-2">
          <BackButton />
          <h2 className="text-basicWhite font-semibold pl-3">Roadmap</h2>
        </div>
        <button>add </button>
      </div>
      <Tabs defaultValue="in-progress" className="w-full">
        <TabsList className="w-full items-center justify-around">
          <TabsTrigger value="planned">Planned</TabsTrigger>
          <TabsTrigger value="in-progress">In-Progress</TabsTrigger>
          <TabsTrigger value="live">Live</TabsTrigger>
        </TabsList>
        <TabsContent value="account">
          Make changes to your account here.
        </TabsContent>
        <TabsContent value="password">Change your password here.</TabsContent>
      </Tabs>
      aaaaa
    </main>
  );
}
