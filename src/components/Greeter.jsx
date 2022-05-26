import React from 'react';

/*
props object
    {
        key: Value
        phrase: Hello there!
        name: Ragnar
    }
*/

    const Greeter = props =>{
        return(
            <div>
                <h1 className= "d-flex justify-content-center">
                   <span className='badge bg-primary center'> {props.phrase} My name is {props.name}.</span>
                </h1>
            </div>
        );
    }

    export default Greeter;