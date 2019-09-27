import React from 'react';
import "./Burger.css";
import BurgerIngredients from './BurgerIngredients/BurgerIngredients';

//props.ingredients is a object, not a array
const burger =(props)=> {
    //get the keys as a array
    let transformedIngredients = Object.keys(props.ingredients)
    .map(igKey=>{
        return [...Array(props.ingredients[igKey])].map((_,i)=>{
           return <BurgerIngredients key={igKey+i} type={igKey}/>;
        });
    }).reduce((arr,el) => {
        return arr.concat(el)
    },[]);

    if(transformedIngredients.length ===0){
        transformedIngredients = <p>Please Start adding ingredients, Miss <span style={{color:"red"}}>Unpredictable</span>!</p>
    }
    

    return(
        <div className = 'Burger'>
            <BurgerIngredients type ="bread-top"/>
            {transformedIngredients}
            <BurgerIngredients type ="bread-bottom"/>
        </div>
    );
}

export default burger;