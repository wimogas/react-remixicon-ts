import React from "react";
import Icon from "../../Icon";

type IconProps = {
    size?: number | undefined,
    color?: string | undefined,
    icon: string
}
const Lock2Fill = ({size = 20, color='black'}: IconProps) => {

    return (
        <Icon icon={'lock-2-fill'} size={size} color={color} />
    );
};
export default Lock2Fill;