import React from "react";
import Icon from "../../Icon";

type IconProps = {
    size?: number | undefined,
    color?: string | undefined,
    icon: string
}
const Heart3Line = ({size = 20, color='black'}: IconProps) => {

    return (
        <Icon icon={'heart-3-line'} size={size} color={color} />
    );
};
export default Heart3Line;