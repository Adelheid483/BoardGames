import React from "react";
import { Link } from "react-router-dom";
import { Button } from "./button";

export const BackButton = () => (
    <Button
        class="btn-primary"
        children={
            <Link to="/" className="nav-link">
                Back to Main
            </Link>
        }
    />
);
