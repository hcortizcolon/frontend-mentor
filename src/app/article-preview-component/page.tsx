"use client";

import { Manrope } from "next/font/google";
import Image from "next/image";
import { useState } from "react";

const manrope = Manrope({
  subsets: ["latin"],
});

export default function Home() {
  const [isActivated, setIsActivated] = useState(false);

  return (
    <div
      className={`${manrope.className} bg-article-preview-component-lightGrayishBlue w-screen h-screen flex justify-center items-center`}
    >
      <main className="container md:w-7/12">
        <div className="flex flex-col md:flex-row shadow-lg rounded-lg m-8 md:m-0">
          <Image
            src="/article-preview-component/drawers.jpg"
            alt="drawers"
            className="w-full md:w-5/12 rounded-t-lg md:rounded-tr-none md:rounded-l-lg object-cover object-left"
            width={200}
            height={200}
          />
          <div className="w-full md:w-7/12 bg-white p-6 flex flex-col gap-4 rounded-b-lg md:rounded-r-lg">
            <h1 className="text-article-preview-component-veryDarkGrayishBlue text-2xl font-bold">
              Shift the overall look and feel by adding these wonderful touches
              to furniture in your home
            </h1>
            <p className="text-article-preview-component-desaturatedDarkBlue text-sm font-medium">
              Ever been in a room and felt like something was missing? Perhaps
              it felt slightly bare and uninviting. I&apos;ve got some simple
              tips to help you make any room fell complete.
            </p>
            <div>
              <div
                className={`${
                  isActivated ? "hidden" : "flex"
                }  md:flex items-center justify-between h-14 relative`}
              >
                <div className="flex items-center gap-4">
                  <Image
                    src="/article-preview-component/avatar-michelle.jpg"
                    alt="avatar"
                    className="rounded-full"
                    width={50}
                    height={50}
                  />
                  <div className="flex flex-col gap-1">
                    <p className="text-article-preview-component-veryDarkGrayishBlue text-sm font-bold">
                      Michelle Appleton
                    </p>
                    <p className="text-article-preview-component-grayishBlue text-xs font-medium">
                      28 Jun 2020
                    </p>
                  </div>
                </div>
                <div
                  className={`hidden md:flex  ${
                    isActivated ? "scale-100" : "scale-0"
                  }  flex-col items-center absolute -right-20 bottom-12 transition-transform ease-in-out duration-200`}
                >
                  <div className="flex gap-4 bg-article-preview-component-veryDarkGrayishBlue rounded-md py-3 px-6 shadow-lg">
                    <p className="text-xs tracking-[0.25em] font-light">
                      SHARE
                    </p>
                    <Image
                      src="/article-preview-component/icon-facebook.svg"
                      alt="facebook"
                      width={15}
                      height={15}
                    />
                    <Image
                      src="/article-preview-component/icon-twitter.svg"
                      alt="twitter"
                      width={15}
                      height={15}
                    />
                    <Image
                      src="/article-preview-component/icon-pinterest.svg"
                      alt="pinterest"
                      width={15}
                      height={15}
                    />
                  </div>
                  <div className="relative -top-2 w-4 h-4 bg-article-preview-component-veryDarkGrayishBlue rotate-45"></div>
                </div>
                <button
                  onClick={() => setIsActivated(!isActivated)}
                  className={`rounded-full ${
                    isActivated
                      ? "bg-article-preview-component-desaturatedDarkBlue"
                      : "bg-article-preview-component-lightGrayishBlue"
                  } w-8 h-8 p-2 cursor-pointer transition ease-in-out duration-200`}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="15"
                    height="13"
                  >
                    <path
                      className={`${
                        isActivated
                          ? "fill-article-preview-component-lightGrayishBlue"
                          : "fill-article-preview-component-desaturatedDarkBlue"
                      }`}
                      d="M15 6.495L8.766.014V3.88H7.441C3.33 3.88 0 7.039 0 10.936v2.049l.589-.612C2.59 10.294 5.422 9.11 8.39 9.11h.375v3.867L15 6.495z"
                    />
                  </svg>
                </button>
              </div>
              <div
                className={`${
                  isActivated ? "flex" : "hidden"
                } md:hidden items-center h-20 justify-between -mx-6 -mb-6`}
              >
                <div className="flex justify-between items-center px-6 bg-article-preview-component-veryDarkGrayishBlue w-full h-full rounded-b-lg">
                  <div className="flex items-center gap-4">
                    <p className="text-sm tracking-[0.25em] font-light">
                      SHARE
                    </p>
                    <Image
                      src="/article-preview-component/icon-facebook.svg"
                      alt="facebook"
                      width={20}
                      height={20}
                    />
                    <Image
                      src="/article-preview-component/icon-twitter.svg"
                      alt="twitter"
                      width={20}
                      height={20}
                    />
                    <Image
                      src="/article-preview-component/icon-pinterest.svg"
                      alt="pinterest"
                      width={20}
                      height={20}
                    />
                  </div>
                  <button
                    onClick={() => setIsActivated(!isActivated)}
                    className="bg-article-preview-component-desaturatedDarkBlue w-8 h-8 p-2 cursor-pointer rounded-full"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="15"
                      height="13"
                    >
                      <path
                        className="fill-article-preview-component-lightGrayishBlue"
                        d="M15 6.495L8.766.014V3.88H7.441C3.33 3.88 0 7.039 0 10.936v2.049l.589-.612C2.59 10.294 5.422 9.11 8.39 9.11h.375v3.867L15 6.495z"
                      />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
