import React from "react";
import Icon from "../../Icon";

type IconProps = {
    size?: number | undefined,
    color?: string | undefined,
    icon: string
}
const AlarmWarningFill = ({size = 20, color='black'}: IconProps) => {

    return (
        <Icon icon={'alarm-warning-fill'} size={size} color={color} />
    );
};
export default AlarmWarningFill;