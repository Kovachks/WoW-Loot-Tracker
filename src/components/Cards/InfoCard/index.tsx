import React from 'react';
import { ReactChildren } from '../../../../types/reactTypes';

const InfoCard: React.FC<ReactChildren> = ({ children }) => {
    const childrenArray = React.Children.toArray(children)

    return (
        <div className="mx-auto w-fit mt-16">
            {...childrenArray}
        </div>
    )
};

export default InfoCard;