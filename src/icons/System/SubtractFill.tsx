import React from "react";
import Icon from "../../Icon";

type IconProps = {
    size?: number | undefined,
    color?: string | undefined,
    icon: string
}
const SubtractFill = ({size = 20, color='black'}: IconProps) => {

    return (
        <Icon icon={'subtract-fill'} size={size} color={color} />
    );
};
export default SubtractFill;