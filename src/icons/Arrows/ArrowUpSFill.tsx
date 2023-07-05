import React from "react";
import Icon from "../../Icon";

type IconProps = {
    size?: number | undefined,
    color?: string | undefined,
    icon: string
}
const ArrowUpSFill = ({size = 20, color='black'}: IconProps) => {

    return (
        <Icon icon={'arrow-up-s-fill'} size={size} color={color} />
    );
};
export default ArrowUpSFill;