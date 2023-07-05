import React from "react";
import Icon from "../../Icon";

type IconProps = {
    size?: number | undefined,
    color?: string | undefined,
    icon: string
}
const ShareCircleFill = ({size = 20, color='black'}: IconProps) => {

    return (
        <Icon icon={'share-circle-fill'} size={size} color={color} />
    );
};
export default ShareCircleFill;