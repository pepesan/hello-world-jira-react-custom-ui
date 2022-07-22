import React, { Fragment, useEffect, useState } from 'react';
import { invoke } from '@forge/bridge';
import Jedi from "./components/Jedi";
import Form01 from "./components/formularios/Form01";
import 'bootstrap/dist/css/bootstrap.min.css';
import MiPruebaReactBoostrap from "./components/react-bootstrap/MiPruebaReactBootstrap";

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
              <MiPruebaReactBoostrap/>
          </div>
        </div>
    );
}

export default App;
