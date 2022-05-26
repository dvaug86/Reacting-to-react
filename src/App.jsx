import React, { useState, useEffect } from "react";
import Greeter from './components/Greeter'
const App = () => {

    const [username, setUsername] = useState('');
    const [loaded, setLoaded] = useState(false);
    useEffect(()=>{
        setTimeout(()=>{
            setLoaded(true)
        }, 3000);
   
    });
    if (loaded) {
        return (
            <div>
                <Greeter phrase="Hello there!" name="Ragnar" />
                <Greeter phrase="I am a Witcher." name="Geralt" />
                <Greeter phrase="Good Morrow!" name="Sherlock" />

                <span className="d-flex justify-content-center">
                    <input value={username} onChange={e => setUsername(e.target.value)} />
                </span>
                <p className="d-flex justify-content-center">You are logging in as: {username}</p>
            </div>
        )
    } else {
        return (
            <div>
                <h1 className="d-flex justify-content-center">Website is loading...</h1>
                <p className="d-flex justify-content-center">
                    <button onClick={() => setLoaded(true)}>Click to Load!</button>
                </p>
            </div>
        )
    }


}
export default App;