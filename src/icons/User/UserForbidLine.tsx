import React from "react";
import Icon from "../../Icon";

type IconProps = {
    size?: number | undefined,
    color?: string | undefined,
    icon: string
}
const UserForbidLine = ({size = 20, color='black'}: IconProps) => {

    return (
        <Icon icon={'user-forbid-line'} size={size} color={color} />
    );
};
export default UserForbidLine;