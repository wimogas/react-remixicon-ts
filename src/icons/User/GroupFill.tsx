import React from "react";
import Icon from "../../Icon";

type IconProps = {
    size?: number | undefined,
    color?: string | undefined,
    icon: string
}
const GroupFill = ({size = 20, color='black'}: IconProps) => {

    return (
        <Icon icon={'group-fill'} size={size} color={color} />
    );
};
export default GroupFill;