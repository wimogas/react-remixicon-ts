import React from "react";
import Icon from "../../Icon";

type IconProps = {
    size?: number | undefined,
    color?: string | undefined,
    icon: string
}
const ListSettingsFill = ({size = 20, color='black'}: IconProps) => {

    return (
        <Icon icon={'list-settings-fill'} size={size} color={color} />
    );
};
export default ListSettingsFill;