import React from "react";
import Icon from "../../Icon";

type IconProps = {
    size?: number | undefined,
    color?: string | undefined,
    icon: string
}
const DeleteBack2Fill = ({size = 20, color='black'}: IconProps) => {

    return (
        <Icon icon={'delete-back-2-fill'} size={size} color={color} />
    );
};
export default DeleteBack2Fill;