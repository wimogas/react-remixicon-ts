import React from "react";
import Icon from "../../Icon";

type IconProps = {
    size?: number | undefined,
    color?: string | undefined,
    icon: string
}
const ZoomInFill = ({size = 20, color='black'}: IconProps) => {

    return (
        <Icon icon={'zoom-in-fill'} size={size} color={color} />
    );
};
export default ZoomInFill;