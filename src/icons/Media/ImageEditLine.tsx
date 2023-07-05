import React from "react";
import Icon from "../../Icon";

type IconProps = {
    size?: number | undefined,
    color?: string | undefined,
    icon: string
}
const ImageEditLine = ({size = 20, color='black'}: IconProps) => {

    return (
        <Icon icon={'image-edit-line'} size={size} color={color} />
    );
};
export default ImageEditLine;