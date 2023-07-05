import React from "react";
import Icon from "../../Icon";

type IconProps = {
    size?: number | undefined,
    color?: string | undefined,
    icon: string
}
const IndeterminateCircleLine = ({size = 20, color='black'}: IconProps) => {

    return (
        <Icon icon={'indeterminate-circle-line'} size={size} color={color} />
    );
};
export default IndeterminateCircleLine;