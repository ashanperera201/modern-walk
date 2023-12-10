import React from "react";
import { TitlePropInterface } from "..";

const TitleHeader = (props: TitlePropInterface): JSX.Element => {

    const { fontColor, fontSize, fontWeight, title, cursorPointer, onClick } = props;

    return (
        <>
            <h2 className={`${fontColor} ${fontSize} ${fontWeight} ${cursorPointer}`} onClick={onClick}>{title}</h2>
        </>
    )
}

export default TitleHeader;