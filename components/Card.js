import Link from 'next/link'
import React from 'react'
import Image from 'next/image'


function Card({item}) {


  return (
    <Link href={`/productDetail/${item.id}`}>
        <div class="max-w-sm rounded overflow-hidden shadow-lg">
          <Image width={100} height={100}  src={item.image} alt="Sunset in the mountains" />
          <div class="px-6 py-4">
            <div class="font-bold text-xl mb-2">{item.title}</div>
          </div>
          <div class="px-6 pt-4 pb-2">
            <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#{item.category}</span>
          </div>
        </div>
    </Link>
  )
}

export default Card