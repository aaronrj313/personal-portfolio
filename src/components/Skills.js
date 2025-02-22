import meter1 from "../assets/img/meter1.svg";
import meter2 from "../assets/img/meter2.svg";
import meter3 from "../assets/img/meter3.svg";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import colorSharp from "../assets/img/color-sharp.png";
import IconCloud from "./IconCloud";
import ParallaxText from "./ParallaxText";

export const Skills = () => {
  const responsive = {
    superLargeDesktop: { breakpoint: { max: 4000, min: 3000 }, items: 5 },
    desktop: { breakpoint: { max: 3000, min: 1024 }, items: 3 },
    tablet: { breakpoint: { max: 1024, min: 464 }, items: 2 },
    mobile: { breakpoint: { max: 464, min: 0 }, items: 1 }
  };

  return (
    <section className="skill" id="skills">
      <div className="container">
        <div className="skills-section">
          {/* Left Side: Floating Icons */}
          <div className="icon-cloud-wrapper">
            <div className="icon-cloud-container">
              <IconCloud/>
            </div>
          </div>

          {/* Right Side: Skills Carousel */}
          <div className="skills-content">
            <div className="skill-bx">
              <h2>Skills</h2>
              <p>Software Engineer with a React frontend edge, automating deployments and crushing bugs like it’s my day job (because it is)</p>
              <Carousel responsive={responsive} infinite={true} className="owl-carousel owl-theme skill-slider">
                <div className="item"><img src={meter1} alt="Communication" /><h5>Communication</h5></div>
                <div className="item"><img src={meter2} alt="Leadership" /><h5>Leadership</h5></div>
                <div className="item"><img src={meter3} alt="Problem Solving" /><h5>Problem Solving</h5></div>
                <div className="item"><img src={meter1} alt="Teamwork" /><h5>Teamwork</h5></div>
              </Carousel>
            </div>
          </div>
        </div>
      </div>
      <img className="background-image-left" src={colorSharp} alt="Background" />
    </section>
  );
};
