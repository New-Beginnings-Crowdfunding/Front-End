import react from "react";
import Header from "../Header";

export default function CampaignStep1() {
	return (
		<>
			<Header />
			<div>
				<h1> This is a start of a New Beginning</h1>
				<h2>What is the name of your startup?</h2>
				<form action="">
					<input type="text" />
				</form>
			</div>
		</>
	);
}
