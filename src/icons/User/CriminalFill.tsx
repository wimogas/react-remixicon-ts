import React from "react";
import Icon from "../../Icon";

type IconProps = {
    size?: number | undefined,
    color?: string | undefined,
    icon: string
}
const CriminalFill = ({size = 20, color='black'}: IconProps) => {

    return (
        <Icon icon={'criminal-fill'} size={size} color={color} />
    );
};
export default CriminalFill;