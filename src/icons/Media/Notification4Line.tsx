import React from "react";
import Icon from "../../Icon";

type IconProps = {
    size?: number | undefined,
    color?: string | undefined,
    icon: string
}
const Notification4Line = ({size = 20, color='black'}: IconProps) => {

    return (
        <Icon icon={'notification-4-line'} size={size} color={color} />
    );
};
export default Notification4Line;