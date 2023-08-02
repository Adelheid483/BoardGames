import React from "react";
import { Link } from "react-router-dom";

export const BackButton = () => (
    <button type="button" className="btn btn-primary">
        <Link to="/" className="nav-link">
            Back to Main
        </Link>
    </button>
);
