import Links from "./Links";
import Videos from "./Videos";
import "../App.css";
function _10th() {
	return (
		<div className="_10th">
			<h1>Important Links :</h1>
			<section className="Links-section">
				<Links
					lnk="https://ncert.nic.in/textbook/pdf/jemh1dd.zip"
					content="Math NCERT Book"
				></Links>
				<Links
					lnk="https://ncert.nic.in/textbook/pdf/jesc1dd.zip"
					content="Science NCERT Book"
				></Links>
				<Links
					lnk="https://ncert.nic.in/textbook/pdf/jess1dd.zip"
					content="Geography NCERT Book"
				></Links>
				<Links
					lnk="https://ncert.nic.in/textbook/pdf/jess2dd.zip"
					content="Economics NCERT Book"
				></Links>
				<Links
					lnk="https://ncert.nic.in/textbook/pdf/jess3dd.zip"
					content="History NCERT Book"
				></Links>
				<Links
					lnk="https://ncert.nic.in/textbook/pdf/jess4dd.zip"
					content="Politics NCERT Book"
				></Links>
				<Links
					lnk="https://ncert.nic.in/textbook/pdf/jeff1dd.zip"
					content="English-I NCERT Book"
				></Links>
				<Links
					lnk="https://ncert.nic.in/textbook/pdf/jefp1dd.zip"
					content="English-II NCERT Book"
				></Links>
				<Links
					lnk="https://ncert.nic.in/textbook/pdf/jewe2dd.zip"
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
export default _10th;
