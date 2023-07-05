import React from "react";
import Icon from "../../Icon";

type IconProps = {
    size?: number | undefined,
    color?: string | undefined,
    icon: string
}
const CheckboxMultipleFill = ({size = 20, color='black'}: IconProps) => {

    return (
        <Icon icon={'checkbox-multiple-fill'} size={size} color={color} />
    );
};
export default CheckboxMultipleFill;