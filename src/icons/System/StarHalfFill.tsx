import React from "react";
import Icon from "../../Icon";

type IconProps = {
    size?: number | undefined,
    color?: string | undefined,
    icon: string
}
const StarHalfFill = ({size = 20, color='black'}: IconProps) => {

    return (
        <Icon icon={'star-half-fill'} size={size} color={color} />
    );
};
export default StarHalfFill;