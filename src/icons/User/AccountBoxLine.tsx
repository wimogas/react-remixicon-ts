import React from "react";
import Icon from "../../Icon";

type IconProps = {
    size?: number | undefined,
    color?: string | undefined,
    icon: string
}
const AccountBoxLine = ({size = 20, color='black'}: IconProps) => {

    return (
        <Icon icon={'account-box-line'} size={size} color={color} />
    );
};
export default AccountBoxLine;