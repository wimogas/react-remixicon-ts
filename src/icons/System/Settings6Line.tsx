import React from "react";
import Icon from "../../Icon";

type IconProps = {
    size?: number | undefined,
    color?: string | undefined,
    icon: string
}
const Settings6Line = ({size = 20, color='black'}: IconProps) => {

    return (
        <Icon icon={'settings-6-line'} size={size} color={color} />
    );
};
export default Settings6Line;