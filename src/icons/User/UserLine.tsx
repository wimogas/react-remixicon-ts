import React from "react";
import Icon from "../../Icon";

type IconProps = {
    size?: number | undefined,
    color?: string | undefined,
    icon: string
}
const UserLine = ({size = 20, color='black'}: IconProps) => {

    return (
        <Icon icon={'user-line'} size={size} color={color} />
    );
};
export default UserLine;