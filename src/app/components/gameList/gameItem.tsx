import React from "react";
import { Link } from "react-router-dom";

interface Props {
    path: string;
    name: string;
}

export const GameItem = (props: Props) => {
    const path = `/${props.path}`;

    return (
        <li className="list-group-item">
            <Link to={path} className="nav-link">
                {props.name}
            </Link>
        </li>
    );
};
