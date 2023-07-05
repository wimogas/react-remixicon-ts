import React from "react";
import Icon from "../../Icon";

type IconProps = {
    size?: number | undefined,
    color?: string | undefined,
    icon: string
}
const CheckboxCircleFill = ({size = 20, color='black'}: IconProps) => {

    return (
        <Icon icon={'checkbox-circle-fill'} size={size} color={color} />
    );
};
export default CheckboxCircleFill;