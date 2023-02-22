import React, { useState } from "react";
import Counter from "./components/counter";
import Navbar from "./components/navbar";
import "./App.css";

function App() {
    let [obj, setObj] = useState([
        { name: "Shoes", count: 0 },
        { name: "Pants", count: 0 },
        { name: "Shirt", count: 0 },
    ]);

    const handleIncrement = (index) => {
        const temp = [...obj];
        temp[index] = { ...temp[index] };

        temp[index].count += 1;
        setObj(temp);
    };

    const handleDecrement = (index) => {
        const temp = [...obj];
        temp[index] = { ...temp[index] };

        if (temp[index].count === 0) return;
        temp[index].count -= 1;
        setObj(temp);
    };

    const handleDelete = (index) => {
        const name = obj[index].name;
        let newObj = obj.filter((item) => item.name !== name);
        setObj(newObj);
    };

    const handleReset = () => {
        const newObj = obj.map((item) => {
            item.count = 0;
            return item;
        });
        setObj(newObj);
    };

    const totalCount = () => {
        let sum = 0;
        obj.forEach((item) => {
            sum += item.count;
        });
        return sum;
    };

    return (
        <div className="App">
            <Navbar totalCount={totalCount} />
            <main className="container-fluid bg-light pt-5">
                <Counter
                    data={obj}
                    handleIncrement={handleIncrement}
                    handleDecrement={handleDecrement}
                    handleDelete={handleDelete}
                    handleReset={handleReset}
                />
            </main>
        </div>
    );
}

export default App;
