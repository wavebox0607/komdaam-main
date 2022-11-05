import React from 'react';
import { bangla } from './../../constant/language';

const About = () => {
    return (
        <div className='mt-0 sm:mt-16 sm:py-8 px-10'>
            { bangla ?<h1 className='text-xl font-bold mb-5'>আমাদের সম্পর্কে</h1> :<h1 className='text-xl font-bold mb-5'>About</h1>}

            {bangla ? <>  <p className='mb-4 text-justify'>
            হ্যালো! আপনি কি আপনার নিত্যপ্রয়োজনীয় জিনিসপত্র কিনতে সমস্যার সম্মুখীন হচ্ছেন? আপনার ব্যস্ত সময়সূচীর জন্য মুদি দোকানে যেতে পারেন না? চিন্তা করবেন না স্যার/ম্যাডাম। Komdaam.com এর আশ্চর্যজনক গ্রাহকবান্ধব পরিষেবার মাধ্যমে আপনার সমস্ত চাহিদা মেটাতে এখানে আপনার জন্য।
            </p>
            {/* <h2 className='font-semibold my-4'>নীদে আমরা সযিাদব আ঩নার তথয ঴ংগ্র঵ এবং ঴ঞ্চ়ে কনর তার নকছুউ঩া়ে সদ়ো আদছ:</h2> */}
            <p className='mb-4 text-justify'>
            Komdaam.com হল ঢাকা শহরের ক্রমবর্ধমান অনলাইন মুদি দোকান যা ব্যক্তি, পরিবার এবং কর্পোরেট গ্রাহকদের কাছে সবচেয়ে সহজ উপায়ে সেরা মানের পণ্য সরবরাহ করতে প্রতিশ্রুতিবদ্ধ। আমরা যেকোন পরিস্থিতিতে আপনার প্রয়োজনীয় জিনিসগুলি আপনার দোরগোড়ায় আনতে সর্বদা প্রস্তুত। আপনি সব ধরনের রান্না, পানীয়, রুটি ও বেকারি, স্ন্যাকস, দুধ ও দুগ্ধজাত খাবার, সৌন্দর্য ও শরীরের যত্ন, শিশুর যত্ন, স্বাস্থ্য পরিচর্যা, বাড়ি ও পরিচ্ছন্নতা, স্টেশনারি, মাংস ও মাছ, ফল ও শাকসবজি, বাড়ির ও রান্নাঘরের যন্ত্রপাতি পণ্য কিনতে পারেন Komdaam.com থেকে। আমরা সারা বছর ধরে আমাদের গ্রাহকদের লাভজনক ডিসকাউন্ট এবং অফার দিতে নিবেদিত। কর্পোরেট গ্রাহকরা আমাদের কাছ থেকে বিশেষ অফার উপভোগ করার জন্য অত্যন্ত স্বাগত জানাই।
            </p></> :<>  <p className='mb-4 text-justify'>
                Hi! This is komdaam!!!! Are you facing problems to purchase your daily necessities? Can’t go to the grocery shops for your busy schedule? Don’t worry Sir/Madam. Komdaam.com is here for you to meet your all needs through its amazing customer friendly services.
            </p>
            {/* <h2 className='font-semibold my-4'>নীদে আমরা সযিাদব আ঩নার তথয ঴ংগ্র঵ এবং ঴ঞ্চ়ে কনর তার নকছুউ঩া়ে সদ়ো আদছ:</h2> */}
            <p className='mb-4 text-justify'>
                Komdaam.com is the booming online grocery shop in Dhaka city which is committed to deliver best quality products to the individuals, families as well as the corporate customers in the easiest way. We are always ready to bring your necessities at your doorstep in any situations. You can buy all kinds of cooking, beverage, bread & bakery, snacks, milk & dairy, beauty & body care, baby care, health care, home & cleaning, stationeries, meat & fish, fruits & vegetables, home & kitchen appliance products from Jogaan.com. We are devoted to give lucrative discounts & offers to our customers throughout the year. Corporate customers are highly welcomed to enjoy special offers from us.
            </p></> } 
          
            
        </div>
    );
};

export default About;