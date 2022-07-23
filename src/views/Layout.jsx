import React, { useState } from 'react';
import Footer from './components/common/Footer';
import Header from './components/common/Header';
import Main from './components/common/Main';

const Layout = () => {
    const [left, setLeft] = useState(true)
    const [right, setRight] = useState(false)
    return (
        <>
            <header>
                <Header
                    left={left}
                    setLeft={setLeft}
                    right={right}
                    setRight={setRight}
                />
            </header>
            <div className="flex">
                <div className={`${left ? "w-[200px]" : "w-[100px]"} bg-black`}></div>
                <div className='flex-1'>
                    <main>
                        <Main />
                    </main>
                    <footer>
                        <Footer />
                    </footer>
                </div>
                <div className={`${right ? "w-[200px]" : null} bg-black`}></div>
            </div>
        </>
    );
};

export default Layout;