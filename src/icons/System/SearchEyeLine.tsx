import React from "react";
import Icon from "../../Icon";

type IconProps = {
    size?: number | undefined,
    color?: string | undefined,
    icon: string
}
const SearchEyeLine = ({size = 20, color='black'}: IconProps) => {

    return (
        <Icon icon={'search-eye-line'} size={size} color={color} />
    );
};
export default SearchEyeLine;