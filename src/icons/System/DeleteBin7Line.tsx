import React from "react";
import Icon from "../../Icon";

type IconProps = {
    size?: number | undefined,
    color?: string | undefined,
    icon: string
}
const DeleteBin7Line = ({size = 20, color='black'}: IconProps) => {

    return (
        <Icon icon={'delete-bin-7-line'} size={size} color={color} />
    );
};
export default DeleteBin7Line;