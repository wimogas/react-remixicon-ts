import React from "react";
import Icon from "../../Icon";

type IconProps = {
    size?: number | undefined,
    color?: string | undefined,
    icon: string
}
const Loader5Fill = ({size = 20, color='black'}: IconProps) => {

    return (
        <Icon icon={'loader-5-fill'} size={size} color={color} />
    );
};
export default Loader5Fill;