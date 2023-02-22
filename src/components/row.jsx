import React from "react";
import Button from "./button";

export default function Row({
    item,
    index,
    handleIncrement,
    handleDecrement,
    handleDelete,
}) {
    const formatCount = () => {
        const { count } = item;
        return count === 0 ? "Zero" : count;
    };

    const getBadge = () => {
        let classes = "d-flex align-items-center badge m-2 badge-";
        classes += item.count === 0 ? "warning" : "primary";
        return classes;
    };

    return (
        <div className="m-2">
            <h3>
                <span className="badge badge-info">{item.name}</span>
            </h3>
            <div style={{ display: "flex" }}>
                <span className={getBadge()}>{formatCount()}</span>
                <Button
                    index={index}
                    symbol="+"
                    handleClick={handleIncrement}
                />
                <Button
                    index={index}
                    symbol="-"
                    handleClick={handleDecrement}
                />
                <Button
                    index={index}
                    symbol="Delete"
                    handleClick={handleDelete}
                ></Button>
            </div>
        </div>
    );
}
