
export default async function SectionDashboard({
  params,
}: {
  params: { sectionId: string };
}) {
  console.log(params);

  // await new Promise((resolve) => setTimeout(resolve, 3000));

  return <section className="md:container">Section</section>;
}
