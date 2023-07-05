import React from "react";
import Icon from "../../Icon";

type IconProps = {
    size?: number | undefined,
    color?: string | undefined,
    icon: string
}
const LogoutBoxLine = ({size = 20, color='black'}: IconProps) => {

    return (
        <Icon icon={'logout-box-line'} size={size} color={color} />
    );
};
export default LogoutBoxLine;