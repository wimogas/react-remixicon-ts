import React from "react";
import Icon from "../../Icon";

type IconProps = {
    size?: number | undefined,
    color?: string | undefined,
    icon: string
}
const ShieldFlashLine = ({size = 20, color='black'}: IconProps) => {

    return (
        <Icon icon={'shield-flash-line'} size={size} color={color} />
    );
};
export default ShieldFlashLine;