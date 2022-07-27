import React from 'react';
import { TbCurrencyTaka } from 'react-icons/tb'
const Taka = ({ tk, additional, className, size }) => {

    return (
        <h3 className={className} style={{ display: 'flex', alignItems: 'center' }}>
            <TbCurrencyTaka size={size} />{parseFloat(additional ? parseInt(tk) + parseInt(additional) : parseInt(tk)).toFixed(2)}
        </h3>
    );

};

export default Taka;