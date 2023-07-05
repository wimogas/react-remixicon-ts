import React from "react";
import Icon from "../../Icon";

type IconProps = {
    size?: number | undefined,
    color?: string | undefined,
    icon: string
}
const DeleteBin7Fill = ({size = 20, color='black'}: IconProps) => {

    return (
        <Icon icon={'delete-bin-7-fill'} size={size} color={color} />
    );
};
export default DeleteBin7Fill;