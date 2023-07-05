import React from "react";
import Icon from "../../Icon";

type IconProps = {
    size?: number | undefined,
    color?: string | undefined,
    icon: string
}
const Group2Line = ({size = 20, color='black'}: IconProps) => {

    return (
        <Icon icon={'group-2-line'} size={size} color={color} />
    );
};
export default Group2Line;