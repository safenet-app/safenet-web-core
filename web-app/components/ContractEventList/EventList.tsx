"use client";
import { CollectionRecordResponse } from "@polybase/client";
import { execArgv } from "process";
import { useEffect, useState } from "react";
import { Collection } from "typescript";
import EventService from "../Event/Event";
import EventContainer from "./EventContainer";
import { useRouter } from "next/router";

export const EventListComponent = () => {
    const router = useRouter();

    const handleSubmit = (value: any) => {
        // e.preventDefault();
        console.log(value)
        // router.push(`/event/EventDetails?id=${value}`);
        router.push({pathname: `/event/EventDetails`, query: { date:value.date, estimatedDate:value.estimatedDate, files: value.files,
            id: value.id, location: value.location, phoneNumber: value.phoneNumber, reportingUser: value.reportingUser,
            shortDescription: value.shortDescription, status: value.status, statusMessage: value.statusMessage, time: value.time
        }}, `/event/EventDetails`);
      }

    const [events, setEvents] = useState([] as any);
    useEffect(() => {

        idExtractor();

        return () => {
        }
    }, []);

    const idExtractor = async () => {
        const eventService = new EventService;
        const promise1 = new Promise(async (resolve, reject) => {
            resolve(await eventService.getAllActiveEvents());
        });

        promise1.then((value) => {
            setEvents(value as EventContainer[]);

        }
        );
    }

    return (
        <>
            {events.map((data: EventContainer, index: number) => {
                console.log(data)
                return (
                    <>
                        <div className="flex justify-center">
                            <div className="block rounded-lg w-1/2 m-10 py-5 bg-black/40 rounded-md backdrop-blur-sm text-center">
                                <div className="py-3 px-6 border-b border-gray-300">
                                    <h5 className="text-white-900 text-xl font-medium mb-2">{data.shortDescription}</h5>
                                </div>


                                <div className="flex flex-col">
                                    <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
                                        <div className="py-2 inline-block min-w-full sm:px-6 lg:px-8">
                                            <div className="overflow-hidden">

                                                <table className="min-w-full">

                                                    <tbody>

                                                        <tr className="bg-gray-100 border-b">
                                                            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">Date</td>
                                                            <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                                                {data.date}
                                                            </td>
                                                        </tr>

                                                        <tr className="bg-white border-b">
                                                            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">Time</td>
                                                            <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                                                {data.time}
                                                            </td>
                                                        </tr>
                                                        <tr className="bg-white border-b">
                                                            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">Location</td>
                                                            <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                                                {data.location}
                                                            </td>
                                                        </tr>

                                                    </tbody>
                                                </table>
                                            </div>
                                        </div>
                                    </div>
                                </div>





                                
                                <div className="py-3 px-6 border-t border-gray-300 text-white-600">
                                    Media files
                                </div>
                                <div className="flex justify-center ">
                                   
                                {data.files.map((path:string,index2:number)=>{return(<>
                                
                                    <img
                                        src={path}
                                        className="p-1 bg-white border rounded max-w-sm"                                   
                                    />
                                
                                </>
                                    ) })}
                                
                                 

                                </div>
                                <br />
                                <p><button type="button" onClick={() => handleSubmit(data)} className=" inline-block px-6 py-2.5 bg-gray-700 text-white font-medium text-xs 
                                leading-tight uppercase rounded shadow-md hover:bg-gray-600 hover:shadow-lg focus:bg-gray-800 focus:shadow-lg 
                                focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out">Details</button></p>
                            </div>
                        </div>



                    </>
                )
            })};
        </>)


}