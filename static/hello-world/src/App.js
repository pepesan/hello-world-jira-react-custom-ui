import React, { useEffect, useState } from 'react';
import { invoke } from '@forge/bridge';
import Jedi from "./components/Jedi";
import Form01 from "./components/formularios/Form01";

function App() {
  const [data, setData] = useState(null);

  useEffect(() => {
    invoke('getText', { example: 'my-invoke-variable' }).then(setData);
  }, []);

  return (
    <div>
      <div>
        {data ? data : 'Loading...'}
      </div>
      <div>
        <Jedi></Jedi>
          <Form01></Form01>
      </div>
    </div>
  );
}

export default App;
