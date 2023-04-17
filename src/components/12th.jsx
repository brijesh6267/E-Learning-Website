import Links from "./Links";
import Videos from "./Videos";
import "../App.css";
function _12th() {
	return (
		<div className="_12th">
			<h1>Download Links :</h1>
			<section className="Links-section">
				<Links
					lnk="https://ncert.nic.in/textbook/pdf/lemh1dd.zip"
					content="Math-I NCERT Book"
				></Links>
				<Links
					lnk="https://ncert.nic.in/textbook/pdf/lemh2dd.zip"
					content="Math-II NCERT Book"
				></Links>
				<Links
					lnk="https://ncert.nic.in/textbook/pdf/leph1dd.zip"
					content="Physics-I NCERT Book"
				></Links>
				<Links
					lnk="https://ncert.nic.in/textbook/pdf/leph2dd.zip"
					content="Physics-II NCERT Book"
				></Links>
				<Links
					lnk="https://ncert.nic.in/textbook/pdf/lech1dd.zip"
					content="Chemistry-I NCERT Book"
				></Links>
				<Links
					lnk="https://ncert.nic.in/textbook/pdf/lech2dd.zip"
					content="Chemistry-II NCERT Book"
				></Links>
				<Links
					lnk="https://ncert.nic.in/textbook/pdf/lebo1dd.zip"
					content="Biology NCERT Book"
				></Links>
				<Links
					lnk="https://ncert.nic.in/textbook/pdf/lekl1dd.zip"
					content="English-I NCERT Book"
				></Links>
				<Links
					lnk="https://ncert.nic.in/textbook/pdf/lefl1dd.zip"
					content="English-II NCERT Book"
				></Links>
				<Links
					lnk="https://ncert.nic.in/textbook/pdf/levt1dd.zip"
					content="English-III NCERT Book"
				></Links>
			</section>
			<h1>Video Tutorials :</h1>
			<section className="Videos-section">
				{/* <Videos lnk="https://www.youtube.com/embed/fUJ3ULyyA-Y/"></Videos> */}
				Coming Soon...
			</section>
		</div>
	);
}
export default _12th;
