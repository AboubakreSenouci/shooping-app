
import {useState} from 'react';

function App() {
	const [counter, setCouner] = useState(0);

	const handleOnClick = () => {
		setCouner(counter + 1);
	};

	return (
		<div className='text-center'>
			<h1> Counter App </h1>
			  <p>{counter}</p>
			<button onClick={handleOnClick} className="bg-gray-400 py-1 px-3 rounded">increment</button>
		</div>
	);
}

export default App;
