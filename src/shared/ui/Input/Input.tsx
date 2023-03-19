import React, { InputHTMLAttributes } from 'react';
import cls from './Input.module.scss';

type HTMLInputProps = Omit<InputHTMLAttributes<HTMLInputElement>, 'value' | 'onChange'>

interface IInputProps extends HTMLInputProps {
    value?: string
    onChange: (value: string) => void,
}
export const Input = ({
    value, onChange, placeholder, type = 'text',
}: IInputProps) => {
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        onChange?.(e.target.value);
    };

    return (
        <input
            className={cls.SearchBar}
            value={value}
            onChange={handleChange}
            placeholder={placeholder}
            type={type}
        />
    );
};
