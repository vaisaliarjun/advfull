import React from 'react';

var Home=()=>{
     var styling ={
        color:"blue",
        FontSize:"30px",
        textDecoration:"underline"
    }
    return (<div>
    <h1 style={styling}> This is home </h1>
    <h2 id='idSEg'>Testing styling</h2>
    <p className="box-model">hello</p>
    </div>
    );
}
export default Home;
