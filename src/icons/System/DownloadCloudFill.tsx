import React from "react";
import Icon from "../../Icon";

type IconProps = {
    size?: number | undefined,
    color?: string | undefined,
    icon: string
}
const DownloadCloudFill = ({size = 20, color='black'}: IconProps) => {

    return (
        <Icon icon={'download-cloud-fill'} size={size} color={color} />
    );
};
export default DownloadCloudFill;