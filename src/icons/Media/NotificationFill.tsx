import React from "react";
import Icon from "../../Icon";

type IconProps = {
    size?: number | undefined,
    color?: string | undefined,
    icon: string
}
const NotificationFill = ({size = 20, color='black'}: IconProps) => {

    return (
        <Icon icon={'notification-fill'} size={size} color={color} />
    );
};
export default NotificationFill;