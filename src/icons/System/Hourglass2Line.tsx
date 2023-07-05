import React from "react";
import Icon from "../../Icon";

type IconProps = {
    size?: number | undefined,
    color?: string | undefined,
    icon: string
}
const Hourglass2Line = ({size = 20, color='black'}: IconProps) => {

    return (
        <Icon icon={'hourglass-2-line'} size={size} color={color} />
    );
};
export default Hourglass2Line;