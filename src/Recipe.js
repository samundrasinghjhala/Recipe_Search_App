import img1 from "../src/photo-1.jpg"
import React, { useState } from 'react';
import { FcLike } from "react-icons/fc";
import 'react-toastify/dist/ReactToastify.css';

const Recipe = (props) => {
    const [favorite, setFavorite] = useState(false);

    const handleAddFavorite = () => {
        setFavorite(true);
        props.setToast();
    };
    return (
        <>
            <article className="p-3 duration-300 bg-white shadow-lg rounded-xl hover:shadow-xl hover:transform hover:scale-105 ">
                <div className="relative flex items-end overflow-hidden rounded-xl">
                    <img src={img1} alt="Recipe image" />
                </div>
                <div className="p-2 mt-1">
                    <h2 className="text-slate-700 font-semibold">{props.title}</h2>
                    <p className="mt-1 text-sm text-slate-400">Calories :-{props.calories}</p>
                    <div className="flex items-end justify-between mt-3">
                        <p className="text-lg font-bold text-green-500">Add to Favorite</p>
                        {favorite ? (
                            <button className="px-2 py-2 transition ease-in duration-200 uppercase rounded-full bg-gray-800 hover:text-white border-2 border-red-500 focus:outline-none">
                                <FcLike />
                            </button>
                        ) : (

                            <button className="px-2 py-2 transition ease-in duration-200 uppercase rounded-full hover:bg-gray-800 hover:text-white border-2 border-gray-900 focus:outline-none" onClick={handleAddFavorite}>
                                <FcLike />
                            </button>
                        )}
                    </div>
                </div>
            </article>
        </>
    )
}

export default Recipe