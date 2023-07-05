import React from "react";
import Icon from "../../Icon";

type IconProps = {
    size?: number | undefined,
    color?: string | undefined,
    icon: string
}
const AccountPinCircleLine = ({size = 20, color='black'}: IconProps) => {

    return (
        <Icon icon={'account-pin-circle-line'} size={size} color={color} />
    );
};
export default AccountPinCircleLine;