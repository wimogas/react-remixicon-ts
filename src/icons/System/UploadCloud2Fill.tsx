import React from "react";
import Icon from "../../Icon";

type IconProps = {
    size?: number | undefined,
    color?: string | undefined,
    icon: string
}
const UploadCloud2Fill = ({size = 20, color='black'}: IconProps) => {

    return (
        <Icon icon={'upload-cloud-2-fill'} size={size} color={color} />
    );
};
export default UploadCloud2Fill;