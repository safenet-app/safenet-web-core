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
      
  return (
    <div className="App">
      <button onClick={record}>Test</button>
      {/* <input onClick={record} type="button" /> */}
    </div>
  );
  
}

export default App;
