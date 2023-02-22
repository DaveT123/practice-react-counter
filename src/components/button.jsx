import React from "react";

export default function Button({ index, symbol, handleClick }) {
    const doHandleClick = () => {
        handleClick(index);
    };

    const className =
        symbol !== "Delete"
            ? "btn btn-secondary btn-sm m-2"
            : "btn btn-danger btn-sm m-2";

    return (
        <div>
            <button onClick={doHandleClick} className={className}>
                {symbol}
            </button>
        </div>
    );
}
