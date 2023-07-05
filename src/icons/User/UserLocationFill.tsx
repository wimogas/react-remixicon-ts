import React from "react";
import Icon from "../../Icon";

type IconProps = {
    size?: number | undefined,
    color?: string | undefined,
    icon: string
}
const UserLocationFill = ({size = 20, color='black'}: IconProps) => {

    return (
        <Icon icon={'user-location-fill'} size={size} color={color} />
    );
};
export default UserLocationFill;