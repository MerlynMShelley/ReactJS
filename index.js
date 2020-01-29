import React from "react"
import ReactDOM from "ReactDOM"

function MyInfo(){
	return(
			<div>
			<h1>Merlyn M Shelley</h1>
			<p>I am a Tech Enthusiast!!</p>
			<ul>
				<li>New York</li>
				<li>Washington</li>
				<li>California</li>
			</ul>	
			</div>
		)
}
ReactDOM.render(<MyInfo />,document.getElementById("root"))
