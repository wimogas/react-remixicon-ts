import React from "react";
import Icon from "../../Icon";

type IconProps = {
    size?: number | undefined,
    color?: string | undefined,
    icon: string
}
const EyeOffLine = ({size = 20, color='black'}: IconProps) => {

    return (
        <Icon icon={'eye-off-line'} size={size} color={color} />
    );
};
export default EyeOffLine;