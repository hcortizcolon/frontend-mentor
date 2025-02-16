import { Barlow_Semi_Condensed } from "next/font/google";
import Image from "next/image";

const barlowSemiCondensed = Barlow_Semi_Condensed({
  subsets: ["latin"],
  weight: ["500", "600"],
});

export default function Home() {
  return (
    <div
      className={`bg-testimonial-grid-section-grey-100 ${barlowSemiCondensed.className}`}
    >
      <main className="container mx-auto py-16 px-10 lg:px-0">
        <div className="flex flex-col lg:flex-row gap-8 justify-between h-fit">
          <div className="flex flex-col justify-between w-full lg:w-9/12 gap-8">
            <div className="flex flex-col lg:flex-row w-full gap-8">
              <div className="w-full lg:w-8/12">
                <div className="bg-testimonial-grid-section-purple-500 rounded-lg p-8 h-full shadow-xl">
                  <div className="flex flex-col items-start gap-4 relative">
                    <div className="flex items-center gap-5">
                      <Image
                        src="/testimonials-grid-section/bg-pattern-quotation.svg"
                        alt="Daniel Clifford"
                        className="absolute -top-8 right-14 z-0 hidden lg:block"
                        width={130}
                        height={130}
                      />
                      <Image
                        src="/testimonials-grid-section/image-daniel.jpg"
                        alt="Daniel Clifford"
                        className="rounded-full border-2 border-testimonial-grid-section-purple-300"
                        width={50}
                        height={50}
                      />
                      <div>
                        <h3>Daniel Clifford</h3>
                        <p className="text-testimonial-grid-section-grey-200 text-sm">
                          Verified Graduate
                        </p>
                      </div>
                    </div>
                    <h2 className="text-testimonial-grid-section-white text-2xl font-bold z-10">
                      I received a job offer mid-course, and the subjects I
                      learned were current, if not more so in the company I
                      joined. I honestly feel I got every penny’s worth.
                    </h2>

                    <p className="text-testimonial-grid-section-grey-100 text-sm">
                      &quot;I was an EMT for many years before I joined the
                      bootcamp. I’ve been looking to make a transition and have
                      heard some people who had an amazing experience here. I
                      signed up for the free intro course and found it
                      incredibly fun! I enrolled shortly thereafter. The next 12
                      weeks was the best - and most grueling - time of my life.
                      Since completing the course, I’ve successfully switched
                      careers, working as a Software Engineer at a VR
                      startup.&quot;
                    </p>
                  </div>
                </div>
              </div>
              <div className="w-full lg:w-4/12">
                <div className="bg-testimonial-grid-section-grey-500 rounded-lg p-8 h-full shadow-xl">
                  <div className="flex flex-col items-start gap-4">
                    <div className="flex items-center gap-5">
                      <Image
                        src="/testimonials-grid-section/image-jonathan.jpg"
                        alt="Daniel Clifford"
                        className="rounded-full"
                        width={50}
                        height={50}
                      />
                      <div>
                        <h3>Jonathan Walters</h3>
                        <p className="text-testimonial-grid-section-grey-200 text-sm">
                          Verified Graduate
                        </p>
                      </div>
                    </div>
                    <h2 className="text-testimonial-grid-section-white text-2xl font-bold">
                      The team was very supportive and kept me motivated
                    </h2>
                    <p className="text-testimonial-grid-section-grey-100 text-sm">
                      &quot;I started as a total newbie with virtually no coding
                      skills. I now work as a mobile engineer for a big company.
                      This was one of the best investments I’ve made in
                      myself.&quot;
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col lg:flex-row w-full gap-8">
              <div className="w-full lg:w-4/12">
                <div className="bg-testimonial-grid-section-white rounded-lg p-10 h-full shadow-xl">
                  <div className="flex flex-col items-start gap-4">
                    <div className="flex items-center gap-5">
                      <Image
                        src="/testimonials-grid-section/image-jeanette.jpg"
                        alt="Daniel Clifford"
                        className="rounded-full"
                        width={50}
                        height={50}
                      />
                      <div>
                        <h3 className="text-testimonial-grid-section-grey-500">
                          Jeanette Harmon
                        </h3>
                        <p className="text-testimonial-grid-section-grey-400 text-sm">
                          Verified Graduate
                        </p>
                      </div>
                    </div>
                    <h2 className="text-testimonial-grid-section-grey-500 text-2xl font-bold">
                      An overall wonderful and rewarding experience
                    </h2>
                    <p className="text-testimonial-grid-section-grey-400 text-sm">
                      &quot;Thank you for the wonderful experience! I now have a
                      job I really enjoy, and make a good living while doing
                      something I love.&quot;
                    </p>
                  </div>
                </div>
              </div>
              <div className="w-full lg:w-8/12">
                <div className="bg-testimonial-grid-section-black rounded-lg p-10 h-full shadow-xl">
                  <div className="flex flex-col items-start gap-4">
                    <div className="flex items-center gap-5">
                      <Image
                        src="/testimonials-grid-section/image-patrick.jpg"
                        alt="Daniel Clifford"
                        className="rounded-full border-2 border-testimonial-grid-section-purple-300"
                        width={50}
                        height={50}
                      />
                      <div>
                        <h3 className="text-testimonial-grid-section-grey-200">
                          Patrick Abrams
                        </h3>
                        <p className="text-testimonial-grid-section-grey-200 text-sm">
                          Verified Graduate
                        </p>
                      </div>
                    </div>
                    <h2 className="text-testimonial-grid-section-grey-200 text-2xl font-bold">
                      Awesome teaching support from TAs who did the bootcamp
                      themselves. Getting guidance from them and learning from
                      their experiences was easy.
                    </h2>
                    <p className="text-testimonial-grid-section-grey-200 text-sm">
                      &quot;The staff seemed genuinely concerned about my
                      progress which I found really refreshing. The program gave
                      me the confidence necessary to be able to go out in the
                      world and present myself as a capable junior developer.
                      The standard is above the rest. You will get the personal
                      attention you need from an incredible community of smart
                      and amazing people.&quot;
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full lg:w-3/12">
            <div className="bg-testimonial-grid-section-white rounded-lg p-10 h-full shadow-xl">
              <div className="flex flex-col items-start gap-4">
                <div className="flex items-center gap-5">
                  <Image
                    src="/testimonials-grid-section/image-kira.jpg"
                    alt="Daniel Clifford"
                    className="rounded-full"
                    width={50}
                    height={50}
                  />
                  <div>
                    <h3 className="text-testimonial-grid-section-grey-500">
                      Kira Whittle
                    </h3>
                    <p className="text-testimonial-grid-section-grey-400 text-sm">
                      Verified Graduate
                    </p>
                  </div>
                </div>
                <h2 className="text-testimonial-grid-section-grey-500 text-2xl font-bold">
                  Such a life-changing experience. Highly recommended!
                </h2>
                <p className="text-testimonial-grid-section-grey-400 text-sm/6">
                  &quot;Before joining the bootcamp, I’ve never written a line
                  of code. I needed some structure from professionals who can
                  help me learn programming step by step. I was encouraged to
                  enroll by a former student of theirs who can only say
                  wonderful things about the program. The entire curriculum and
                  staff did not disappoint. They were very hands-on and I never
                  had to wait long for assistance. The agile team project, in
                  particular, was outstanding. It took my learning to the next
                  level in a way that no tutorial could ever have. In fact, I’ve
                  often referred to it during interviews as an example of my
                  development experience. It certainly helped me land a job as a
                  full-stack developer after receiving multiple offers. 100%
                  recommend!&quot;
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
