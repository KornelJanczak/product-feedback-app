export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <main>
      <section
        className={
          "flex flex-col container pt-4 md:container md:max-w-xl lg:max-w-2xl lg:pt6 xl:pt-12 xl:max-w-3xl"
        }
      >
        {children}
      </section>
    </main>
  );
}
