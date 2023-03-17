import React, { FC } from 'react';
import cls from './Paginator.module.scss';
import { usePagination } from './lib/hooks/usePagination';

interface IPaginatorProps {
    onPageChange: (page: number) => void,
    totalCount: number
    siblingCount?: number
    currentPage: number
    pageSize: number
}

export const Paginator: FC<IPaginatorProps> = ({
    onPageChange,
    totalCount,
    siblingCount = 1,
    currentPage,
    pageSize,
}) => {
    const paginationRange = usePagination({
        currentPage,
        totalCount,
        siblingCount,
        pageSize,
    });

    if (currentPage === 0 || paginationRange.length < 2) {
        return null;
    }

    const onNext = () => {
        onPageChange(currentPage + 1);
    };

    const onPrevious = () => {
        onPageChange(currentPage - 1);
    };

    const lastPage = paginationRange[paginationRange.length - 1];

    return (
        <ul
            className={cls.Paginator}
        >
            <li>
                <button
                    className={`${cls.item} ${cls.btn} ${currentPage === 1 && cls.disabled}`}
                    disabled={currentPage === 1}
                    onClick={onPrevious}
                >
                    prev
                </button>
            </li>
            {
                paginationRange
                    .map((page) => {
                        if (typeof page === 'string') {
                            return <li className={`${cls.item} ${cls.dots}`}>&#8230;</li>;
                        }

                        return (
                            <li>
                                <button
                                    className={`${cls.item} ${page === currentPage && cls.selected}`}
                                >
                                    {page}
                                </button>
                            </li>
                        );
                    })
            }
            <li>
                <button
                    className={`${cls.item} ${cls.btn} ${currentPage === lastPage && cls.disabled}`}
                    disabled={currentPage === lastPage}
                    onClick={onNext}
                >
                    next
                </button>
            </li>
        </ul>
    );
};
