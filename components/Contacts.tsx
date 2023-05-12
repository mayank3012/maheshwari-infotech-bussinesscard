import React from 'react'
import { FaEnvelope, FaPhoneAlt, FaGlobe, FaWhatsapp } from "react-icons/fa";
import Link from 'next/link';

const Contacts = () => {
    const details = {
        mobile: '8126166641',
        mobile2: '9389092990',
        whatsapp: '8126166641'
    }
    return (
        <div className='mx-5 my-4'>
            <ul>
                {/* <li className='py-2'>
                    <Link
                        href='#'
                        onClick={(e: any) => {
                            window.location.href = `mailto:${details.email}`;
                            e.preventDefault();
                        }}
                        title={details.email}
                        data-te-target="tooltip"
                    >
                        <div className='flex items-center'>
                            <span className='rounded-full inline-block p-3 bg-[var(--themeColor)]'>
                                <FaEnvelope className='text-white text-xl' />
                            </span>
                            <p className='px-3 text-ellipsis w-full overflow-hidden font-semibold text-gray-700 hover:text-black'>
                                {details.email}
                            </p>
                        </div>
                    </Link>
                </li> */}
                <li className='py-2'>
                    <Link
                        href='#'
                        onClick={(e: any) => {
                            window.location.href = `tel:${details.mobile}`;
                            e.preventDefault();
                        }}
                        title={details.mobile}
                        data-te-target="tooltip"
                    >
                        <div className='flex items-center'>
                            <span className='rounded-full inline-block p-3 bg-[var(--themeColor)]'>
                                <FaPhoneAlt className='text-white text-xl' />
                            </span>
                            <p className='px-3 text-ellipsis w-full overflow-hidden font-semibold text-gray-700 hover:text-black'>
                                {details.mobile}
                            </p>
                        </div>
                    </Link>
                </li>
                <li className='py-2'>
                    <Link
                        href='#'
                        onClick={(e: any) => {
                            window.location.href = `tel:${details.mobile2}`;
                            e.preventDefault();
                        }}
                        title={details.mobile2}
                        data-te-target="tooltip"
                    >
                        <div className='flex items-center'>
                            <span className='rounded-full inline-block p-3 bg-[var(--themeColor)]'>
                                <FaPhoneAlt className='text-white text-xl' />
                            </span>
                            <p className='px-3 text-ellipsis w-full overflow-hidden font-semibold text-gray-700 hover:text-black'>
                                {details.mobile2}
                            </p>
                        </div>
                    </Link>
                </li>
                <li className='py-2'>
                    <Link
                        href={`https://wa.me/+91${details.whatsapp}`}
                        title={details.whatsapp}
                        data-te-target="tooltip"
                        target='_blank'
                    >
                        <div className='flex items-center'>
                            <span className='rounded-full inline-block p-3 bg-[var(--themeColor)]'>
                                <FaWhatsapp className='text-white text-xl' />
                            </span>
                            <p className='px-3 text-ellipsis w-full overflow-hidden font-semibold text-gray-700 hover:text-black'>
                                {details.whatsapp}
                            </p>
                        </div>
                    </Link>
                </li>
            </ul>
        </div>
    )
}

export default Contacts