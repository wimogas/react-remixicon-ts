import React from "react";
import Icon from "../../Icon";

type IconProps = {
    size?: number | undefined,
    color?: string | undefined,
    icon: string
}
const Search2Line = ({size = 20, color='black'}: IconProps) => {

    return (
        <Icon icon={'search-2-line'} size={size} color={color} />
    );
};
export default Search2Line;