import React from "react";
import Icon from "../../Icon";

type IconProps = {
    size?: number | undefined,
    color?: string | undefined,
    icon: string
}
const FilterOffFill = ({size = 20, color='black'}: IconProps) => {

    return (
        <Icon icon={'filter-off-fill'} size={size} color={color} />
    );
};
export default FilterOffFill;