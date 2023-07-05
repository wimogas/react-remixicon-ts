import React from "react";
import Icon from "../../Icon";

type IconProps = {
    size?: number | undefined,
    color?: string | undefined,
    icon: string
}
const AccountCircleLine = ({size = 20, color='black'}: IconProps) => {

    return (
        <Icon icon={'account-circle-line'} size={size} color={color} />
    );
};
export default AccountCircleLine;