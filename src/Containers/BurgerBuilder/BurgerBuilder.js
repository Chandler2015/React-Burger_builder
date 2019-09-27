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
        orderable:false,
    }

    updateOrderState (ingredients){
        const sum = Object.keys( ingredients )
        .map( igKey => {
            return ingredients[igKey];
        } )
        .reduce( ( sum, el ) => {
            return sum + el;
        }, 0 );
    this.setState( {orderable: sum > 0 } );
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
        this.updateOrderState(updatedIngredients);
    }

    removeIngredientHandler = (type) =>{
        const oldCount = this.state.ingredients[type];
        if(oldCount===0){
            return;
        }
        const updatedCount = oldCount-1;
        const updatedIngredients = {
            ...this.state.ingredients
        }
        updatedIngredients[type] = updatedCount;
        const priceMinus  = INGREDIENT_PRICE[type];
        const oldPrice = this.state.totalPrice;
        const updatedPrice = oldPrice - priceMinus;
        this.setState({totalPrice:updatedPrice,ingredients:updatedIngredients});
        this.updateOrderState(updatedIngredients);   
    }

    render(){
        console.log(this.state.orderable);
        const disabledInfo = {
            ...this.state.ingredients
        }
        for(let key in disabledInfo){
            disabledInfo[key]= disabledInfo[key]<=0;
        }

        return(
            <Aux>
                <Burger ingredients={this.state.ingredients}/>
                <BuildControls
                ingredientAdded = {this.addIngredientHandler}
                ingredientRemoved = {this.removeIngredientHandler}
                disabled = {disabledInfo}
                price = {this.state.totalPrice}
                orderable = {this.state.orderable}/>
            </Aux>
        );
    }
}



export default BurgerBuilder; 