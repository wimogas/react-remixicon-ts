import React from "react";
import Icon from "../../Icon";

type IconProps = {
    size?: number | undefined,
    color?: string | undefined,
    icon: string
}
const NotificationLine = ({size = 20, color='black'}: IconProps) => {

    return (
        <Icon icon={'notification-line'} size={size} color={color} />
    );
};
export default NotificationLine;