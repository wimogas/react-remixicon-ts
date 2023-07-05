import React from "react";
import Icon from "../../Icon";

type IconProps = {
    size?: number | undefined,
    color?: string | undefined,
    icon: string
}
const EmotionNormalLine = ({size = 20, color='black'}: IconProps) => {

    return (
        <Icon icon={'emotion-normal-line'} size={size} color={color} />
    );
};
export default EmotionNormalLine;