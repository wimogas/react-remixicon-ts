import React from "react";
import Icon from "../../Icon";

type IconProps = {
    size?: number | undefined,
    color?: string | undefined,
    icon: string
}
const SearchLine = ({size = 20, color='black'}: IconProps) => {

    return (
        <Icon icon={'search-line'} size={size} color={color} />
    );
};
export default SearchLine;