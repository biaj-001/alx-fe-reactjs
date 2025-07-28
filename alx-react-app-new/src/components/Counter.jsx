import { useState } from 'react';

function Counter(){
    const [count , setCount ]= useState(0);

    return(
        <div>
            <p>current count : {count} </p>
            <button onClick={()=>setCount(count + 1)}>Incrementing</button>
            <button onClick={()=>setCount(count - 1)}>Decrementing</button>
            <button onClick ={()=>setCount(0)}>Resetting</button>
        </div>
    );
}

export default Counter
