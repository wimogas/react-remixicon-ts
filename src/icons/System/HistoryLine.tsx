import React from "react";
import Icon from "../../Icon";

type IconProps = {
    size?: number | undefined,
    color?: string | undefined,
    icon: string
}
const HistoryLine = ({size = 20, color='black'}: IconProps) => {

    return (
        <Icon icon={'history-line'} size={size} color={color} />
    );
};
export default HistoryLine;