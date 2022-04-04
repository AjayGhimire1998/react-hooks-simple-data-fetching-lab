import React from "react";
import { useEffect, useState } from "react/cjs/react.development";

function App() {
    const [isLoad, setIsLoad ] = useState(false)
    const [image, setImage] = useState()
    useEffect(() => {
        fetch ("https://dog.ceo/api/breeds/image/random")
        .then (res => res.json())
        .then ((data) => {
            setImage(data.message)
            setIsLoad(true)
        })
    }, []);

    if(!isLoad) {
        return <h1>Loading...</h1>
    }
    return(
        <div>
            <p>{!isLoad ? "Loading" : "Loaded"}</p>
            <img src={image} alt="A Random Dog" />
        </div>
    )
    
}

export default App;
