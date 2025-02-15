import { Poppins } from "next/font/google";
import Image from "next/image";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["200", "400", "600"],
});

function Card({
  color,
  title,
  description,
  image,
}: {
  color: string;
  title: string;
  description: string;
  image: string;
}) {
  return (
    <div className="shadow-lg rounded-lg h-72 w-full">
      <hr className={`rounded-t-lg ${color} h-1 w-full`} />
      <div className="p-9 flex flex-col items-start justify-between h-full">
        <div>
          <h3 className="text-2xl font-semibold text-four-card-feature-section-grey-500 mb-2">
            {`${title}`}
          </h3>
          <p className="text-four-card-feature-section-grey-400 w-3/4">{`${description}`}</p>
        </div>
        <Image
          className="place-self-end"
          src={`${image}`}
          alt="Supervisor"
          width={64}
          height={64}
        />
      </div>
    </div>
  );
}

export default function Home() {
  return (
    <div className="bg-four-card-feature-section-white">
      <main
        className={`${poppins.className} flex flex-col  justify-center items-center py-24 container mx-auto`}
      >
        <div className="px-8 lg:w-3/6 flex flex-col items-center justify-center text-four-card-feature-section-grey-500 gap-4 text-center">
          <h2 className="text-4xl font-extralight">
            Reliable, efficient delivery
          </h2>
          <h2 className="font-semibold text-4xl">Powered by Technology</h2>
          <p>
            Our Artificial Intelligence powered tools use millions of project
            data points to ensure that your project is successful
          </p>
        </div>
        <div className="w-full my-20 px-8 flex flex-col lg:flex-row items-center justify-center gap-12">
          <div className="flex-1 w-full">
            <Card
              title="Supervisor"
              description="Monitors activity to identify project roadblocks"
              color="bg-four-card-feature-section-cyan"
              image="/four-card-feature-section/icon-supervisor.svg"
            />
          </div>
          <div className="flex flex-col gap-12 flex-1 w-full">
            <Card
              title="Team Builder"
              description="Scans our talent network to create the optimal team for your project"
              color="bg-four-card-feature-section-red"
              image="/four-card-feature-section/icon-team-builder.svg"
            />
            <Card
              title="Karma"
              description="Regularly evaluates our talent to ensure quality"
              color="bg-four-card-feature-section-orange"
              image="/four-card-feature-section/icon-karma.svg"
            />
          </div>
          <div className="flex-1 w-full">
            <Card
              title="Calculator"
              description="Uses data from past projects to provide better delivery estimates"
              color="bg-four-card-feature-section-blue"
              image="/four-card-feature-section/icon-calculator.svg"
            />
          </div>
        </div>
      </main>
    </div>
  );
}
