import React from "react";
import Icon from "../../Icon";

type IconProps = {
    size?: number | undefined,
    color?: string | undefined,
    icon: string
}
const LoopLeftLine = ({size = 20, color='black'}: IconProps) => {

    return (
        <Icon icon={'loop-left-line'} size={size} color={color} />
    );
};
export default LoopLeftLine;