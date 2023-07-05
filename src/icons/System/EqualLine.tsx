import React from "react";
import Icon from "../../Icon";

type IconProps = {
    size?: number | undefined,
    color?: string | undefined,
    icon: string
}
const EqualLine = ({size = 20, color='black'}: IconProps) => {

    return (
        <Icon icon={'equal-line'} size={size} color={color} />
    );
};
export default EqualLine;