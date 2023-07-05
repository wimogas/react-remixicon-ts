import React from "react";
import Icon from "../../Icon";

type IconProps = {
    size?: number | undefined,
    color?: string | undefined,
    icon: string
}
const LoginBoxLine = ({size = 20, color='black'}: IconProps) => {

    return (
        <Icon icon={'login-box-line'} size={size} color={color} />
    );
};
export default LoginBoxLine;