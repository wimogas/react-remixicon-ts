import React from "react";
import Icon from "../../Icon";

type IconProps = {
    size?: number | undefined,
    color?: string | undefined,
    icon: string
}
const RobotLine = ({size = 20, color='black'}: IconProps) => {

    return (
        <Icon icon={'robot-line'} size={size} color={color} />
    );
};
export default RobotLine;