import React, {useState, useEffectg} from "react";
import Greeter from './components/Greeter'
const App = () => {
    return(
        <div>
            <Greeter phrase = "Hello there!" name = "Ragnar" />
            <Greeter phrase = "I am a Witcher." name = "Geralt" />
            <Greeter phrase = "Good Morrow" name = "Sherlock" />
        </div>
    )
}

export default App;