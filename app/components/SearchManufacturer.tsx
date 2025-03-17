"use client";


import { useState,Fragment } from 'react';
import Image from 'next/image';
import{Combobox,Transition } from '@headlessui/react'
import { SearchManufacturerPops } from './types'
import { manufacturers } from '@/constants';
const SearchManufacturer = ({manufacturer,setManufacturer}:SearchManufacturerPops) => {
    const[query,setquery] = useState('');
    

    const filteredManufacturers = query === ""?
    manufacturers : manufacturers.filter((item) =>(
        item.toLowerCase()
        .replace(/\s+/g,"")
            .includes(query.toLowerCase().replace(/\s+/g,"") 
    )))
  return (
    <div className="search-manufacturer">
        <Combobox>
            <div className="relative w-full">
           <Combobox.Button className="absolute top-1/2 left-4 transform -translate-y-1/2">
            <img src="/car-logo.png"
            width={20}
            height={20}
            className="ml-4"
            alt="car-logo"/>
           </Combobox.Button>
           <Combobox.Input className="w-full pl-12 pr-4 py-2 bg-gray-100 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
           placeholder="Volkswagen"
           displayValue={(manufacturer:string) => 
            manufacturer}
            onChange={(e) => setquery(e.target.value)}
           />
           <Transition
            as={Fragment}
            leave="transition ease-in duration-100"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
            afterLeave={() =>setquery('')}>
                <Combobox.Options>
                {filteredManufacturers.length === 0 &&
                query !== "" ? (
                    <Combobox.Option
                    value={query}
                    className="search-manufacturer__option">
                    Create "{query}"
                   </Combobox.Option>
                ):(
                    filteredManufacturers.map((item) =>(
                        <Combobox.Option
                        key={item}
                        className={({active}) =>`
                            relative search-manufacturer__option
                        ${active ?'bg-primary-blue text-while' : 'text-gray-900'}
                    `}
                    value={item}
                        >
                            {item}
                    
                        </Combobox.Option>
                    )
                ))}
                </Combobox.Options>
           </Transition>

            </div>
        </Combobox>
      
    </div>
  )
}

export default SearchManufacturer
