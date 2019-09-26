import React from 'react';
import Aux from '../../Hoc/Aux';
import  './Layout.css';

const layout = (props) => (
    <Aux>
        <div>Toolbar,backdrop,sidedrawer</div>
        <main className ="Content">
            {props.children}
        </main>
    </Aux>
);

export default layout;