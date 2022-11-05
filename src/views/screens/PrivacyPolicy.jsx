import React from 'react'
import { bangla } from '../../constant/language'

const PrivacyPolicy = () => {
    return (
        <div className='mt-0 sm:mt-16 sm:py-8 px-4 sm:px-10'>
          { bangla ?  <h1 className='sm:text-xl text-lg font-bold mb-5'>গোপনীয়তা নীতিমালা:</h1>:  <h1 className='sm:text-xl text-lg font-bold mb-5'>Privacy Policy :</h1> }
          {bangla ?  <p className='text-sm sm:text-base'>যখন আপনি আমাদের ওয়েবসাইটটি ব্যবহার করেন তখন আমরা আপনার ব্যক্তিগত তথ্য সংগ্রহ এবং সংরক্ষণ করি যা আপনার দ্বারা বিভিন্ন সময়ে সরবরাহ করা হয়। যার প্রাথমিক লক্ষ্য আপনাকে একটি নিরাপদ,দক্ষ, এবং বিশেষায়িত অভিজ্ঞতা প্রদান করা এবং  এটি আমাদেরকে আপনার কাংখিত সেবা সমূহ এবং বৈশিষ্ট্য সরবরাহ করতে সহায়তা করে যা আপনার সম্ভাব্য প্রয়োজনগুলো পূরণ করে এবং আমাদের  ওয়েবসাইটকে আপনার অভিজ্ঞতাকে নিরাপদ ও সহজতর করার জন্য বিশেষায়িত করতে দেয় এবং আরো গুরুত্বপূর্ন ব্যাপার হলো এটা করার জন্যই আমরা আপনার ব্যাক্তিগত তথ্য সগ্রহ ও সংরক্ষন করি।
            </p>:  <p className='text-sm sm:text-base'>When you use our website we collect and store your personal information which is provided by you at various times. The primary goal of which is to provide you with a safe, efficient, and personalized experience and it helps us to provide you with desired services and features that meet your potential needs and allows us to customize our website to make your experience safe and convenient and more importantly. This is why we collect and store your personal information.
            </p> }
           {
            bangla?  <h2 className='font-semibold my-4 text-sm sm:text-base'>নীচে আমরা যেভাবে  আপনার তথ্য সংগ্রহ এবং সঞ্চয় করি তার কিছু উপায় দেয়া আছে:</h2>:  <h2 className='font-semibold my-4 text-sm sm:text-base'>Below are some of the ways we collect and store your information::</h2>
           }

           {
            bangla?<>
                  <li className='text-sm sm:text-base'>
                আমাদের ওয়েবসাইটে আপনার বা কোন মাধ্যমে প্রদানকৃত যেসকল তথ্য আমরা সংগ্রহ ও সংরক্ষণ করি তা বিভিন্ন প্রয়জনে ব্যাবহার  করা হয় যেমন আপনার অনুরোধে সাড়া প্রদান, আপনার ভবিষ্যৎ কেনাকাটাকে কাস্টমাইজ করা,আমাদের পণ্য সম্ভারকে এবং আপনার সাথে আমাদের যোগাযোগকে উন্নত করা।
            </li><br/>
            <li className='text-sm sm:text-base'>
                আপনি যখনি আমাদের সাথে যোগাযোগ করেন তখনি আমরা কিছু নির্দিষ্ট তথ্য অর্জন করতে সক্ষম হই যেমন , উদাহরণস্বরূপ,অন্যান্য ওয়েবসাইটের মতো আমরা “কুকি” ব্যাবহার করি এবং যখন আপনার ওয়েব ব্রাউজার  কমদাম  ডট কম এর ওয়েবসাইটে বা এর মাধ্যমে  বা কমদাম ডটকম এর পক্ষে প্রদানকৃত অন্য কোন ওয়েবসাইটের বিজ্ঞাপনে প্রবেশ করে তখন আমরা কিছু নির্দিষ্ট তথ্য অর্জন করি।
            </li><br/>
            <li className='text-sm sm:text-base'>
                ইমেইল সমূহকে আরো ব্যাবহারযোগ্য এবং আগ্রহময় করে তোলার জন্য; আমরা প্রায়শইঃ কিছু নিশ্চয়তামূলক  তথ্য অর্জন করি যখন আপনি আপনার এমন কোন কম্পিউটারে কমদাম ডটকম থেকে পাঠানো  ইমেইল খোলেন  যেটা এই ধরনের সক্ষমতা সম্পন্ন।
            </li><br/>
            </> : <>
            <li className='text-sm sm:text-base'>
            The information we collect and store from you on or through our website is used for a variety of purposes, such as responding to your requests, customizing your future purchases, improving our product offerings, and our communications with you.
            </li><br/>
            <li className='text-sm sm:text-base'>
            We are able to obtain certain information when you interact with us, for example, like other websites we use "cookies" and when your web browser is on or through the Comdam.com website or any other website provided on behalf of Comdam.com. We collect certain information when entering advertisements.
            </li><br/>
            <li className='text-sm sm:text-base'>
            To make emails more usable and interesting; We often: Obtain certain authentication information when you open an email sent from Kamdam.com on a computer that has such capabilities.
            </li><br/>
            
            </>
           }

      {
        bangla ?  <h2 className='font-semibold my-4 text-sm sm:text-base'>
        গ্রাহক সম্পর্কিত তথ্য আমাদের ব্যবসায়ের একটি গুরুত্বপুর্ন  অংশ এবং আমরা এটি অন্যান্যদের কাছে বিক্রয়ের মাধ্যমে ব্যাবসা করি না।
    </h2>:  <h2 className='font-semibold my-4 text-sm sm:text-base'>
    Customer information is an important part of our business and we do not sell it to others.
            </h2>
      }

          

       {
        bangla ? <>      <p className='my-4 text-sm sm:text-base'>
        আমরা অ্যাকাউন্ট এবং অন্যান্য ব্যক্তিগত তথ্য প্রকাশ করি তখন যখন আমরা বিশ্বাস করি  তথ্য প্রকাশটি আইন অনুযায়ী  যথাযথ ; অথবা আমাদের(ওয়েবসাইট) ব্যবহারের শর্তাবলী প্রযোজ্য হয় অথবা  অন্যান্য চুক্তির প্রয়োগ, অধিকার রক্ষা, কমদাম ডটকম  এর বা এর সম্পত্তি বা এর ব্যাবহারকারী বা অন্যান্যদের নিরাপত্তায় প্রযোজ্য হয়।
    </p>

    <p className='my-4 text-sm sm:text-base'>
        জালিয়াতি সুরক্ষার জন্য এর মধ্যে অন্তর্ভুক্ত রয়েছে  অন্যান্য কোম্পানি এবং প্রতিষ্ঠানের সঙ্গে তথ্য বিনিময়।
    </p> </> :<>          <p className='my-4 text-sm sm:text-base'>
    We disclose account and other personal information when we believe disclosure is appropriate by law; or apply to our (Website) Terms of Use or enforce other agreements, protect the rights, protect the safety of Kamdam.com or its property or its users or others.
            </p>

            <p className='my-4 text-sm sm:text-base'>
            This includes exchanging information with other companies and organizations for fraud protection.
            </p></>
       }
        </div>
    )
}

export default PrivacyPolicy