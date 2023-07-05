import React from "react";
import Icon from "../../Icon";

type IconProps = {
    size?: number | undefined,
    color?: string | undefined,
    icon: string
}
const StarHalfLine = ({size = 20, color='black'}: IconProps) => {

    return (
        <Icon icon={'star-half-line'} size={size} color={color} />
    );
};
export default StarHalfLine;