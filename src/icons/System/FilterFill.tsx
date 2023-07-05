import React from "react";
import Icon from "../../Icon";

type IconProps = {
    size?: number | undefined,
    color?: string | undefined,
    icon: string
}
const FilterFill = ({size = 20, color='black'}: IconProps) => {

    return (
        <Icon icon={'filter-fill'} size={size} color={color} />
    );
};
export default FilterFill;