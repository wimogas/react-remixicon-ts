import React from "react";
import Icon from "../../Icon";

type IconProps = {
    size?: number | undefined,
    color?: string | undefined,
    icon: string
}
const UserAddFill = ({size = 20, color='black'}: IconProps) => {

    return (
        <Icon icon={'user-add-fill'} size={size} color={color} />
    );
};
export default UserAddFill;