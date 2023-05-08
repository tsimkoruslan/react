import React, {FC} from 'react';
import Cars from "../components/Cars";
import CarForm from "../components/CarForm";

const CarPage: FC = () => {
    return (
        <div>
            <CarForm/>
            <Cars/>
        </div>
    );
};

export {CarPage};