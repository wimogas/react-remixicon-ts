import React from "react";
import Icon from "../../Icon";

type IconProps = {
    size?: number | undefined,
    color?: string | undefined,
    icon: string
}
const CheckLine = ({size = 20, color='black'}: IconProps) => {

    return (
        <Icon icon={'check-line'} size={size} color={color} />
    );
};
export default CheckLine;