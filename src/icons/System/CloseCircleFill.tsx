import React from "react";
import Icon from "../../Icon";

type IconProps = {
    size?: number | undefined,
    color?: string | undefined,
    icon: string
}
const CloseCircleFill = ({size = 20, color='black'}: IconProps) => {

    return (
        <Icon icon={'close-circle-fill'} size={size} color={color} />
    );
};
export default CloseCircleFill;