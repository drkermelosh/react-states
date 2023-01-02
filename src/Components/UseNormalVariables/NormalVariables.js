import React, {Component} from "react";

class NormalVariables extends React.Component {

    render() {
        let x = 100;
        const add = () => {

            x = x + 1;

            console.log(x);

            return x;
        };

        return (

            <div>
                 <h1>Using Normal Variables won't work in React as States</h1>
                 <h2>{x}</h2>
                 <button onClick={add}>Add 1</button>
                 <hr />
                 <hr />
            </div>

        );

    }

}

export default NormalVariables;