import React, { useState } from 'react'
import data from './data'
import List from './List'
function App() {

	const [people,setPeople] = useState(data)
	function clearAllRecords(){
		setPeople([])
	}

	return (
		<main>
			<section className="container">
				<h3>{data.length} birthday today</h3>
				<List people={people}/>
				<button onClick={clearAllRecords}>ClearAll</button>
			</section>
		</main>
	)
}

export default App
