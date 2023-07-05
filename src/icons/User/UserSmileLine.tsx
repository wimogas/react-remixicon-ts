import React from "react";
import Icon from "../../Icon";

type IconProps = {
    size?: number | undefined,
    color?: string | undefined,
    icon: string
}
const UserSmileLine = ({size = 20, color='black'}: IconProps) => {

    return (
        <Icon icon={'user-smile-line'} size={size} color={color} />
    );
};
export default UserSmileLine;