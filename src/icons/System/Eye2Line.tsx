import React from "react";
import Icon from "../../Icon";

type IconProps = {
    size?: number | undefined,
    color?: string | undefined,
    icon: string
}
const Eye2Line = ({size = 20, color='black'}: IconProps) => {

    return (
        <Icon icon={'eye-2-line'} size={size} color={color} />
    );
};
export default Eye2Line;