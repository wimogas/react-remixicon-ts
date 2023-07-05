import React from "react";
import Icon from "../../Icon";

type IconProps = {
    size?: number | undefined,
    color?: string | undefined,
    icon: string
}
const EmotionLine = ({size = 20, color='black'}: IconProps) => {

    return (
        <Icon icon={'emotion-line'} size={size} color={color} />
    );
};
export default EmotionLine;