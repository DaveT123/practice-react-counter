import React from "react";

export default function Navbar({ totalCount }) {
    return (
        <nav className="navbar navbar-light bg-info">
            <a className="navbar-brand text-white" href="/">
                Total Items{" "}
                <span className="badge badge-pill badge-secondary">
                    {totalCount()}
                </span>
            </a>
        </nav>
    );
}
