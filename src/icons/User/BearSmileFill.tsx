import React from "react";
import Icon from "../../Icon";

type IconProps = {
    size?: number | undefined,
    color?: string | undefined,
    icon: string
}
const BearSmileFill = ({size = 20, color='black'}: IconProps) => {

    return (
        <Icon icon={'bear-smile-fill'} size={size} color={color} />
    );
};
export default BearSmileFill;