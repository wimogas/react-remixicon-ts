import React from "react";
import Icon from "../../Icon";

type IconProps = {
    size?: number | undefined,
    color?: string | undefined,
    icon: string
}
const AccountPinBoxLine = ({size = 20, color='black'}: IconProps) => {

    return (
        <Icon icon={'account-pin-box-line'} size={size} color={color} />
    );
};
export default AccountPinBoxLine;