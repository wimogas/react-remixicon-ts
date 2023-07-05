import React from "react";
import Icon from "../../Icon";

type IconProps = {
    size?: number | undefined,
    color?: string | undefined,
    icon: string
}
const ExternalLinkLine = ({size = 20, color='black'}: IconProps) => {

    return (
        <Icon icon={'external-link-line'} size={size} color={color} />
    );
};
export default ExternalLinkLine;