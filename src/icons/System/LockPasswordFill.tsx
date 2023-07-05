import React from "react";
import Icon from "../../Icon";

type IconProps = {
    size?: number | undefined,
    color?: string | undefined,
    icon: string
}
const LockPasswordFill = ({size = 20, color='black'}: IconProps) => {

    return (
        <Icon icon={'lock-password-fill'} size={size} color={color} />
    );
};
export default LockPasswordFill;