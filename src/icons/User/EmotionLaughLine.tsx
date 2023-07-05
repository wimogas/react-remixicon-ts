import React from "react";
import Icon from "../../Icon";

type IconProps = {
    size?: number | undefined,
    color?: string | undefined,
    icon: string
}
const EmotionLaughLine = ({size = 20, color='black'}: IconProps) => {

    return (
        <Icon icon={'emotion-laugh-line'} size={size} color={color} />
    );
};
export default EmotionLaughLine;