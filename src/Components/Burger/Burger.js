import React from 'react';
import "./Burger.css";
import BurgerIngredients from './BurgerIngredients/BurgerIngredients';

//props.ingredients is a object, not a array
const burger =(props)=> {
    //get the keys as a array
    const trasformedIngredients = Object.keys(props.ingredients)
    .map(igKey=>{
        return [...Array(props.ingredients[igKey])].map((_,i)=>{
           return <BurgerIngredients key={igKey+i} type={igKey}/>;
        });
    });
    

    return(
        <div className = 'Burger'>
            <BurgerIngredients type ="bread-top"/>
            {trasformedIngredients}
            <BurgerIngredients type ="bread-bottom"/>
        </div>
    );
}

export default burger;