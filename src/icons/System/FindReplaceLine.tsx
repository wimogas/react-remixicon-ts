import React from "react";
import Icon from "../../Icon";

type IconProps = {
    size?: number | undefined,
    color?: string | undefined,
    icon: string
}
const FindReplaceLine = ({size = 20, color='black'}: IconProps) => {

    return (
        <Icon icon={'find-replace-line'} size={size} color={color} />
    );
};
export default FindReplaceLine;