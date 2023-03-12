import React, { FC } from 'react';
import './MyFlex.css'

export interface MyFlexx {
    children: React.ReactNode
}
const MyFlex: FC<MyFlexx> = ({
    children,
    ...props
}) => {

    return (
        <div {...props} className='flex' >
            {children}
        </div>
    );
};

export default MyFlex;
