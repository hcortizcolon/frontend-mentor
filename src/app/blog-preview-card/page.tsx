import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main>
      <div className="bg-blog-preview-card-yellow h-screen w-screen flex justify-center items-center">
        <div>
          <div className="bg-white p-4 absolute z-10 w-80 rounded-2xl flex flex-col items-center border-black border-[1px]">
            <Image
              className="rounded-lg"
              src={"/blog-preview-card/illustration-article.svg"}
              alt="post background image"
              width={336}
              height={201}
            />
            <div className="flex flex-col items-start w-full gap-2 mt-3">
              <div className="bg-blog-preview-card-yellow text-black px-3 py-1 font-extrabold rounded-md">
                Learning
              </div>
              <p className="text-blog-preview-card-gray-950 text-sm mt-2">
                Published 21 Dec 2023
              </p>
              <Link
                href="#"
                className="text-blog-preview-card-yellow text-lg font-extrabold mt-2"
              >
                HTML & CSS Foundations
              </Link>
              <p className="text-blog-preview-card-gray-500 text-sm mt-2">
                These languages are the backbone of every website, defining
                structure, content, and presentation.
              </p>
              <div className="flex items-center gap-4 mt-4">
                <Image
                  src={"/blog-preview-card/image-avatar.webp"}
                  alt="author avatar"
                  width={32}
                  height={32}
                  className="rounded-full"
                />
                <p className="text-blog-preview-card-gray-950 font-extrabold text-sm">
                  Greg Hopper
                </p>
              </div>
            </div>
          </div>
          <div className="bg-black w-80 h-[461px] rounded-2xl ml-2 mt-2"></div>
        </div>
      </div>
    </main>
  );
}
