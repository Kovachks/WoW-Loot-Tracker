import React from 'react';
import { ReactChildren } from "../../../types/reactTypes";
import Header from "../Header";

const UnauthenticatedWrapper: React.FC<ReactChildren> = ({children}) => {
    const childrenArray = React.Children.toArray(children);

    return (
        <div>
            <Header />
            {...childrenArray}
        </div>
    )
}

export default UnauthenticatedWrapper