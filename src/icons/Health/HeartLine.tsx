import React from "react";
import Icon from "../../Icon";

type IconProps = {
    size?: number | undefined,
    color?: string | undefined,
    icon: string
}
const HeartLine = ({size = 20, color='black'}: IconProps) => {

    return (
        <Icon icon={'heart-line'} size={size} color={color} />
    );
};
export default HeartLine;