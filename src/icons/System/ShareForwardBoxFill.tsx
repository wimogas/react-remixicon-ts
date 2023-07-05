import React from "react";
import Icon from "../../Icon";

type IconProps = {
    size?: number | undefined,
    color?: string | undefined,
    icon: string
}
const ShareForwardBoxFill = ({size = 20, color='black'}: IconProps) => {

    return (
        <Icon icon={'share-forward-box-fill'} size={size} color={color} />
    );
};
export default ShareForwardBoxFill;