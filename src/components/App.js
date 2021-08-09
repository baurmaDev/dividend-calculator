import React from 'react'
import Input from './Input'

function App() {
    function getRandomIntInclusive(min, max){
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }
    const id = getRandomIntInclusive(1,4);
    return (
        <div>
            <Input id={id} />
        </div>
    )
}

export default App
