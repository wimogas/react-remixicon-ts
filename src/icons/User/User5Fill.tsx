import React from "react";
import Icon from "../../Icon";

type IconProps = {
    size?: number | undefined,
    color?: string | undefined,
    icon: string
}
const User5Fill = ({size = 20, color='black'}: IconProps) => {

    return (
        <Icon icon={'user-5-fill'} size={size} color={color} />
    );
};
export default User5Fill;