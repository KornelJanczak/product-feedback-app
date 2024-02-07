import { ReactNode } from "react";
import Nav from "../../components/nav";
import FindBar from "../(users)/friends/[friendsFilter]/_components/find-bar";

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <div className="lg:grid lg:grid-cols-4 lg:container gap-8 lg:py-20">
      <Nav />
      <main className="lg:col-start-2 lg:col-end-5">
        <section className="px-0 md:container lg:px-0">
          {/* <FindBar /> */}
          {children}
        </section>
      </main>
    </div>
  );
}
