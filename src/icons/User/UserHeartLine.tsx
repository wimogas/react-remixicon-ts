import React from "react";
import Icon from "../../Icon";

type IconProps = {
    size?: number | undefined,
    color?: string | undefined,
    icon: string
}
const UserHeartLine = ({size = 20, color='black'}: IconProps) => {

    return (
        <Icon icon={'user-heart-line'} size={size} color={color} />
    );
};
export default UserHeartLine;