import React from "react";
import Icon from "./Icon";

type IconProps = {
    size?: number | undefined,
    color?: string | undefined,
    icon: string
}
const TemplateIcon = ({size = 20, color='black'}: IconProps) => {

    return (
        <Icon icon={'tempico'} size={size} color={color} />
    );
};
export default TemplateIcon;