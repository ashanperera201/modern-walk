import React from "react";
import { ITileProp } from "../";

const Tile = (props: ITileProp): JSX.Element => {

    const { borderRadius, backgroundColor, id, title, height, width, fontColor, fontSize, fontWeight, onClick } = props;

    return (
        <>
            <div key={id} className={`cursor-pointer flex flex-col items-center justify-center w-${width} max-[${height}] ${height} ${borderRadius} ${backgroundColor}`} onClick={onClick}>
                <h3 className={`${fontSize} ${fontWeight} ${fontColor}`}>{title}</h3>
            </div>
        </>
    )
}

export default Tile;