import React from "react";
import Icon from "../../Icon";

type IconProps = {
    size?: number | undefined,
    color?: string | undefined,
    icon: string
}
const DeleteBin4Line = ({size = 20, color='black'}: IconProps) => {

    return (
        <Icon icon={'delete-bin-4-line'} size={size} color={color} />
    );
};
export default DeleteBin4Line;