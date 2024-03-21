import { Bot, Tag, Tags, X } from "lucide-react";
import Link from "next/link";
import React from "react";

const Form = ({ type, post, setPost, submitting, handleSubmit }) => {
  return (
    <section className="w-full max-w-full flex-start flex-col">
      {" "}
      <h1 className="head_text text-left">
        <span className="usespan">{type} Prompt</span>{" "}
      </h1>
      <p className="desc text-left max-w-md">
        {type} and Brower and Best prompt with the Mypager, and take your
        imagantion at a peak by AI prompt
      </p>
      <form
        onSubmit={handleSubmit}
        className="mt-10 w-full max-w-2xl flex flex-col gap-7 glassmorphism border-none "
      >
        <label>
          <span className="font-satohi font-semibold text-base text-gray-500 flex mb-3">
            <Bot className="w-15 h-15 mr-3" /> Your Ai Prompt
          </span>
          <textarea
            value={post.prompt}
            onChange={(e) => setPost({ ...post, prompt: e.target.value })}
            placeholder="Write Something about your prompt ..."
            required
            className="form_textarea"
          ></textarea>
        </label>
        <label>
          <span className="font-satohi font-semibold text-base text-gray-500 flex mb-3">
            <Tag className="w-15 h-15 mr-3" /> Tags
          </span>
          <input
            value={post.tag}
            onChange={(e) => setPost({ ...post, tag: e.target.value })}
            placeholder="Like #anime #coding #working etc."
            required
            className="form_input"
          />
        </label>
        <div className="flex-end mx-3 mb-5 gap-4">
          <Link
            href={"/"}
            className="text-sm flex bg-purple-700 p-4 rounded-md text-white "
          >
            <X className="w-5 h-5 text-white mr-4" />
            Cancel
          </Link>
          <button
            type="submit"
            disabled={submitting}
            className="p-4 text-sm bg-pink-700 rounded-md text-white"
          >
            {submitting ? `${type}...` : type}
          </button>
        </div>
      </form>
    </section>
  );
};

export default Form;
