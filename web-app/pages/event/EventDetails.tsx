import { Polybase } from "@polybase/client"
import React, {useState, useEffect} from "react"

const db = new Polybase({ defaultNamespace: "SafeNet" });
const eventsCollection = db.collection("Events");


export default  function eventDetails(){ 
  const [result, setResult] = useState({});

  useEffect( () => { 
  const fetchData = async ()=> {
    const { data, block } = await eventsCollection.record("1f946c4f-9209-4f29-bdff-659f2562659f").get();
           setResult(result => ({
            ...result,
            ...data
          }));}
          fetchData()
    },[])

    return (
      <div>
        <p>{JSON.stringify(result, Object.keys(result).sort())}</p>
    </div>
    );
  }
