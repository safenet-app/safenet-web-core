import { Polybase } from "@polybase/client";

const db = new Polybase({ defaultNamespace: "SafeNet"});
const eventsCollection = db.collection("Events");
console.log(eventsCollection)


export default class Event {
  
    async createEvent(id: string, date:string, time:string,estimatedDate: string,reportingUser: string, 
      shortDescription: string,location: string){
      try {
        const result = await eventsCollection.create([id, date, time, estimatedDate, reportingUser, shortDescription, location]);
        console.log(result);
      }
      catch (error){
        console.error(error);
      }
    }
    
    async deleteEvent(id: string){
      try {
        const result = await eventsCollection.record(id).call('del',[]);
        console.log(result);
      }
      catch (error){
        console.error(error);
      }
    }

    async updateEvent(id: string, date:string, time:string,estimatedDate: string,reportingUser: string, shortDescription: string,
      location: string, files: string[], adminAddresses: string[], status: string, detailedDescription: string, statusMessage: string){
      try {
        const result = await eventsCollection.record(id).call("setEvent", [date, time, estimatedDate, reportingUser, shortDescription, 
          location, files, adminAddresses, status, detailedDescription, statusMessage ]);      
        console.log(result);
      }
      catch (error){
        console.error(error);
      }
    }
  }

