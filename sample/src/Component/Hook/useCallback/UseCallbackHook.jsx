import React, { useCallback, useRef, useState } from 'react'

export default function UseCallbackHook() {

    const [color, setColor] = useState("");
    const disp = useRef();

    const handleChangeColor = useCallback(() => {
        disp.current.style.background = color;
    }, [color]);
    return (
        <div ref={disp} style={{ position: "absolute", width: "100%", height: "100%" }}>
            <label htmlFor="">Enter Color</label>
            <input type="text" value={color} onChange={(e) => { setColor(e.target.value) }} />
            <button onClick={handleChangeColor}>Change Color</button>
        </div>
    )
}
