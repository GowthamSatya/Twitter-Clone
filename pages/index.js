import Head from "next/head";
import Sidebar from "../components/Sidebar";
import Feed from "../components/Feed";

export default function Home() {
  return (
    <div className="flex flex-col">
      <Head>
        <title>Twitter</title>
        <link rel="icon" href="../public/favicon.ico" />
      </Head>
      <main className="bg-black min-h-screen flex max-w-[1500px]">
        {/*SideBar */}
        <Sidebar />

        {/*Feed */}
        <Feed />
        {/*Widgets */}

        {/*Modal */}
      </main>
    </div>
  );
}
