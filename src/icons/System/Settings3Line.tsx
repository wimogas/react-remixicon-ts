import React from "react";
import Icon from "../../Icon";

type IconProps = {
    size?: number | undefined,
    color?: string | undefined,
    icon: string
}
const Settings3Line = ({size = 20, color='black'}: IconProps) => {

    return (
        <Icon icon={'settings-3-line'} size={size} color={color} />
    );
};
export default Settings3Line;