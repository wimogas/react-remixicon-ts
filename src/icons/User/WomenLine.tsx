import React from "react";
import Icon from "../../Icon";

type IconProps = {
    size?: number | undefined,
    color?: string | undefined,
    icon: string
}
const WomenLine = ({size = 20, color='black'}: IconProps) => {

    return (
        <Icon icon={'women-line'} size={size} color={color} />
    );
};
export default WomenLine;