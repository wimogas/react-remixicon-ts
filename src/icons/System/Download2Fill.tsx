import React from "react";
import Icon from "../../Icon";

type IconProps = {
    size?: number | undefined,
    color?: string | undefined,
    icon: string
}
const Download2Fill = ({size = 20, color='black'}: IconProps) => {

    return (
        <Icon icon={'download-2-fill'} size={size} color={color} />
    );
};
export default Download2Fill;