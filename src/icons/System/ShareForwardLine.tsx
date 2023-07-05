import React from "react";
import Icon from "../../Icon";

type IconProps = {
    size?: number | undefined,
    color?: string | undefined,
    icon: string
}
const ShareForwardLine = ({size = 20, color='black'}: IconProps) => {

    return (
        <Icon icon={'share-forward-line'} size={size} color={color} />
    );
};
export default ShareForwardLine;