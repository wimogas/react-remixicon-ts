import React from "react";
import Icon from "../../Icon";

type IconProps = {
    size?: number | undefined,
    color?: string | undefined,
    icon: string
}
const Forbid2Line = ({size = 20, color='black'}: IconProps) => {

    return (
        <Icon icon={'forbid-2-line'} size={size} color={color} />
    );
};
export default Forbid2Line;