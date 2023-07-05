import React from "react";
import Icon from "../../Icon";

type IconProps = {
    size?: number | undefined,
    color?: string | undefined,
    icon: string
}
const ThumbDownFill = ({size = 20, color='black'}: IconProps) => {

    return (
        <Icon icon={'thumb-down-fill'} size={size} color={color} />
    );
};
export default ThumbDownFill;