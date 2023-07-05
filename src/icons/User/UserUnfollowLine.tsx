import React from "react";
import Icon from "../../Icon";

type IconProps = {
    size?: number | undefined,
    color?: string | undefined,
    icon: string
}
const UserUnfollowLine = ({size = 20, color='black'}: IconProps) => {

    return (
        <Icon icon={'user-unfollow-line'} size={size} color={color} />
    );
};
export default UserUnfollowLine;