import React from "react";
import Icon from "../../Icon";

type IconProps = {
    size?: number | undefined,
    color?: string | undefined,
    icon: string
}
const LogoutBoxRLine = ({size = 20, color='black'}: IconProps) => {

    return (
        <Icon icon={'logout-box-r-line'} size={size} color={color} />
    );
};
export default LogoutBoxRLine;