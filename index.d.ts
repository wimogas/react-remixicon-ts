declare type IconProps = {
    size?: number | undefined,
    color?: string | undefined,
    icon: string
}

declare const Icon : React.FC<IconProps>
declare const AdminFill : React.FC<IconProps>

declare module 'react-remixicon-ts' {
}
