import React from "react";
import Icon from "../../Icon";

type IconProps = {
    size?: number | undefined,
    color?: string | undefined,
    icon: string
}
const SpyFill = ({size = 20, color='black'}: IconProps) => {

    return (
        <Icon icon={'spy-fill'} size={size} color={color} />
    );
};
export default SpyFill;