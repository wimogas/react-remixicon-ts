import React from "react";
import Icon from "../../Icon";

type IconProps = {
    size?: number | undefined,
    color?: string | undefined,
    icon: string
}
const LockUnlockLine = ({size = 20, color='black'}: IconProps) => {

    return (
        <Icon icon={'lock-unlock-line'} size={size} color={color} />
    );
};
export default LockUnlockLine;