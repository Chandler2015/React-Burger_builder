import React,{Component} from 'react';
import Aux from '../../Hoc/Aux';
import Burger from '../../Components/Burger/Burger';
import BuildControls from '../../Components/Burger/BuildControls/BuildControls';

const INGREDIENT_PRICE = {
    salad: 0.5,
    cheese:0.4,
    meat:1,
    bacon:1.5,
};

class BurgerBuilder extends Component{
        // constructor(props){
        //     super(props);
        //     this.state = {
                
        //     }
        // }
    state = {
        ingredients : {
            salad:0,
            bacon:0,
            cheese:0,
            meat:0,
        },
        totalPrice:4, 
    }

    addIngredientHandler = (type) =>{
        const oldCount = this.state.ingredients[type];
        const updatedCount = oldCount+1;
        const updatedIngredients = {
            ...this.state.ingredients
        }
        updatedIngredients[type] = updatedCount;
        const priceAdded  = INGREDIENT_PRICE[type];
        const oldPrice = this.state.totalPrice;
        const updatedPrice = oldPrice + priceAdded;
        this.setState({totalPrice:updatedPrice,ingredients:updatedIngredients});
    }

    // removeIngredientHandler = (type) =>{
        
    // }

    render(){
        return(
            <Aux>
                <Burger ingredients={this.state.ingredients}/>
                <BuildControls
                ingredientAdded = {this.addIngredientHandler}/>
                
            </Aux>
        );
    }
}



export default BurgerBuilder; 