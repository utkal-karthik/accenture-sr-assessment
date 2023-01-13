import Card from '@/components/Card';
import { useRouter } from 'next/router';
import React from 'react';
import { useSelector } from 'react-redux';

function index() {


  let data = useSelector(state => state.products)
  let router = useRouter()

  React.useEffect(() => {
    let user =  localStorage.getItem('email')
    if(!user) {
      router.push('/login')
    }
  },[])


  return (
    <>
      <div className="md:container px-8 py-4 mx-auto my-10 ">
        <div className=' flex grid grid-cols-3 gap-7'>
          {
            data.data.map((item) => (
              <div className='grow-[1]'>
                <Card item={item} />
              </div>
            ))
          }
        </div>
      </div>
    </>
  )
}

export default index;