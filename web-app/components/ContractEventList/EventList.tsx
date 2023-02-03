import { CollectionRecordResponse } from "@polybase/client";
import { execArgv } from "process";
import { useEffect, useState } from "react";
import { Collection } from "typescript";
import EventService from "../Event/Event";
import EventContainer from "./EventContainer";

export const EventListComponent = () => {


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
        {events.map((value:EventContainer,index:number)=>{
            return(
              <div >
              <p > {value.id}</p>
              <p > {value.date}</p>
              <p > {value.time}</p>
              <p > {value.location}</p>
              <p > {value.shortDescription}</p>
              </div>
            );
        }

        )}
        </>
    )


}