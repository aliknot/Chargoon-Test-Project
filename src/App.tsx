import React, { useEffect } from 'react';
import { getData, insertData } from './firebase/transportLayer';

function App() {

	useEffect(() => {
		getData().then(data => console.log(data));
	}, []);

  return (
    <div className="App">
      <h1>Empty project</h1>
    </div>
  );
}

export default App;
