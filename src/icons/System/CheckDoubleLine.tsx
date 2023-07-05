import React from "react";
import Icon from "../../Icon";

type IconProps = {
    size?: number | undefined,
    color?: string | undefined,
    icon: string
}
const CheckDoubleLine = ({size = 20, color='black'}: IconProps) => {

    return (
        <Icon icon={'check-double-line'} size={size} color={color} />
    );
};
export default CheckDoubleLine;