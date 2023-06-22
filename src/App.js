import React, { useState, useEffect } from 'react';
import './App.css';
import axios from 'axios';
import Recipe from './Recipe';
import { ToastContainer, toast } from 'react-toastify';
import Footer from './Footer';


function App() {
  const API_ID = "039e4fc5";
  const APP_KEY = "e7da81517ee18db37325e4f3188c3b2c";
  const [recipes, setRecipes] = useState([])
  const [search, setSearch] = useState('')
  const [query, setQuery] = useState('chicken')

  const setToast = () => {
    toast("Added in Favorite");
  }

  useEffect(() => {
    getRecipe();
  }, [query]);

  const getRecipe = async () => {
    const res = await axios.get(`https://api.edamam.com/search?q=${query}&app_id=${API_ID}&app_key=${APP_KEY}`);
    setRecipes(res.data.hits);
    // console.log("api", res.data.hits);
  };

  const updateSearch = (e) => {
    setSearch(e.target.value);
    // console.log(e.target.value);
  };
  const updateQuery = (e) => {
    e.preventDefault();
    setQuery(search);
  }

  return (
    <>
      <header>
        <div className='flex flex-col bg-white items-center'>
          <h1 className='text-6xl mt-7 text-red-700  font-extrabold text-center'>Racipe Search App</h1>
          <form onSubmit={updateQuery}>
            <div className="md:w-[584px] mx-auto mt-7 flex w-[92%] items-center rounded-full border hover:shadow-md">
              <div className="pl-5">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>
              <div className="relative">
                <input type="text" value={search} onChange={updateSearch} className="w-full text-xl bg-transparent rounded-full py-[14px] outline-none" />
              </div>
            </div>
          </form>
          <br />
        </div>
      </header>

      <section className="py-8 bg-slate-300">
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
  );
}

export default App;
