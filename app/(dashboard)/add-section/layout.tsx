export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <main>
      <section
        className={
          "flex flex-col container pt-4 md:container lg:w-4/5 lg:pt6 xl:pt-12 xl:w-7/12"
        }
      >
        {children}
      </section>
    </main>
  );
}
