import React from "react";
import Icon from "../../Icon";

type IconProps = {
    size?: number | undefined,
    color?: string | undefined,
    icon: string
}
const UserVoiceFill = ({size = 20, color='black'}: IconProps) => {

    return (
        <Icon icon={'user-voice-fill'} size={size} color={color} />
    );
};
export default UserVoiceFill;