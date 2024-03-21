import { Link } from "lucide-react";
import React from "react";

const Chat = () => {
  return (
    <div>
      <a href="https://chat.openai.com/" target="_blank">
        <button
          className="glow-on-hover flex justify-center items-center"
          type="button"
        >
          <Link className="w-5 h-5 mr-2 object-cover " />{" "}
          <span className="usespan font-semibold">Visit to ChatGpt</span>
        </button>
      </a>
    </div>
  );
};

export default Chat;
