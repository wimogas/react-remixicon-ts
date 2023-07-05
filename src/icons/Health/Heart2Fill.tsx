import React from "react";
import Icon from "../../Icon";

type IconProps = {
    size?: number | undefined,
    color?: string | undefined,
    icon: string
}
const Heart2Fill = ({size = 20, color='black'}: IconProps) => {

    return (
        <Icon icon={'heart-2-fill'} size={size} color={color} />
    );
};
export default Heart2Fill;