import React from 'react';
import { TbCurrencyTaka } from 'react-icons/tb'
const Taka = ({ tk, className, size }) => {

    return (
        <h3 className={className} style={{ display: 'flex', alignItems: 'center' }}>
            <TbCurrencyTaka size={size} />{parseFloat(tk).toFixed(2)}
        </h3>
    );
};

export default Taka;