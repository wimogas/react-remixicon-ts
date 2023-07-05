import React from "react";
import Icon from "../../Icon";

type IconProps = {
    size?: number | undefined,
    color?: string | undefined,
    icon: string
}
const ImageAddFill = ({size = 20, color='black'}: IconProps) => {

    return (
        <Icon icon={'image-add-fill'} size={size} color={color} />
    );
};
export default ImageAddFill;