import React from 'react';
import {RecipeItem} from "./recipe.styled";

    const Recipe = ({title, calories, image, ingredients})  => {
        return(
            <RecipeItem>
                <h1>{title}</h1>
                <p>{calories}</p>
                    {/*{ingredients.map(ingredient =>(*/}
                    {/*    <li>{ingredient.text}</li>*/}
                    {/*))};*/}
                <img src={image} alt=""/>
            </RecipeItem>
        );
    };

    export default Recipe