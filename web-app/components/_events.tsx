import { Polybase } from "@polybase/client";

const db = new Polybase({ defaultNamespace: "SafeNet"});
const eventsCollection = db.collection("Events");
console.log(eventsCollection)


export default class Event {
  
    async createEvent(id: string, date:string, time:string,estimatedDate: string,reportingUser: string, shortDescription: string,location: string){
      try {
        const result = await eventsCollection.create([id, date, time, estimatedDate, reportingUser, shortDescription, location]);
        console.log(result);
      }
      catch (error){
        console.error(error);
      }
    }
    
    async deleteEvent(){
      try {
        const result = await eventsCollection.record('1').call('del',[]);
        console.log(result);
      }
      catch (error){
        console.error(error);
      }
    }

    async updateEvent(){
      try {
        const result = await eventsCollection.record("1").call("setEvent", ['25012023', '1200', '24012023', 'Marge Simpson', 'derrumbe', 'La mesa-Cundinamarca', ['placeholder'], ['0x12345'], "approved", 'derrumbe en area montañosa, 3 casas destruidas', "all info ok" ]);      
        console.log(result);
      }
      catch (error){
        console.error(error);
      }
    }
  }

