import React from "react";
import Icon from "../../Icon";

type IconProps = {
    size?: number | undefined,
    color?: string | undefined,
    icon: string
}
const Notification3Fill = ({size = 20, color='black'}: IconProps) => {

    return (
        <Icon icon={'notification-3-fill'} size={size} color={color} />
    );
};
export default Notification3Fill;