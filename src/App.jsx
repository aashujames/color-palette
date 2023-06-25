import React, { useEffect, useState } from "react";
import Values from "values.js";
import ColorPalette from "./components/ColorPalette";

function App() {
    const [color, setColor] = useState("");
    const [items, setItems] = useState(new Values("#f15025").all(10));
    const [error, setError] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        try {
            let colors = new Values(color).all(10);
            setItems(colors);
        } catch (error) {
            setError(true);
        }
    };

    return (
        <div>
            <div className="container">
                <h3>Color Generator</h3>
                <form onSubmit={handleSubmit}>
                    <input
                        type="text"
                        value={color}
                        onChange={(e) => setColor(e.target.value)}
                        placeholder="#f15025"
                        className={`${error ? "error" : null}`}
                    />
                    <button type="submit" className="btn">
                        Submit
                    </button>
                </form>
            </div>
            <div className="colors">
                {items.map((item, index) => {
                    return (
                        <ColorPalette item={item} key={index} index={index} />
                    );
                })}
            </div>
        </div>
    );
}

export default App;
