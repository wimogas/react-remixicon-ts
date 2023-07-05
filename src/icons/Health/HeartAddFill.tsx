import React from "react";
import Icon from "../../Icon";

type IconProps = {
    size?: number | undefined,
    color?: string | undefined,
    icon: string
}
const HeartAddFill = ({size = 20, color='black'}: IconProps) => {

    return (
        <Icon icon={'heart-add-fill'} size={size} color={color} />
    );
};
export default HeartAddFill;