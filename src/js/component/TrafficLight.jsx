import React, { useState } from "react";

export const TrafficLight = () =>{

    const [selectedColor, setSelectedColor] = useState("red");
    const [colors, setColors] = useState(["red", "yellow", "green"]); // Estado para los colores disponibles

    const changeColor = () =>{
        const actualColor = colors.indexOf(selectedColor);
        const nextColor = (actualColor + 1) % colors.length;
        setSelectedColor(colors[nextColor]);
    }
    return(
        <div className="container text-center mt-3">
            <div className="traffic-light mx-auto d-flex flex-column align-items-center p-3 bg-dark">
                <div onClick={() => setSelectedColor("red")} className={"light red" + (selectedColor === "red" ? " glow" : "")}></div>
                <div onClick={() => setSelectedColor("yellow")} className={"light yellow" + (selectedColor === "yellow" ? " glow" : "")}></div>
                <div onClick={() => setSelectedColor("green")} className={"light green" + (selectedColor === "green" ? " glow" : "")}></div>
            </div>
            <div className="mt-3">
                <button onClick={changeColor} className="btn btn-secondary mx-2">Change Color</button>         
            </div>
        </div>
    )
}