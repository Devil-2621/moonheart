import { socialLinks } from '@/app/constants/constants';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react'

type socialProps = {
    index: string;
    label: string;
    href: string;
    icon: string;
    alt: string;
}

const SocialLinks = () => {
  return (
    <div className='flex flex-col max-md:flex-row justify-center items-start'>
        {socialLinks.map((props: socialProps) => (
        <li key={props.index} className='list-none flex justify-center items-center'>
        <Image src={props.icon} alt={props.alt} width={20} height={20} />
        <Link
          href={props.href}
          className="text-xl hover:text-gray-400 mx-4 my-1"
        >
          <span className='text-lg text-gray-400 hover:text-emerald-500'>{props.label}</span>
        </Link>
        </li>
      ))}
    </div>
  )
}

export default SocialLinks