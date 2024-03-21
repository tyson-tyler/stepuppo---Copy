import Chat from "@/components/Chat";
import Feed from "@/components/Feed";
import React from "react";

const Home = () => {
  return (
    <section className="w-full flex-center flex-col">
      <Chat />
      <h1 className="head_text text-center pt-5 text-white">
        Brower & Create {""}
        <br className="max-md:hidden" />
        <span className="usespan text-center ">Ai Prompts .</span>
      </h1>
      <p className="desc text-center text-gray-900">
        Mypager is an open-source AI prompting tools for the Idea for your
        project and get Solve your Problem .
      </p>
      <Feed />
    </section>
  );
};

export default Home;
