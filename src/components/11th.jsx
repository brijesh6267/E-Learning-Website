import Links from "./Links";
import Videos from "./Videos";
import "../App.css";
function _11th() {
	return (
		<div className="_11th">
			<h1>Download Links :</h1>
			<section className="Links-section">
				<Links
					lnk="https://ncert.nic.in/textbook/pdf/kemh1dd.zip"
					content="Math NCERT Book"
				></Links>{" "}
				<Links
					lnk="https://ncert.nic.in/textbook/pdf/keph1dd.zip"
					content="Physics-I NCERT Book"
				></Links>
				<Links
					lnk="https://ncert.nic.in/textbook/pdf/keph2dd.zip"
					content="Physics-II NCERT Book"
				></Links>
				<Links
					lnk="https://ncert.nic.in/textbook/pdf/kech1dd.zip"
					content="Chemistry-I NCERT Book"
				></Links>
				<Links
					lnk="https://ncert.nic.in/textbook/pdf/kech2dd.zip"
					content="Chemistry-II NCERT Book"
				></Links>
				<Links
					lnk="https://ncert.nic.in/textbook/pdf/kebo1dd.zip"
					content="Biology NCERT Book"
				></Links>
				<Links
					lnk="https://ncert.nic.in/textbook/pdf/keww1dd.zip"
					content="English-I NCERT Book"
				></Links>
				<Links
					lnk="https://ncert.nic.in/textbook/pdf/kehb1dd.zip"
					content="English-II NCERT Book"
				></Links>
				<Links
					lnk="https://ncert.nic.in/textbook/pdf/kesp1dd.zip"
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
export default _11th;
