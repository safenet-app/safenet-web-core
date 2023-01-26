import React from "react";
import { Polybase } from "@polybase/client";

const db = new Polybase({ defaultNamespace: "SafeNet"});
const events = db.collection("Events");
console.log(events)


function App() {
  
    const record = async() =>{
      // events.call("setInfo", ['Miguel', 'Bogota',['cemento','2']]);
      const result = await events.create(['1', '25012023', '1200', '24012023', 'Homero Simpson', 'derrumbe en area montañosa, 3 casas destruidas', 'La mesa-Cundinamarca', ['placeholder'], ['0x12345'] ]);
      console.log(result);
    }
    
    const destroy = async() =>{
      // events.call("setInfo", ['Miguel', 'Bogota',['cemento','2']]);
      const result = await events.record('1').call('del',[]);
      console.log(result);
    }

    const update = async() =>{
      const result = await events.record("1").call("setEvent", ['25012023', '1200', '24012023', 'Marge Simpson', 'derrumbe', 'La mesa-Cundinamarca', ['placeholder'], ['0x12345'], "approved", 'derrumbe en area montañosa, 3 casas destruidas', "all info ok" ]);      
      console.log(result);
    }
      
  return (
    <div className="App">
      <button onClick={record}>Record</button>
      <button onClick={destroy}>Destroy</button>
      <button onClick={update}>Update</button>
    </div>
  );
  
}

export default App;
