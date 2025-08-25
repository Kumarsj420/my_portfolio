import Image from "next/image";
import Header from "./components/header";
import Sidebar from "./components/sidebar";

export default function Home() {
  return (<>
    <div className="flex min-h-full flex-col">
      <Header />
      <div className="mx-auto flex w-full max-w-7xl items-start gap-x-8 px-4 py-10 sm:px-6 lg:px-8">
        <aside className="sticky top-8 hidden w-64 shrink-0 lg:block h-[calc(100vh-148px)]">
          <Sidebar />
        </aside>

        <main className="flex-1">
        </main>

      </div>
    </div>
  </>
  );
}
