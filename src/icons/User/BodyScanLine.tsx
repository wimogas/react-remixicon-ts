import React from "react";
import Icon from "../../Icon";

type IconProps = {
    size?: number | undefined,
    color?: string | undefined,
    icon: string
}
const BodyScanLine = ({size = 20, color='black'}: IconProps) => {

    return (
        <Icon icon={'body-scan-line'} size={size} color={color} />
    );
};
export default BodyScanLine;