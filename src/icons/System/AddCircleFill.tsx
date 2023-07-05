import React from "react";
import Icon from "../../Icon";

type IconProps = {
    size?: number | undefined,
    color?: string | undefined,
    icon: string
}
const AddCircleFill = ({size = 20, color='black'}: IconProps) => {

    return (
        <Icon icon={'add-circle-fill'} size={size} color={color} />
    );
};
export default AddCircleFill;