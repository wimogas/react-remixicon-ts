import React from "react";
import Icon from "../../Icon";

type IconProps = {
    size?: number | undefined,
    color?: string | undefined,
    icon: string
}
const ErrorWarningFill = ({size = 20, color='black'}: IconProps) => {

    return (
        <Icon icon={'error-warning-fill'} size={size} color={color} />
    );
};
export default ErrorWarningFill;