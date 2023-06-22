import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Recipe from './Recipe';
import { ToastContainer, toast } from 'react-toastify';
import Footer from './Footer';
import { useNavigate } from 'react-router-dom';

const Home = () => {
    const API_ID = "039e4fc5";
    const APP_KEY = "e7da81517ee18db37325e4f3188c3b2c";
    const [recipes, setRecipes] = useState([])
    const [search, setSearch] = useState('')
    const [query, setQuery] = useState('chicken')


    const navigate = useNavigate()

    const setToast = () => {
        toast("Recipe Added in Favorite");
    }

    useEffect(() => {
        getRecipe();
    }, [query]);

    const getRecipe = async () => {
        try {
            const res = await axios.get(`https://api.edamam.com/search?q=${query}&app_id=${API_ID}&app_key=${APP_KEY}`);
            setRecipes(res.data.hits);

            if (res.data.count === 0) {
                navigate("/ErrorPage")
            }
        } catch (error) {
            console.log(error)
        }
    };

    const updateSearch = (e) => {
        setSearch(e.target.value);
    };

    const updateQuery = (e) => {
        e.preventDefault();
        setQuery(search);
    }

    return (
        <>
            <header>
                <div className='flex flex-col header-image items-center'>
                    <h1 className='text-6xl mt-16 text-white  font-extrabold text-center'>Find Testy Racipes </h1>
                    <form onSubmit={updateQuery}>
                        <div className="md:w-[584px] mx-auto mt-7 flex w-[92%] items-center rounded-full border hover:shadow-md">
                            <div className="pl-5">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                                </svg>
                            </div>
                            <div className="relative">
                                <input type="text" value={search} onChange={updateSearch} className="w-full text-white text-xl bg-transparent rounded-full py-[14px] outline-none" />
                            </div>
                        </div>
                    </form>
                    <br />
                </div>
            </header>

            <section className="py-8 bg-gray-100">
                <div className="grid max-w-6xl grid-cols-1 gap-10 p-2 mx-auto sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                    {recipes.map((recipe, index) => (
                        <Recipe
                            key={index}
                            title={recipe.recipe.label}
                            calories={recipe.recipe.calories}
                            image={recipe.recipe.image}
                            ingredients={recipe.recipe.ingredients}
                            setToast={setToast}
                        />
                    ))}
                </div>
            </section>

            <ToastContainer
                position="top-center"
                autoClose={1000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="light"
            />
            <Footer />
        </>
    )
}

export default Home
