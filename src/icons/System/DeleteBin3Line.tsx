import React from "react";
import Icon from "../../Icon";

type IconProps = {
    size?: number | undefined,
    color?: string | undefined,
    icon: string
}
const DeleteBin3Line = ({size = 20, color='black'}: IconProps) => {

    return (
        <Icon icon={'delete-bin-3-line'} size={size} color={color} />
    );
};
export default DeleteBin3Line;