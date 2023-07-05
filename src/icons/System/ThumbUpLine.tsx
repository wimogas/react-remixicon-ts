import React from "react";
import Icon from "../../Icon";

type IconProps = {
    size?: number | undefined,
    color?: string | undefined,
    icon: string
}
const ThumbUpLine = ({size = 20, color='black'}: IconProps) => {

    return (
        <Icon icon={'thumb-up-line'} size={size} color={color} />
    );
};
export default ThumbUpLine;