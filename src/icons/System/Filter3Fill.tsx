import React from "react";
import Icon from "../../Icon";

type IconProps = {
    size?: number | undefined,
    color?: string | undefined,
    icon: string
}
const Filter3Fill = ({size = 20, color='black'}: IconProps) => {

    return (
        <Icon icon={'filter-3-fill'} size={size} color={color} />
    );
};
export default Filter3Fill;