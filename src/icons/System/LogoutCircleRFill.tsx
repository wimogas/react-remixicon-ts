import React from "react";
import Icon from "../../Icon";

type IconProps = {
    size?: number | undefined,
    color?: string | undefined,
    icon: string
}
const LogoutCircleRFill = ({size = 20, color='black'}: IconProps) => {

    return (
        <Icon icon={'logout-circle-r-fill'} size={size} color={color} />
    );
};
export default LogoutCircleRFill;