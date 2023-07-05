import React from "react";
import Icon from "../../Icon";

type IconProps = {
    size?: number | undefined,
    color?: string | undefined,
    icon: string
}
const AddBoxLine = ({size = 20, color='black'}: IconProps) => {

    return (
        <Icon icon={'add-box-line'} size={size} color={color} />
    );
};
export default AddBoxLine;