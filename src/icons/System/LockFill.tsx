import React from "react";
import Icon from "../../Icon";

type IconProps = {
    size?: number | undefined,
    color?: string | undefined,
    icon: string
}
const LockFill = ({size = 20, color='black'}: IconProps) => {

    return (
        <Icon icon={'lock-fill'} size={size} color={color} />
    );
};
export default LockFill;