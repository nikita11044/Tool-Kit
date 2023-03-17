import {
    ButtonHTMLAttributes, FC, SVGProps,
} from 'react';
import cls from './SvgIconBtn.module.scss';

interface IIconBtnProps extends ButtonHTMLAttributes<HTMLButtonElement>{
    width?: number
    height?: number
    Icon: FC<SVGProps<any>>
}

export const SvgIconBtn: FC<IIconBtnProps> = ({
    width = 30,
    height = 30,
    onClick,
    Icon,
}: IIconBtnProps) => (
    <button className={cls.SvgIconBtn} onClick={onClick}>
        <Icon width={width} height={height} />
    </button>
);
