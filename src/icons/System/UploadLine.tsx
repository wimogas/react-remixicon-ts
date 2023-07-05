import React from "react";
import Icon from "../../Icon";

type IconProps = {
    size?: number | undefined,
    color?: string | undefined,
    icon: string
}
const UploadLine = ({size = 20, color='black'}: IconProps) => {

    return (
        <Icon icon={'upload-line'} size={size} color={color} />
    );
};
export default UploadLine;