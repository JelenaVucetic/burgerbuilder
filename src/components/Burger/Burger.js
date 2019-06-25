import React from 'react';
import classes from './Burger.css';
import BurgerIngredient from './BurgerIngredient/BurgerIngrediant';

const burger = (props) => {
    //keys extract the keys of a given object and turn that into array
    let transformedIngredients = Object.keys(props.ingredients)  //[salad,bacon,cheese, meat]
    .map(igKey => {
        //for cheese Array(2)-two elements
        return [...Array(props.ingredients[igKey])].map((_, i) => {  //(2, i) i - index
           return <BurgerIngredient key={igKey + i} type={igKey} />
        }); 
    })
    .reduce((arr, el ) => {
        return arr.concat(el)
    }, []);

    //console.log(transformedIngredients);

    if(transformedIngredients.length === 0){
        transformedIngredients = <p>Please start adding ingredients</p>
    }
    return(
        <div className={classes.Burger}>
            <BurgerIngredient type="bread-top" />
            {transformedIngredients}
            <BurgerIngredient type="bread-bottom" />
        </div>
    );
};

export default burger;