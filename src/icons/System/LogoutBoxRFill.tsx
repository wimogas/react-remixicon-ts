import React from "react";
import Icon from "../../Icon";

type IconProps = {
    size?: number | undefined,
    color?: string | undefined,
    icon: string
}
const LogoutBoxRFill = ({size = 20, color='black'}: IconProps) => {

    return (
        <Icon icon={'logout-box-r-fill'} size={size} color={color} />
    );
};
export default LogoutBoxRFill;