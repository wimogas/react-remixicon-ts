import React from "react";
import Icon from "../../Icon";

type IconProps = {
    size?: number | undefined,
    color?: string | undefined,
    icon: string
}
const RadioButtonLine = ({size = 20, color='black'}: IconProps) => {

    return (
        <Icon icon={'radio-button-line'} size={size} color={color} />
    );
};
export default RadioButtonLine;