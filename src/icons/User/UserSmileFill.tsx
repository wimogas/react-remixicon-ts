import React from "react";
import Icon from "../../Icon";

type IconProps = {
    size?: number | undefined,
    color?: string | undefined,
    icon: string
}
const UserSmileFill = ({size = 20, color='black'}: IconProps) => {

    return (
        <Icon icon={'user-smile-fill'} size={size} color={color} />
    );
};
export default UserSmileFill;