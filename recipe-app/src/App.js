import React, { useState, useEffect } from 'react';
import './App.css';
import axios from 'axios';
import Recipe from './Recipe';


function App() {
  const API_ID = "039e4fc5";
  const APP_KEY = "e7da81517ee18db37325e4f3188c3b2c";
  const [recipes, setRecipes] = useState([])
  const [search, setSearch] = useState('')
  const [query, setQuery] = useState('chicken')

  useEffect(() => {
    getRecipe();
  }, [query]);

  const getRecipe = async () => {
    const res = await axios.get(`https://api.edamam.com/search?q=${query}&app_id=${API_ID}&app_key=${APP_KEY}`);
    setRecipes(res.data.hits);
    console.log("api", res.data.hits);
  };

  const updateSearch = (e) => {
    setSearch(e.target.value);
    console.log(e.target.value);
  };
  const updateQuery = (e) => {
    e.preventDefault();
    setQuery(search);
  }

  return (
    <>
      <header>
        <div className='bg-red-600 justify-center'>
          <h1 className='text-6xl text-white text-center'>Racipe Search App</h1>< br />
          <form className=" mx-96 w-96 h-50 items-center" onSubmit={updateQuery}>
            <label for="default-search" class="mb-2 text-md font-medium text-gray-900 sr-only dark:text-gray-300">Search</label>
            <div class="relative">
              <input type="search" value={search} onChange={updateSearch} class="block p-3 w-full text-lg text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Enter the Recipe Name" required />
              <button type="submit" class="text-white absolute right-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Search</button>
            </div>
          </form>
          < br />
        </div>

      </header>
      <section className="py-24 home-Page-image">
        <div className="grid max-w-6xl grid-cols-1 gap-10 p-2 mx-auto sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {recipes.map((recipe) => (
            <Recipe title={recipe.recipe.label}
              calories={recipe.recipe.calories}
              image={recipe.recipe.image}
              ingredients={recipe.recipe.ingredients} />
          ))}
        </div>
      </section>

    </>
  );
}

export default App;
