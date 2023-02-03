import { useEffect, useState } from "react";
import EventService from "../Event/Event";
import EventContainer  from "./EventContainer";

export const EventListComponent = () => {
    

    const [events,setEvents] = useState([] as EventContainer[]);
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


            debugger;
            console.log("eventos", value);

        });


    }
    
   
    return(
        <></>
    );


}