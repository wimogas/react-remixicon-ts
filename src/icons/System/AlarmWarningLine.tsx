import React from "react";
import Icon from "../../Icon";

type IconProps = {
    size?: number | undefined,
    color?: string | undefined,
    icon: string
}
const AlarmWarningLine = ({size = 20, color='black'}: IconProps) => {

    return (
        <Icon icon={'alarm-warning-line'} size={size} color={color} />
    );
};
export default AlarmWarningLine;