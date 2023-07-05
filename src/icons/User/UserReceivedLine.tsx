import React from "react";
import Icon from "../../Icon";

type IconProps = {
    size?: number | undefined,
    color?: string | undefined,
    icon: string
}
const UserReceivedLine = ({size = 20, color='black'}: IconProps) => {

    return (
        <Icon icon={'user-received-line'} size={size} color={color} />
    );
};
export default UserReceivedLine;