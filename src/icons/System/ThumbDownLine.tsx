import React from "react";
import Icon from "../../Icon";

type IconProps = {
    size?: number | undefined,
    color?: string | undefined,
    icon: string
}
const ThumbDownLine = ({size = 20, color='black'}: IconProps) => {

    return (
        <Icon icon={'thumb-down-line'} size={size} color={color} />
    );
};
export default ThumbDownLine;