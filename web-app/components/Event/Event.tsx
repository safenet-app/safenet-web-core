import { Polybase } from "@polybase/client";
import {
  DeleteEventDTO,
  CreateEventDTO,
  UpdateEventDTO,
} from "../../types/index";


const db = new Polybase({ defaultNamespace: "SafeNet" });
const eventsCollection = db.collection("Events");
console.log('collection', eventsCollection);
export default class EventService {
  async createEvent({
    id,
    date,
    time,
    estimatedDate,
    phoneNumber,
    reportingUser,
    shortDescription,
    location,
    files,
  }: CreateEventDTO) {
    try {
      const result = await eventsCollection.create([
        id,
        date,
        time,
        estimatedDate,
        phoneNumber,
        reportingUser,
        shortDescription,
        location,
        files,
      ]);
      console.log(result);
    } catch (error) {
      console.error(error);
    }
  }

  async deleteEvent(id: DeleteEventDTO["id"]) {
    try {
      const result = await eventsCollection.record(id).call("del", []);
      console.log(result);
    } catch (error) {
      console.error(error);
    }
  }

  async updateEvent({
    id,
    time,
    estimatedDate,
    date,
    reportingUser,
    shortDescription,
    files,
    adminAddresses,
    status,
    detailedDescription,
    statusMessage,
    location,
  }: UpdateEventDTO) {
    try {
      const result = await eventsCollection
        .record(id)
        .call("setEvent", [
          date,
          time,
          estimatedDate,
          reportingUser,
          shortDescription,
          location,
          files,
          adminAddresses,
          status,
          detailedDescription,
          statusMessage,
        ]);
      console.log(result);
    } catch (error) {
      console.error(error);
    }
  }
  
  async getAllEvents(){
       try {
         const {data} = await eventsCollection.get();
         let ids: string[] = []; 
        
         for(var index = 0; index<data.length;index++){
          
          ids.push(await this.getID(data[index]));
           
         }
         
         return ids;
      }
        catch (error) {
         console.error(error);
       }
  }
 
  async getID(item:any){
    const {data} = item;
    return data.id;
  }
  async getAllActiveEvents(){
        try {
          const {data} = await eventsCollection.where("status", "==", "Active").get();
        } catch (error) {
          
        }
  }
  
}
