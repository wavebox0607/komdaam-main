import React, { useState } from 'react';
import Footer from './components/common/Footer';
import Header from './components/common/Header';
import LeftSide from './components/common/LeftSide';
import Main from './components/common/Main';
import RightSide from './components/common/RightSide';

const Layout = () => {
    const [left, setLeft] = useState(true)
    const [right, setRight] = useState(false)
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
            <div className="flex mt-[100px]">
                <div className={`${left ? "w-[200px]" : "w-[60px]"} h-auto overflow-hidden relative transition-all duration-300 ease-linear`}>
                    <LeftSide left={left} />
                </div>
                <div className='flex-1 ' style={{zIndex:100}}>
                    <main className='w-full'>
                        <Main />
                    </main>
                    <footer className='w-full'>
                        <Footer />
                    </footer>
                </div>
                <div className={`${right ? "w-[200px] visible" : "w-[0px] invisible"} h-auto overflow-hidden relative transition-all duration-300 ease-linear`}>
                    <RightSide right={right} />
                </div>
            </div>
        </>
    );
};

export default Layout;