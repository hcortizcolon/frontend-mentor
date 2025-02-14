import Image from "next/image";

export default function QrCode() {
  return (
    <div className="bg-qr-code-slate-300 w-screen h-screen flex items-center justify-center">
      <div className="bg-white w-72 rounded-2xl flex flex-col items-center gap-4 p-4">
        <div className="">
          <Image
            src="/qr-code/image-qr-code.png"
            alt="QR Code"
            width={288}
            height={288}
            className="rounded-lg"
          />
        </div>
        <div className="font-semibold mt-4 text-black text-xl text-center">
          Improve your front-end skills by building projects
        </div>
        <div className="text-center text-sm text-qr-code-slate-500 mt-2">
          Scan the QR code to visit Frontend Mentor and take your coding skills
          to the next level
        </div>
      </div>
    </div>
  );
}
