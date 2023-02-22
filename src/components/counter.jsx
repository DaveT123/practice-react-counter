import React from "react";
import Row from "./row";

export default function Counter({
    data,
    handleIncrement,
    handleDecrement,
    handleDelete,
    handleReset,
}) {
    return (
        <div>
            {data.map((item, index) => (
                <Row
                    key={index}
                    item={item}
                    index={index}
                    handleIncrement={handleIncrement}
                    handleDecrement={handleDecrement}
                    handleDelete={handleDelete}
                />
            ))}
            <button
                className="btn btn-primary btn-sm m-2 font-weight-bold"
                onClick={handleReset}
            >
                Reset
            </button>
        </div>
    );
}
