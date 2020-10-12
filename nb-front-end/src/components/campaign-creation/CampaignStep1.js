import React from "react";
import logo from "../../assets/MainLogo.png"

export default function CampaignStep1() {
	return (
		<div>
			<img src={logo} alt=""/>
			<div>
				<h1> This is a start of a New Beginning</h1>
				<h2>What is the name of your startup?</h2>
				<form action="">
					<input type="text" />
				</form>
			</div>
		</div>
	);
}
