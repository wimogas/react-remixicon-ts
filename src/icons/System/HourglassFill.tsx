import React from "react";
import Icon from "../../Icon";

type IconProps = {
    size?: number | undefined,
    color?: string | undefined,
    icon: string
}
const HourglassFill = ({size = 20, color='black'}: IconProps) => {

    return (
        <Icon icon={'hourglass-fill'} size={size} color={color} />
    );
};
export default HourglassFill;