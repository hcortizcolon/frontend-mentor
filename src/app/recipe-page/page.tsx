import { Outfit, Young_Serif } from "next/font/google";
import Image from "next/image";

const youngSerif = Young_Serif({
  subsets: ["latin"],
  weight: "400",
});

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
});

export default function Home() {
  return (
    <div className="bg-recipe-page-stone-100 flex items-center justify-center">
      <main className="sm:w-1/2 bg-white rounded-xl sm:my-24">
        <div className="sm:p-8">
          <Image
            src="/recipe-page/image-omelette.jpeg"
            alt="A delicious omelette"
            width={500}
            height={500}
            className="w-full object-fill sm:rounded-lg"
          />
        </div>
        <div className="px-8">
          <h1
            className={`${youngSerif.className} text-4xl text-recipe-page-stone-900 my-8`}
          >
            Simple Omelette Recipe
          </h1>
          <p className={`${outfit.className} text-recipe-page-stone-600`}>
            An easy and quick dish, perfect for any meal. The classic omelette
            combines beaten eggs cooked to perfection, optionally filled with
            your choice of cheese, vegetables, or meat.
          </p>
          <div className="w-full bg-recipe-page-rose-50 rounded-lg px-8 py-6 mt-8">
            <p
              className={`${outfit.className} text-recipe-page-rose-800 font-bold text-lg mb-4`}
            >
              Preparation time
            </p>
            <ul
              className={`${outfit.className} list-disc list-inside text-recipe-page-rose-800 gap-2 flex flex-col`}
            >
              <li>
                <span
                  className={`ml-4 text-recipe-page-stone-600 font-semibold`}
                >
                  Total
                </span>
                <span className={`text-recipe-page-stone-600`}>
                  : Approximately 10 minutes
                </span>
              </li>
              <li>
                <span
                  className={`ml-4 text-recipe-page-stone-600 font-semibold`}
                >
                  Preparation
                </span>
                <span className={`text-recipe-page-stone-600`}>
                  : 5 minutes
                </span>
              </li>
              <li>
                <span
                  className={`ml-4 text-recipe-page-stone-600 font-semibold`}
                >
                  Cooking
                </span>
                <span className={`text-recipe-page-stone-600`}>
                  : 5 minutes
                </span>
              </li>
            </ul>
          </div>
          <div>
            <h3
              className={`${youngSerif.className} text-2xl text-recipe-page-brown-800 my-5`}
            >
              Ingredients
            </h3>
            <ul
              className={`${outfit.className} list-disc ml-4 list-outside text-recipe-page-brown-800 gap-2 flex flex-col justify-center`}
            >
              <li className="pl-4">
                <span className={`text-recipe-page-stone-600`}>
                  2-3 large eggs
                </span>
              </li>
              <li className="pl-4">
                <span className={`text-recipe-page-stone-600`}>
                  Salt, to taste
                </span>
              </li>
              <li className="pl-4">
                <span className={`text-recipe-page-stone-600`}>
                  Pepper, to taste
                </span>
              </li>
              <li className="pl-4">
                <span className={`text-recipe-page-stone-600`}>
                  1 tablespoon of butter or oil
                </span>
              </li>
              <li className="pl-4">
                <span className={`text-recipe-page-stone-600`}>
                  Optional fillings: cheese, diced vegetables, cooked meats,
                  herbs
                </span>
              </li>
            </ul>
          </div>
          <hr className="h-px my-7 bg-gray-200 border-0 dark:bg-recipe-page-stone-150"></hr>
          <div>
            <h3
              className={`${youngSerif.className} text-2xl text-recipe-page-brown-800 my-5`}
            >
              Instructions
            </h3>
            <ul
              className={`${outfit.className} ml-4 list-decimal font-semibold list-outside text-recipe-page-rose-800 gap-2 flex flex-col`}
            >
              <li className="pl-4">
                <span className={`text-recipe-page-stone-600 font-semibold`}>
                  Beat the eggs
                </span>
                <span className={`text-recipe-page-stone-600 font-normal`}>
                  : In a bowl, beat the eggs with a pinch of salt and pepper
                  until they are well mixed. You can add a tablespoon of water
                  or milk for a fluffier texture.
                </span>
              </li>
              <li className="pl-4">
                <span className={`text-recipe-page-stone-600 font-semibold`}>
                  Heat the pan
                </span>
                <span className={`text-recipe-page-stone-600 font-normal`}>
                  : Place a non-stick frying pan over medium heat and add butter
                  or oil.
                </span>
              </li>
              <li className="pl-4">
                <span className={`text-recipe-page-stone-600 font-semibold`}>
                  Cooking the omelette
                </span>
                <span className={`text-recipe-page-stone-600 font-normal`}>
                  : Once the butter is melted and bubbling, pour in the eggs.
                  Tilt the pan to ensure the eggs evenly coat the surface.
                </span>
              </li>
              <li className="pl-4">
                <span className={`text-recipe-page-stone-600 font-semibold`}>
                  Add fillings (optional)
                </span>
                <span className={`text-recipe-page-stone-600 font-normal`}>
                  : When the eggs begin to set at the edges but are still
                  slightly runny in the middle, sprinkle your choice of fillings
                  over one half of the omelette.
                </span>
              </li>
              <li className="pl-4">
                <span className={`text-recipe-page-stone-600 font-semibold`}>
                  Fold and serve
                </span>
                <span className={`text-recipe-page-stone-600 font-normal`}>
                  : As the omelette continues to cook, carefully lift one edge
                  and fold it over the fillings. Let it cook for another minute,
                  then slide the omelette onto a plate.
                </span>
              </li>
              <li className="pl-4">
                <span className={`text-recipe-page-stone-600 font-semibold`}>
                  Enjoy
                </span>
                <span className={`text-recipe-page-stone-600 font-normal`}>
                  : Serve hot, with additional salt and pepper if needed.
                </span>
              </li>
            </ul>
          </div>
          <hr className="h-px my-7 bg-gray-200 border-0 dark:bg-recipe-page-stone-150"></hr>
          <div className="mb-4">
            <h3
              className={`${youngSerif.className} text-2xl text-recipe-page-brown-800 my-5`}
            >
              Nutrition
            </h3>
            <p className={`${outfit.className} text-recipe-page-stone-600`}>
              The table below shows nutritional value per serving without the
              additional fillings.
            </p>
            <div className="mt-4">
              <div className="px-8 flex">
                <span className="flex-1 text-recipe-page-stone-600">
                  Calories
                </span>
                <span className="flex-1 text-recipe-page-brown-800 font-bold">
                  277kcal
                </span>
              </div>
              <hr className="h-px my-3 bg-gray-200 border-0 dark:bg-recipe-page-stone-150"></hr>
              <div className="px-8 flex">
                <span className="flex-1 text-recipe-page-stone-600">Carbs</span>
                <span className="flex-1 text-recipe-page-brown-800 font-bold">
                  0g
                </span>
              </div>
              <hr className="h-px my-3 bg-gray-200 border-0 dark:bg-recipe-page-stone-150"></hr>
              <div className="px-8 flex">
                <span className="flex-1 text-recipe-page-stone-600">
                  Protein
                </span>
                <span className="flex-1 text-recipe-page-brown-800 font-bold">
                  20g
                </span>
              </div>
              <hr className="h-px my-3 bg-gray-200 border-0 dark:bg-recipe-page-stone-150"></hr>
              <div className="px-8 flex">
                <span className="flex-1 text-recipe-page-stone-600">Fat</span>
                <span className="flex-1 text-recipe-page-brown-800 font-bold">
                  22g
                </span>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
