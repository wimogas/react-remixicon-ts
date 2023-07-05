import React from "react";
import Icon from "../../Icon";

type IconProps = {
    size?: number | undefined,
    color?: string | undefined,
    icon: string
}
const StarSLine = ({size = 20, color='black'}: IconProps) => {

    return (
        <Icon icon={'star-s-line'} size={size} color={color} />
    );
};
export default StarSLine;