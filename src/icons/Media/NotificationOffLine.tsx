import React from "react";
import Icon from "../../Icon";

type IconProps = {
    size?: number | undefined,
    color?: string | undefined,
    icon: string
}
const NotificationOffLine = ({size = 20, color='black'}: IconProps) => {

    return (
        <Icon icon={'notification-off-line'} size={size} color={color} />
    );
};
export default NotificationOffLine;