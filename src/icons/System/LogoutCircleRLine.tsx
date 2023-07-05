import React from "react";
import Icon from "../../Icon";

type IconProps = {
    size?: number | undefined,
    color?: string | undefined,
    icon: string
}
const LogoutCircleRLine = ({size = 20, color='black'}: IconProps) => {

    return (
        <Icon icon={'logout-circle-r-line'} size={size} color={color} />
    );
};
export default LogoutCircleRLine;