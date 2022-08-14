import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import CartPopUp from './components/common/CartPopUp';
import Footer from './components/common/Footer';
import Header from './components/common/Header';
import LeftSide from './components/common/LeftSide';
import Main from './components/common/Main';
import RightSide from './components/common/RightSide';
import MobileBottomNav from './components/mobile/MobileBottomNav';
import { Left, Right } from './components/overly';

const Layout = () => {
    const [left, setLeft] = useState(true)
    const [category, setCategory] = useState(false)
    const [cart, setCart] = useState(false)
    const right = useSelector((state) => state.cart.cartOpen)

    
    useEffect(() => {
        if (window.screen.width < 768) {
            setLeft(false)
        }
        console.log('hlww')
        
    }, [])



  
    return (
        <>
            <header className=''>
                <Header
                    left={left}
                    setLeft={setLeft}
                />
            </header>
            <div className="flex items-start mt-[60px]">
                <div className={`${left ? "w-[240px]" : "w-[60px]"} h-auto hidden lg:block  relative transition-all duration-300 ease-linear`}>
                    <LeftSide left={left} />
                </div>
                <div className={`${(left && right) ? "w-full 2md:w-[calc(100%-580px)]" : (left && !right) ? "w-full 2md:w-[calc(100%-240px)]" : (!left && right) ? "w-full 2md:w-[calc(100%-400px)]" : "w-full 2md:w-[calc(100%-80px)]"} transition-all duration-300 ease-linear`}>
                    <main className=''>
                        <Main />
                    </main>
                    <footer className=''>
                        <Footer />
                    </footer>
                </div>
                <div className={`${right ? "w-[200px] visible" : "w-[0px] invisible"} h-auto hidden lg:block  relative transition-all duration-100 ease-linear`}>
                    <RightSide right={right} />
                </div>
            </div>
            <CartPopUp right={right} />
            <MobileBottomNav setCategory={setCategory} category={category} setCart={setCart} cart={cart} />
            <Left setOpen={setCategory} open={category} />
            <Right setOpen={setCart} open={cart} />
        </>
    );
};

export default Layout;