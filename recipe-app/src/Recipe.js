import img1 from "../src/photo-1.jpg"
import React, { useState } from 'react';

const Recipe = ({ title, calories, image, ingredients }) => {
    const [isFavorite, setIsFavorite] = useState(false);
    const handleAddFavorite = () => {
        setIsFavorite(true);
    };
    return (
        <>
            <div class="px-2 md:px-6 my-3 w-full text-slate-700 dark:text-white flex flex-col items-center">

                <div class="max-w-xl text-left flex flex-col w-full items-center justify-center md:p-4 md:border border-slate-300 dark:border-slate-600 rounded-xl">
                    <h1 class="text-left text-sm md:text-lg font-bold leading-normal">
                        {title}
                    </h1>
                    <div
                        class="w-full rounded-xl flex-col xl:flex-row bg-white dark:bg-slate-900 shadow-md"
                    >
                        <img src={img1} class="card-img-top" alt="..." />

                        <div class="w-full p-3 flex flex-col justify-between h-auto overflow-auto lg:h-auto">

                            <p class="text-left text-sm md:text-md font-bold leading-normal">
                                Calories :-{calories}
                            </p>
                            <h1 class="text-left text-sm md:text-lg font-bold leading-normal">
                                Ingredient
                            </h1>
                            <ol class="text-gray-700 text-base">
                                {ingredients.map((ingredient) => (
                                    <li>{ingredient.text}</li>
                                ))}
                            </ol>
                            <div class="flex mt-4">
                                <div class="flex flex-col md:flex-row justify-between items-center text-gray-900">
                                    {isFavorite ? (
                                        <button class="px-6 py-2 transition ease-in duration-200 uppercase rounded-full bg-red-800 hover:text-white border-2 border-white focus:outline-none">
                                            Added to favorites
                                        </button>
                                    ) : (
                                        <button class="px-6 py-2 transition ease-in duration-200 uppercase rounded-full hover:bg-gray-800 hover:text-white border-2 border-gray-900 focus:outline-none" onClick={handleAddFavorite}>
                                            Add favorite
                                        </button>
                                    )}

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Recipe