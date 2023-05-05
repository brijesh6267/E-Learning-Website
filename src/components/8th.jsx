import Links from "./Links";
import "../App.css";
function _8th() {
	return (
		<div className="_8th class">
			<h1>Download Links :</h1>
			<section className="Links-section">
				<Links
					lnk="https://ncert.nic.in/textbook/pdf/hemh1dd.zip"
					content="Math NCERT Book"
				></Links>
				<Links
					lnk="https://ncert.nic.in/textbook/pdf/hesc1dd.zip"
					content="Science NCERT Book"
				></Links>
				<Links
					lnk="https://ncert.nic.in/textbook/pdf/hess4dd.zip"
					content="Geography NCERT Book"
				></Links>
				<Links
					lnk="https://ncert.nic.in/textbook/pdf/hess3dd.zip"
					content="Social and Politics NCERT Book"
				></Links>{" "}
				<Links
					lnk="https://ncert.nic.in/textbook/pdf/hess2dd.zip"
					content="History NCERT Book"
				></Links>
				<Links
					lnk="https://ncert.nic.in/textbook/pdf/hehd1dd.zip"
					content="English-I NCERT Book"
				></Links>
				<Links
					lnk="https://ncert.nic.in/textbook/pdf/heih1dd.zip"
					content="English-II NCERT Book"
				></Links>
			</section>
			{/* <h1>Video Tutorials :</h1> */}
			{/* <section className="Videos-section">
				{ <Videos lnk="https://www.youtube.com/embed/fUJ3ULyyA-Y/"></Videos> }
				Coming Soon...
			</section> */}
		</div>
	);
}
export default _8th;
