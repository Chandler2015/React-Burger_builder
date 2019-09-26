import React,{Component} from 'react';
import Aux from '../../Hoc/Aux';
import Burger from '../../Components/Burger/Burger';

class BurgerBuilder extends Component{
    render(){
        return(
            <Aux>
                <Burger/>
                <div>Burger Controls</div>
                
            </Aux>
        );
    }
}



export default BurgerBuilder; 