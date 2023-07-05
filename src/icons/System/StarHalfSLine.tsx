import React from "react";
import Icon from "../../Icon";

type IconProps = {
    size?: number | undefined,
    color?: string | undefined,
    icon: string
}
const StarHalfSLine = ({size = 20, color='black'}: IconProps) => {

    return (
        <Icon icon={'star-half-s-line'} size={size} color={color} />
    );
};
export default StarHalfSLine;