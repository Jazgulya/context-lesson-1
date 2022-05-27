import React, { useContext } from 'react';
import { counterContext } from '../../counterContext';

const Counter2 = () => {
    const {counter2, minus10, plus10} = useContext (counterContext)
    return (
        <div>
            <button onClick={()=> minus10()}>-10</button>
            <h1>Counter2 : {counter2} </h1>
            <button onClick={()=> plus10()}>+10</button>
        </div>
    );
};

export default Counter2;