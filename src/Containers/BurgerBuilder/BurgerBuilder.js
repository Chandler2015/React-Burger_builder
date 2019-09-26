import React,{Component} from 'react';
import Aux from '../../Hoc/Aux';
import Burger from '../../Components/Burger/Burger';

class BurgerBuilder extends Component{
        // constructor(props){
        //     super(props);
        //     this.state = {
                
        //     }
        // }
    state = {
        ingredients : {
            salad:1,
            bacon:2,
            cheese:2,
            meat:2,
        }
    }
    render(){
        return(
            <Aux>
                <Burger ingredients={this.state.ingredients}/>
                <div>Burger Controls</div>
                
            </Aux>
        );
    }
}



export default BurgerBuilder; 