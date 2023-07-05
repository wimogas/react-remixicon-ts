import React from "react";
import Icon from "../../Icon";

type IconProps = {
    size?: number | undefined,
    color?: string | undefined,
    icon: string
}
const BodyScanFill = ({size = 20, color='black'}: IconProps) => {

    return (
        <Icon icon={'body-scan-fill'} size={size} color={color} />
    );
};
export default BodyScanFill;