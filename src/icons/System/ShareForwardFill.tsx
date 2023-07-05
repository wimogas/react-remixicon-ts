import React from "react";
import Icon from "../../Icon";

type IconProps = {
    size?: number | undefined,
    color?: string | undefined,
    icon: string
}
const ShareForwardFill = ({size = 20, color='black'}: IconProps) => {

    return (
        <Icon icon={'share-forward-fill'} size={size} color={color} />
    );
};
export default ShareForwardFill;