import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="w-screen h-screen bg-social-links-profile-grey-900 flex justify-center items-center">
      <div className="rounded-lg bg-social-links-profile-grey-800 w-80">
        <div className="flex flex-col items-center">
          <Image
            className="rounded-full mt-8 mb-6"
            src={"/social-links-profile/avatar-jessica.jpeg"}
            alt="Instagram"
            width={65}
            height={65}
          />
          <h2 className="font-bold text-2xl">Jessica Randall</h2>
          <p className="font-semibold text-social-links-profile-green text-sm mt-1">
            London, United Kingdom
          </p>
          <p className="text-gray-300 text-xs my-6">
            &quot;Front-end developer and avid reader.&quot;
          </p>
        </div>
        <div className="flex flex-col items-center gap-3 mb-8 px-8">
          <Link
            href="#"
            className="w-full flex justify-center items-center bg-social-links-profile-grey-700 text-social-links-profile-white font-semibold py-2 rounded-md hover:bg-social-links-profile-green hover:text-social-links-profile-grey-800"
          >
            GitHub
          </Link>
          <Link
            href="#"
            className="w-full flex justify-center items-center bg-social-links-profile-grey-700 text-social-links-profile-white font-semibold py-2 rounded-md hover:bg-social-links-profile-green hover:text-social-links-profile-grey-800"
          >
            Frontend Mentor
          </Link>
          <Link
            href="#"
            className="w-full flex justify-center items-center bg-social-links-profile-grey-700 text-social-links-profile-white font-semibold py-2 rounded-md hover:bg-social-links-profile-green hover:text-social-links-profile-grey-800"
          >
            LinkedIn
          </Link>
          <Link
            href="#"
            className="w-full flex justify-center items-center bg-social-links-profile-grey-700 text-social-links-profile-white font-semibold py-2 rounded-md hover:bg-social-links-profile-green hover:text-social-links-profile-grey-800"
          >
            Twitter
          </Link>
          <Link
            href="#"
            className="w-full flex justify-center items-center bg-social-links-profile-grey-700 text-social-links-profile-white font-semibold py-2 rounded-md hover:bg-social-links-profile-green hover:text-social-links-profile-grey-800"
          >
            Instagram
          </Link>
        </div>
      </div>
    </div>
  );
}
