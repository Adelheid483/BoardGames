interface Props {
    name: string;
}

export const PlayerItem = (props: Props) => {
    return <li className="list-group-item">{props.name}</li>;
};
