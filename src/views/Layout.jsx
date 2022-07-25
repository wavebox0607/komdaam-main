import React, { useState } from 'react';
import Footer from './components/common/Footer';
import Header from './components/common/Header';
import LeftSide from './components/common/LeftSide';
import Main from './components/common/Main';
import RightSide from './components/common/RightSide';

const Layout = () => {
    const [left, setLeft] = useState(true)
    const [right, setRight] = useState(false)
    console.log(left, right);
    return (
        <>
            <header className=''>
                <Header
                    left={left}
                    setLeft={setLeft}
                    right={right}
                    setRight={setRight}
                />
            </header>
            <div className="flex items-start mt-[60px]">
                <div className={`${left ? "w-[200px]" : "w-[60px]"} h-auto  relative transition-all duration-300 ease-linear`}>
                    <LeftSide left={left} />
                </div>
                <div className={`${(left && right) ? "w-[calc(100%-410px)]" : (left && !right) ? "w-[calc(100%-210px)]" : (!left && right) ? "w-[calc(100%-270px)]" : "w-[calc(100%-80px)]"} transition-all duration-300 ease-linear`}>
                    <main className=''>
                        <Main />
                    </main>
                    <footer className=''>
                        <Footer />
                    </footer>
                </div>
                <div className={`${right ? "w-[200px] visible" : "w-[0px] invisible"} h-auto  relative transition-all duration-300 ease-linear`}>
                    <RightSide right={right} />
                </div>
            </div>
        </>
    );
};

export default Layout;