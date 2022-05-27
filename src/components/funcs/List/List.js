import React from 'react';
import style from './List.module.css'

export const List = () => {

    const arr = [1,2,3,4,5]

    return (
        <>
            <ul className={style.list}>
                {arr.map(item => <li key={item.toString()}>{item}</li>)}
            </ul>
        </>
    )
}



