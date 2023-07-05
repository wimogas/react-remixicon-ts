import React from "react";
import Icon from "../../Icon";

type IconProps = {
    size?: number | undefined,
    color?: string | undefined,
    icon: string
}
const DeleteBackFill = ({size = 20, color='black'}: IconProps) => {

    return (
        <Icon icon={'delete-back-fill'} size={size} color={color} />
    );
};
export default DeleteBackFill;