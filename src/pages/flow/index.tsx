import { type NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import Flow from "~/components/flow";
import Header from "~/components/header";

const FlowPage: NextPage = () => {
  return (
    <>
      <Head>
        <title>Huawei Day: Intelligent World 2030</title>
        <meta
          name="description"
          content="Join us at Huawei Day on May 9, 2023, from 9 am to 5 pm to learn about the Intelligent World 2030"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex min-h-screen flex-col">
        <div className=" opacity-10">
          <video
            src="https://www.huawei.com/mediafiles/MediaFiles/2/1/2/%7B2121536E-2920-4260-AAEE-59DD37B7ECEB%7Dintelligent-2030-en-720.mp4"
            autoPlay
            muted
            loop
            className="fixed left-0 top-0 z-[-1] h-full w-full object-cover "
          ></video>
        </div>
        <Header />
        <div className="mt-5 flex flex-col items-center">
          <h2 className="text-3xl">
            <b>Event Schedule</b>
          </h2>
        </div>
        <Flow />
      </main>
    </>
  );
};

export default FlowPage;
