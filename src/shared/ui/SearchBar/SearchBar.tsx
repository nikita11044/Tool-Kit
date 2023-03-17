import React from 'react';
import cls from './SearchBar.module.scss';

export const SearchBar = () => (
    <input className={cls.SearchBar} type="text" placeholder="Find your dream repo..." />
);
