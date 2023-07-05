import React from "react";
import Icon from "../../Icon";

type IconProps = {
    size?: number | undefined,
    color?: string | undefined,
    icon: string
}
const LoginBoxFill = ({size = 20, color='black'}: IconProps) => {

    return (
        <Icon icon={'login-box-fill'} size={size} color={color} />
    );
};
export default LoginBoxFill;