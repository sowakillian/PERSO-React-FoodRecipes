import React, {useEffect, useState} from 'react';
import Recipe from './components/recipe/recipe.component';
import {RecipeWrapper} from "./components/recipe/recipe.styled";
import {Header, HeaderWrapper, HeaderTitle} from "./components/header/header.styled";
import './App.css';


    const App = () => {

      const APP_ID = "cab7dcc7";
      const APP_KEY = "364440701d73e73777fe3d1e8a1bebc4";

      const [recipes, setRecipes] = useState([]);
      const [search, setSearch] = useState("");
      const [query, setQuery] = useState("chicken");


        useEffect( () => {
            getRecipes();
        }, [query] );

        const getRecipes =  async () => {
            const response = await fetch(` https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY} `)
            const dataRecipes = await response.json();

            console.log(dataRecipes.hits);
            setRecipes(dataRecipes.hits);
        };

        const updateSearch = e => {
            setSearch(e.target.value);
        };

        const getSearch = e => {
            e.preventDefault();
            setQuery(search);
        };

      return(
          <div className="App">

              <Header>
                  <HeaderWrapper>

                      <HeaderTitle>
                          Learn your favorite recipes
                      </HeaderTitle>

                      <form onSubmit={getSearch} className="search" >
                          <input value={search} onChange={updateSearch} type="text" />
                          <button
                              type="submit"
                              className="search-button">
                              1
                          </button>
                      </form>
                  </HeaderWrapper>
              </Header>


              <RecipeWrapper>
                  {recipes.map(recipe =>(
                      <Recipe
                          title={recipe.recipe.label}
                          calories={recipe.recipe.calories}
                          image={recipe.recipe.image}
                          ingredients={recipe.recipe.ingredients}
                      />
                  ))}
              </RecipeWrapper>



          </div>
      );
    };

export default App;
