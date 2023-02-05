import { Polybase } from "@polybase/client"
import React, {useState, useEffect} from "react"
import { useRouter } from 'next/router'


export default function eventDetails(){ 
  const router = useRouter()
 
  useEffect(() => {
    console.log(router); // Alerts 'Someone'
  }, [router.query]);
  
    return (

      <div className="mx-auto max-w-md overflow-hidden rounded-lg bg-white shadow">
  <img
    src={router.query.files}
    className="aspect-video w-full object-cover"
    alt=""
  />
  <div className="p-4">
    <p className="mb-1 text-sm text-primary-500">{router.query.reportingUser} • estimated date:   <time>{router.query.estimatedDate}</time></p>
    <h3 className="text-2xl font-bold text-gray-900 mb-3">{router.query.location}</h3>
    <h5 className="text-sm text-gray-900">{router.query.shortDescription}</h5>

    {/* <p className="mt-1 text-gray-500">{JSON.stringify(result)}</p> */}
    <div className="mt-4 flex gap-2">
      <span
        className="inline-flex items-center gap-1 rounded-full bg-blue-50 px-2 py-1 text-xs font-semibold text-blue-600"
      >
        reported on: {router.query.date} - {router.query.time}
      </span>
      <span
        className="inline-flex items-center gap-1 rounded-full bg-indigo-50 px-2 py-1 text-xs font-semibold text-indigo-600"
      >
        {router.query.id}
      </span>
    </div>
  </div>
</div>
    );
  }

  
  

  
