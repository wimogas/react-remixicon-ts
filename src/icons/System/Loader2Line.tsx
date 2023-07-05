import React from "react";
import Icon from "../../Icon";

type IconProps = {
    size?: number | undefined,
    color?: string | undefined,
    icon: string
}
const Loader2Line = ({size = 20, color='black'}: IconProps) => {

    return (
        <Icon icon={'loader-2-line'} size={size} color={color} />
    );
};
export default Loader2Line;