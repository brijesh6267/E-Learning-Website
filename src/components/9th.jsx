import Links from "./Links";
import Videos from "./Videos";
import "../App.css";
function _9th() {
	return (
		<div className="_9th">
			<h1>Important Links :</h1>
			<section className="Links-section">
				<Links
					lnk="https://ncert.nic.in/textbook/pdf/iemh1dd.zip"
					content="Math NCERT Book"
				></Links>
				<Links
					lnk="https://ncert.nic.in/textbook/pdf/iesc1dd.zip"
					content="Science NCERT Book"
				></Links>
				<Links
					lnk="https://ncert.nic.in/textbook/pdf/iebe1dd.zip"
					content="English-I NCERT Book"
				></Links>
				<Links
					lnk="https://ncert.nic.in/textbook/pdf/iemo1dd.zip"
					content="English-II NCERT Book"
				></Links>
				<Links
					lnk="https://ncert.nic.in/textbook/pdf/iewe1dd.zip"
					content="English-III NCERT Book"
				></Links>
				<Links
					lnk="https://ncert.nic.in/textbook/pdf/iess1dd.zip"
					content="Geography NCERT Book"
				></Links>
				<Links
					lnk="https://ncert.nic.in/textbook/pdf/iess2dd.zip"
					content="Economics NCERT Book"
				></Links>
				<Links
					lnk="https://ncert.nic.in/textbook/pdf/iess4dd.zip"
					content="Politics NCERT Book"
				></Links>
				<Links
					lnk="https://ncert.nic.in/textbook/pdf/iess3dd.zip"
					content="History NCERT Book"
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
export default _9th;
