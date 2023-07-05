import React from "react";
import Icon from "../../Icon";

type IconProps = {
    size?: number | undefined,
    color?: string | undefined,
    icon: string
}
const SpamLine = ({size = 20, color='black'}: IconProps) => {

    return (
        <Icon icon={'spam-line'} size={size} color={color} />
    );
};
export default SpamLine;