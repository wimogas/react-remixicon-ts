import React from "react";
import Icon from "../../Icon";

type IconProps = {
    size?: number | undefined,
    color?: string | undefined,
    icon: string
}
const CheckboxBlankFill = ({size = 20, color='black'}: IconProps) => {

    return (
        <Icon icon={'checkbox-blank-fill'} size={size} color={color} />
    );
};
export default CheckboxBlankFill;