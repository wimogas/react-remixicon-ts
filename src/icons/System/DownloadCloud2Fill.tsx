import React from "react";
import Icon from "../../Icon";

type IconProps = {
    size?: number | undefined,
    color?: string | undefined,
    icon: string
}
const DownloadCloud2Fill = ({size = 20, color='black'}: IconProps) => {

    return (
        <Icon icon={'download-cloud-2-fill'} size={size} color={color} />
    );
};
export default DownloadCloud2Fill;