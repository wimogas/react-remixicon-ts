import React from "react";
import Icon from "../../Icon";

type IconProps = {
    size?: number | undefined,
    color?: string | undefined,
    icon: string
}
const ArrowLeftSLine = ({size = 20, color='black'}: IconProps) => {

    return (
        <Icon icon={'arrow-left-s-line'} size={size} color={color} />
    );
};
export default ArrowLeftSLine;