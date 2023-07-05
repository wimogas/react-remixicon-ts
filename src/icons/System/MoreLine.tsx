import React from "react";
import Icon from "../../Icon";

type IconProps = {
    size?: number | undefined,
    color?: string | undefined,
    icon: string
}
const MoreLine = ({size = 20, color='black'}: IconProps) => {

    return (
        <Icon icon={'more-line'} size={size} color={color} />
    );
};
export default MoreLine;