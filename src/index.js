import React from 'react';
import ReactDOM from 'react-dom';


const App = ( ) =>{
    return (
        <div>
            <h1>This is first component</h1>
           <h2> My first React app</h2>
        </div>
    )
}

ReactDOM.render(<App />, document.getElementById('root'));

