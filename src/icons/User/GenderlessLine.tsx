import React from "react";
import Icon from "../../Icon";

type IconProps = {
    size?: number | undefined,
    color?: string | undefined,
    icon: string
}
const GenderlessLine = ({size = 20, color='black'}: IconProps) => {

    return (
        <Icon icon={'genderless-line'} size={size} color={color} />
    );
};
export default GenderlessLine;