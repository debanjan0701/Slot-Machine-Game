import React from "react";
import SlotM from "./SlotM";


const App = () => {
    return (
        <>
            <h1 className="heading_style">
                π° Welcome to <span style={{ fontWeight: 'bold' }}>Slot Machine Gameπ°</span>
            </h1>
            <div className="slotmachine">
                <SlotM x = 'π' y = 'π' z = 'π'/>
                <SlotM x = 'π' y = 'π' z = 'π'/>
                <SlotM x = 'π' y = 'π' z = 'π'/>
                <SlotM x = 'π' y = 'π' z = 'π'/>
            </div>

        </>
    );
}

export default App;