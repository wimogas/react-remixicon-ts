import React from "react";
import Icon from "../../Icon";

type IconProps = {
    size?: number | undefined,
    color?: string | undefined,
    icon: string
}
const ErrorWarningLine = ({size = 20, color='black'}: IconProps) => {

    return (
        <Icon icon={'error-warning-line'} size={size} color={color} />
    );
};
export default ErrorWarningLine;