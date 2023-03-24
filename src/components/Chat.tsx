import React, { useState } from "react";
import { UserRick, UserButter } from "@/common/ImgVariable";
import fetchData from "@/utils/fetchOpenAi";

type Props = {};

const Chat = () => {
  const [input, setInput] = useState("");
  const [completedSentence, setCompletedSentence] = useState("");

  const handleClick = async (event: any) => {
    event.preventDefault();
    try {
      setCompletedSentence(await fetchData(input));
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <div className="userMsg">
        <div className="flex items-start mb-4 last:mb-0">
          <img
            className="rounded-full mr-4"
            src={UserRick}
            width="40"
            height="40"
            alt="User 01"
          />
          <div>
            <div className="text-sm bg-white text-slate-800 p-3 rounded-lg rounded-tl-none border border-slate-200 shadow-md mb-1">
              Ask your question, bitch!
            </div>
            <div className="flex items-center justify-between">
              <div className="text-xs text-slate-500 font-medium">2:40 PM</div>
            </div>
          </div>
        </div>
      </div>
      <div className="chatMsg">
        <div className="flex items-start mb-4 last:mb-0">
          <img
            className="rounded-full mr-4"
            src={UserButter}
            width="40"
            height="40"
            alt="User 02"
          />
          <div>
            <div className="text-sm bg-indigo-500 text-white p-3 rounded-lg rounded-tl-none border border-transparent shadow-md mb-1">
              {completedSentence && completedSentence}
            </div>
            <div className="flex items-center justify-between">
              <div className="text-xs text-slate-500 font-medium">2:40 PM</div>
              <svg
                className="w-5 h-3 shrink-0 fill-current text-emerald-500"
                viewBox="0 0 20 12"
              >
                <path d="M10.402 6.988l1.586 1.586L18.28 2.28a1 1 0 011.414 1.414l-7 7a1 1 0 01-1.414 0L8.988 8.402l-2.293 2.293a1 1 0 01-1.414 0l-3-3A1 1 0 013.695 6.28l2.293 2.293L12.28 2.28a1 1 0 011.414 1.414l-3.293 3.293z" />
              </svg>
            </div>
          </div>
        </div>
      </div>
      {/* Date separator */}
      <div className="flex justify-center">
        <div className="inline-flex items-center justify-center text-xs font-medium px-2.5 py-1 bg-white border border-slate-200 rounded-full my-5">
          Tuesday, 20 January
        </div>
      </div>
      {/* Chat msg */}
      <div className="flex items-start mb-4 last:mb-0">
        <img
          className="rounded-full mr-4"
          src={UserRick}
          width="40"
          height="40"
          alt="User 01"
        />
        <div>
          <div className="text-sm bg-white text-slate-800 p-3 rounded-lg rounded-tl-none border border-slate-200 shadow-md mb-1">
            <svg
              className="fill-current text-slate-400"
              viewBox="0 0 15 3"
              width="15"
              height="3"
            >
              <circle cx="1.5" cy="1.5" r="1.5">
                <animate
                  attributeName="opacity"
                  dur="1s"
                  values="0;1;0"
                  repeatCount="indefinite"
                  begin="0.1"
                />
              </circle>
              <circle cx="7.5" cy="1.5" r="1.5">
                <animate
                  attributeName="opacity"
                  dur="1s"
                  values="0;1;0"
                  repeatCount="indefinite"
                  begin="0.2"
                />
              </circle>
              <circle cx="13.5" cy="1.5" r="1.5">
                <animate
                  attributeName="opacity"
                  dur="1s"
                  values="0;1;0"
                  repeatCount="indefinite"
                  begin="0.3"
                />
              </circle>
            </svg>
          </div>
        </div>
      </div>
      <div className="sticky bottom-0">
        <div className="flex items-center justify-between bg-white border-t border-slate-200 px-4 sm:px-6 md:px-5 h-16">
          {/* Plus button */}
          <button className="shrink-0 text-slate-400 hover:text-slate-500 mr-3">
            <span className="sr-only">Add</span>
            <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
              <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12C23.98 5.38 18.62.02 12 0zm6 13h-5v5h-2v-5H6v-2h5V6h2v5h5v2z" />
            </svg>
          </button>
          {/* Message input */}
          <form className="grow flex">
            <div className="grow mr-3">
              <label htmlFor="message-input" className="sr-only">
                Type a message
              </label>
              <input
                id="message-input"
                className="form-input w-full bg-slate-100 border-transparent focus:bg-white focus:border-slate-300"
                type="text"
                placeholder="Aa"
                value={input}
                onChange={(event) => setInput(event.target.value)}
              />
            </div>
            <button
              onClick={handleClick}
              type="submit"
              className="btn bg-indigo-500 hover:bg-indigo-600 text-white whitespace-nowrap"
            >
              Send -&gt;
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Chat;
