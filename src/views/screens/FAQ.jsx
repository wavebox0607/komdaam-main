import React from 'react'
import { bangla } from '../../constant/language';

const FAQ = () => {
    return (
        <div className='mt-0 sm:mt-16 sm:py-8 sm:px-10 px-4'>
            <h1 className='sm:text-lg text-base font-bold mb-5'>{bangla ? "প্রশ্নঃ সাইট টি কিভাবে কাজ করে?" : "Q. How does the site work? "}</h1>
            <p className='text-sm sm:text-base'>
                {bangla ? "উত্তরঃ প্রথমে আমাদের সাইট www.komdaam.com এ যাবেন, সেখানে অনুসন্ধান বার এ আপনার প্রয়োজনীয় পণ্যটির নাম লিখার সাথে সাথেই পণ্যটি আপনার সামনে ভেসে উঠবে। এবার পণ্যটি খুব সহজেই আপনার শপিং  কার্টে  এ এড করতে পারবেন – আপনার প্রয়োজনীয় সকল পণ্য আপনার  কার্টে এ নেওয়া শেষ হলে আপনার ঠিকানা এবং নির্দিষ্ট ডেলিভারী সময়টি ঠিক করলেই আপনার অর্ডার টি আমাদের নিকট পৌঁছে যাবে এবং আপনি আমাদের একজন প্রতিনিধি আপনাকে ফোন করে অর্ডার এর স্বকীয়তা যাচাই করবে। এবং তারপর আপনার কাছে আমাদের ডেলিভারী প্রতিনিধি এসে আপনার বাজার টি দিয়ে যাবে।" : "Ans: You can browse the site or use our search engine to find your desired products. You can then add them to your shopping cart and click on place order. You let us know your address, select a delivery time – and voila, you are done.  A Komdaam representative will then deliver your order right to your home or office."}
                
            </p><br/>
            <h1 className='sm:text-lg text-base font-bold mb-5'>{bangla ? "প্রশ্নঃ ডেলিভারী চার্জ কত?" : "Q. How much do deliveries cost? "}</h1>
            <p className='text-sm sm:text-base'>
                {bangla ? " উত্তরঃ" : "Ans: The delivery fee across the country is in the table below:"}
               
            </p><br/>
            <h1 className='sm:text-lg text-base font-bold mb-5'>{bangla ? "প্রশ্নঃ যোগাযোগ এর উপায় কি?" : "Q. How can I contact you? "} </h1>
            <p className='text-sm sm:text-base'>
                {bangla ? "উত্তরঃ আপনি ফোন এ যোগাযোগ করতে 01865460756 01715425218 এই নাম্বার এবং মেইল করুন support@komdaam.com । info@ komdaam.com" : "A. You can always call 01865-460756 or mail us at support@komdaam.com"}
                
            </p><br/>
            <h1 className='sm:text-lg text-base font-bold mb-5'>{bangla ? "প্রশ্নঃ বাজারটি আসতে কত সময় লাগতে পারে?" : "Q. What are your delivery hours? "}</h1>
            <p className='text-sm sm:text-base'>
                {bangla ? "উত্তরঃ" : "A. We deliver from 7.30 am to 11 pm every day. You can choose from available slots to find something that is convenient to you. "}
                
            </p><br/>
            <h1 className='sm:text-lg text-base font-bold mb-5'>{bangla ? "প্রশ্নঃ বাজারটি যে পৌঁছেছে এই তথ্য কিভাবে পাব?" : "Q. How do I know when my order is here? "}</h1>
            <p className='text-sm sm:text-base'>
                {bangla ? "উত্তরঃ আমাদের কমদাম.কম প্রতিনিধি আপনাকে ফোন দিয়ে জানিয়ে দিবে ডেলিভারী এর অবস্থান সম্পর্কে।" : "A. A komdaam representative will call you as soon as they are at your house to let you know about your delivery. "}
                
            </p><br/>
            <h1 className='sm:text-lg text-base font-bold mb-5'>{bangla ? "প্রশ্নঃ মূল্য পরিশোধ উপায় কি?" : "Q. How do I pay? "}</h1>
            <p className='text-sm sm:text-base'>
                {bangla ? "উত্তরঃ আপনি ডেলিভারীর সময় পণ্য যাচাই করে মূল্য পরিশোধ করতে পারবেন। এছাড়া অনলাইনে ক্রেডিট কার্ড অথবা বিকাশের মাধ্যমেও মূল্য পরিশোধ করতে পারবেন।" : "A. We accept cash on delivery and we also have Online Credit Card and Online bKash service. Don’t worry, our komdaam representatives should always carry enough change. "}
                
            </p><br/>



            <h1 className='sm:text-lg text-base font-bold mb-5'>{bangla ? "প্রশ্নঃ আমাদের এলাকাতে কি বাজার ডেলিভারী হয়?" : "Q. Do you serve my area?  "}</h1>
            <p className='text-sm sm:text-base'>
            {bangla ? "উত্তরঃ আমরা ঢাকা শহরের সকল এলাকাতে ডেলিভারী করে থাকি, তবে ঢাকার বাহিরে কিছু এলাকা তে এখনও আমরা আমাদের সেবা পৌঁছাতে পারছি না।" : "A. We are currently serving eight big cities of Bangladesh including Dhaka. "}
                
            </p><br/>
            <h1 className='sm:text-lg text-base font-bold mb-5'>{bangla ? "প্রশ্নঃ আমি আমার প্রয়োজনীয় একটি পণ্য সাইট এ খুঁজে পাচ্ছি না, কি করবো?" : "Q. I can’t find the product I am looking for. What do I do? "}</h1>
            <p className='text-sm sm:text-base'>
            {bangla ? "উত্তরঃ আপনার কোন পণ্য যদি সাইট খুঁজে না পান, সেইখেত্রে আপনি আমাদের কে পণ্যটির তথ্যাদি দিয়ে 01865460756 01715425218  নাম্বারে কল করে জানাতে পারেন অথবা মেইল করতে পারেন support@komdaam.com /info@ komdaam.com এ। আমরা আপনার জন্য পণ্যটি স্টকে আনার চেষ্টা করব।" : "A. We are always open to new suggestions and will add an item to our inventory just for you. There is a 'Product Request' feature that you can use to inform us of your requirement. You can also call 01865-460756 or mail us at support@komdaam.com to add an item to our inventory.  "}
                
            </p><br/>
            <h1 className='sm:text-lg text-base font-bold mb-5'>{bangla ? "প্রশ্নঃ বাজারে কিছু সমস্যা দেখা দিয়েছে, কি করতে পারি?" : "Q. My order is wrong. What do I do? "}</h1>
            <p className='text-sm sm:text-base'>
            {bangla ? "উত্তরঃ যেকোনো ধরনের সমস্যার জন্য 01865460756 01715425218 এই নাম্বার। আমাদের একজন প্রতিনিধি সকল সমস্যার সমাধানে সর্বদা নিয়োজিত আছে।" : "A. Please Immediately call 01865-460756 and let us know the problem."}
                
            </p><br/>
            <h1 className='sm:text-lg text-base font-bold mb-5'>{bangla ? "প্রশ্নঃ হরতাল এ কি ডেলিভারী হয়?" : ""} </h1>
            <p className='text-sm sm:text-base'>
            {bangla ? "উত্তরঃ জ্বী, আমাদের লক্ষ্যই হল আপনাদের বাজারের সকল দুশ্চিন্তা দূর করা।" : ""}
                
            </p><br/>
            <h1 className='sm:text-lg text-base font-bold mb-5'>{bangla ? "প্রশ্নঃ পাড়ার দোকান বাদ দিয়ে আপনাদের থেকে নিব কেন?" : "Q. What if the item is out of stock? "}</h1>
            <p className='text-sm sm:text-base'>
            {bangla ? " উত্তরঃ সময় বাঁচান, আপনার অবসর সময়ের মূল্য আমরা বুঝি। সময়টি যাতে আপনি আপনার পরিবার-পরিজন এর সাথে ব্যয় করতে পারেন সেই সুযোগ করে দেওয়াই আমাদের লক্ষ্য। এছাড়া শহরের অন্যান্য সুপার স্টোর গুলোর চেয়ে আমাদের সাইটে পণ্যের দাম কম এবং আপনার বাসার পাশের মুদি দোকানের চেয়ে বেশি পণ্য আমাদের কাছ থেকে পাবেন। তাহলে কেন কষ্ট করে আর বাজার যাওয়া?" : "A. We hold our own inventory in our warehouses, so we rarely run out of stock. However, we will try our best to source what you need. If we cannot find it, we will SMS/call you and let you know what substitutes are available. "}
               
            </p><br/>
            <h1 className='sm:text-lg text-base font-bold mb-5'>{bangla ? "প্রশ্নঃ দ্রব্যমূল্য কত বেশি?" : "Q. What about the prices?  "}</h1>
            <p className='text-sm sm:text-base'>
            {bangla ? " উত্তরঃ আমাদের পন্যের দর বাজারে প্রচলিত মুল্যের এর সমান অথবা কাছাকাছি। এবং কোন ধরনের অতিরিক্ত কর মুক্ত।" : "A. Our prices are our own but we try our best to offer them to you at or below market prices. Our prices are the same as the local market and we are working hard to get them even lower! If you feel that any product is priced unfairly, please let us know. "}
               
            </p><br/>
            <h1 className='sm:text-lg text-base font-bold mb-5'>{bangla ? "প্রশ্নঃ আপনারা কিভাবে ডেলিভারী করে থাকেন?" : "Q. How do you deliver?  "}</h1>
            <p className='text-sm sm:text-base'>
                {bangla ? "উত্তরঃ আমাদের নিজস্ব বাহন রয়েছে এবং আমরা সরবারহ ব্যবস্থাপনায় স্বয়ংসম্পূর্ণ। তবে আমাদের ডেলিভারী প্রতিনিধিরা যেকোনো উপায় আপনার বাজার আপনার নিকট পৌঁছে দেওয়ার প্রশিক্ষণপ্রাপ্ত।" : "A. We use our own fleet to deliver. Our goal is to deliver the products to your place on time. "}
                
            </p><br/>






            <h1 className='sm:text-lg text-base font-bold mb-5'>{bangla ? "প্রশ্নঃ মূল্য পরিশোধ উপায় কি?" : "Q. What is your policy on refunds? "}</h1>
            <div>
            {bangla ? "উত্তরঃ আমরা সাত (৭) দিনের মধ্যে পণ্য ফেরত দেওয়ার  সুবিধা প্রদান করে থাকি যদি সেই পণ্য খোলা বা নষ্ট না হয়ে থাকে।" : "A.  We offer a refund or return policy of seven (7) days on most unopened or unsplit packaged products.  "}
                <li> {bangla ? "পচনশীল পণ্য যেমন, দুধ, ফলমূল এবং শাকসবজি এর ক্ষত্রে এক (১) দিনের মধ্যে পণ্য ফেরত দেওয়ার সুবিধা রয়েছে।": "For perishable products such as milk, fruits, and fresh vegetables, we have a one (1) day return policy. "} </li>
                <li>{bangla ? "ডায়াপারের ক্ষত্রে ১০% বা ৩ পিস্ ব্যবহার করে ফেলার পূর্বে রিফান্ডের জন্য ফেরত দিতে হবে।" : "Diaper items must be returned for refunds before 10% or 3 pieces (whichever comes first) have been used. "}</li>
                <li>{bangla ? "নির্দিষ্ট পণ্য; ফেস মাস্ক, ডিসপোজেবল গ্লাভস, অ্যালকোহল প্যাড এবং কোভিড টেস্টিং কিট খোলা বা না-খোলা কোনো ক্ষেত্রেই ফেরত যোগ্য হবে না।" : ""}</li>
                {bangla ? "পণ্য রিফান্ড না প্রদানের সর্বস্বত্ব অধিকার আমাদের আছে। যে কোনো পণ্য ফেরত দিতে সরাসরি যোগাযোগ করুন 01865460756 01715425218 নম্বরে।" : ""}
            </div><br/>
            <h1 className='sm:text-lg text-base font-bold mb-5'>{bangla ? "প্রশ্নঃ টাকায় রিফান্ড কি পাওয়া যাবে?" : "Q. Can I get a refund via cash?  "}</h1>
            <p className='text-sm sm:text-base'>
            {bangla ? "উত্তরঃ না, যেকোনো ধরনের সমস্যায় আমরা আপনার কমদাম.কম একাঊন্টটি তৎক্ষণাৎ ক্রেডিট দিয়ে আপডেট করবো।" : "A. No, for any sort of issue, we will update the credit to your komdaam.com account"}
                
            </p><br/>
            <h1 className='sm:text-lg text-base font-bold mb-5'>{bangla ? "প্রশ্নঃ আপনাদের ডিসকাউন্ট পলিসি কেমন?" : "Q. What is your discounting policy? "}</h1>
            <p className='text-sm sm:text-base'>
            {bangla ? "উত্তরঃ আমরা ঢাকার মাঝে সবচেয়ে সেরা ডিলটি দেওয়ার চেষ্টা করি এবং আমাদের পণ্যগুলোতে সর্বোচ্চ খুচরা মূল্যর উপর ছাড় দেওয়া হয়। বিশেষ বিশেষ ক্ষেত্রে আমরা ডিসকাউন্ট কোড অফার করি, যা এমআরপির উপর প্রয়োগ করতে হয়। যে কোন নির্দিষ্ট পণ্যের উপর, আমরা শুধুমাত্র এক ধরনের ছাড়ই প্রয়োগ করতে পারি। আমরা গ্রাহকদেরকে সবসময় সেরা ডিসকাউন্টই দেওয়ার চেষ্টা করে থাকি। যেমনঃ যদি একটি পণ্যের সর্বোচ্চ খুচরা মূল্য ১০০ টাকা এবং আমাদের তালিকা মূল্য ৯২ টাকা হয় – তবে পণ্যটি ইতিমধ্যে ৮% ডিসকাউন্টে বিক্রি করা হচ্ছে। এর অর্থ এই যে, কোন ব্যবহারকারীর উপর যদি ৫% ছাড়ের একটি ডিসকাউন্ট কোড প্রযোজ্য হয়, সেই ক্ষেত্রে আমরা ব্যবহারকারীকে খুচরা মূল্যর উপর সর্বোচ্চ ছাড়টিই দিয়ে থাকি।" : "A. We try to provide the best deals in Dhaka and many of our products are already discounted below the maximum retail price (MRP). We also offer discount codes under special circumstances, which are applied on the MRP. On any given product, we can only apply one type of discount. We always consider the best discount available to the customer. For example: If the MRP of a product is Tk. 100 and our list price is Tk. 92 -- the product is already sold at an 8% discount. This means that if the user applies a discount code for a 5% discount, we will still consider the best discount available to the user and sell the product at Tk. 92. "}
                
            </p><br/>
            <h1 className='sm:text-lg text-base font-bold mb-5'>{bangla ? "প্রশ্নঃ ফোন এ কি অর্ডার করা যায়?" : "Q.  Can I order over the phone? "}</h1>
            <p className='text-sm sm:text-base'>
            {bangla ? " উত্তরঃ অবশ্যই, ফোন এ অর্ডার করতে আপনি কল করতে পারেন 01865460756 01715425218 এই নাম্বারে।" : "A. Absolutely. Our hotline is 01865-460756"}
               
            </p><br/>
            <h1 className='sm:text-lg text-base font-bold mb-5'>{bangla ? "প্রশ্নঃ পন্যের গুনগত মান কেমন?" : "Q. What about quality? "}</h1>
            <p className='text-sm sm:text-base'>
            {bangla ? "উত্তরঃ আমরা আমাদের সকল পণ্য হয় সরাসরি উৎপাদনকারীদের থেকে সংগ্রহ করা হয়, অথবা অত্যন্ত বিশ্বস্ত জায়গা থেকে সংগ্রহীত হয়। তবুও যদি আমরা গ্রাহকদের সন্তুষ্ট করতে ব্যর্থ হই, তাহলে যেকোনো পণ্য ৭ দিনের মাঝে অবশ্যই ফেরতযোগ্য।" : "A. We try our best to source the best quality items for you but if you are dissatisfied, you can always send them back to the delivery person. If you forget to do that, you can call us within 3 days and we will replace the item for free. "}
                
            </p><br/>
            <h1 className='sm:text-lg text-base font-bold mb-5'>{bangla ? "প্রশ্নঃ ডেলিভারি প্রতিনিধিকে কি কোন বকশিশ দিতে হবে?" : "Q. Should I tip the delivery representative? "}</h1>
            <p className='text-sm sm:text-base'>
            {bangla ? "উত্তরঃ বকশিশ দেওয়া আবশ্যক নয়। তবে আমাদের ডেলিভারী প্রতিনিধিরা তাদের পরিশ্রমের স্বীকৃতি পেলে উৎসাহিত হয়। এবং বকশিশ এর পুরো পরিমাণটি তারাই উপভোগ করে থাকে।" : "A. Tips are not required. But our delivery team members appreciate recognition for their hard work. Delivery representatives keep the entire tip amount."}
                
            </p><br/>
           
        </div>
    )
}

export default FAQ