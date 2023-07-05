import React from "react";
import Icon from "../../Icon";

type IconProps = {
    size?: number | undefined,
    color?: string | undefined,
    icon: string
}
const User3Fill = ({size = 20, color='black'}: IconProps) => {

    return (
        <Icon icon={'user-3-fill'} size={size} color={color} />
    );
};
export default User3Fill;