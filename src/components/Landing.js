import 'bootstrap/dist/css/bootstrap.css';
import { Container, Row, Col } from 'react-bootstrap';
import logo from '../img/landing-heroimg.jpg';
import sponsor1 from '../img/Vauxhall-img.png';
import sponsor2 from '../img/gocompare-img.png';
import sponsor3 from '../img/confused-img.png';
import sponsor4 from '../img/autotrader-img.jpg';
import infologo from '../img/info.jpg';
import creationlogo from '../img/creation.jpg';
import satisfactionlogo from '../img/satisfaction.jpg';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';


const Landing = () => {
    return (
        <div className="top-section">
        <Container>
          <Row data-aos="fade-down" data-aos-delay="200" data-aos-easing="ease-in-out" data-aos-mirror="true" data-aos-once="false">
            <Col>
            {/* Students auto logo */}
            <img src= {logo} alt="Students Auto Logo" id="hero-img" />
            </Col>

            {/* Landing heading section */}
            <Col className="section-title">
            <h1>PLACE WHERE STUDENTS MEET THEIR DREAM CARS</h1>
            <p>Students Auto will help guide students and new drivers to cars that suit their financial needs and create a new journey along the way.
              Have a look at great value cars and see if it will suit your studnets journey needs.
            </p>
            </Col>
            {/* Scroll down indicator */}
            <p><KeyboardArrowDownIcon id="scroll-down" data-aos="fade-down" data-aos-delay="200" data-aos-easing="ease-in-out" data-aos-mirror="true" data-aos-once="false"/></p>
            </Row>

            {/* Car sponsors row */}
            <Row data-aos="fade-down" data-aos-delay="50" data-aos-easing="ease-in-out" data-aos-mirror="true" data-aos-once="false">
              <Col>
              <img src={sponsor1} alt="" id="vauxsponsors-img" />
              </Col>
              <Col>
              <img src={sponsor2} alt="" id="sponsors-img" />
              </Col>
              <Col>
              <img src={sponsor3} alt="" id="sponsors-img" />
              </Col>
              <Col>
              <img src={sponsor4} alt="" id="sponsors-img" />
              </Col>
            </Row>
            </Container>

            {/* Landing main content */}
            <div className="content">
              <Container>
                <Row data-aos="fade-down" data-aos-delay="50" data-aos-easing="ease-in-out" data-aos-mirror="true" data-aos-once="false">
                  <Col id="content-info">
                  <p> <h3 id="content-title">Info</h3>StudentsAuto gives students and new drivers a chance to find a car that suits their budgeting needs. 
                    Many young people don’t know how to buy a car, conduct manual D.I.Y checks, milage reads etc. 
                    Users when visiitng out website have given nothing but great feedback with a 85% like rate making us a trusted site 
                    for students and new drivers to find their next car for a cheap price. </p>
                  </Col>
                  <Col>
                  <img src= {infologo} alt="Students Auto Logo" id="info-img" />
                  </Col>
                  </Row>

                  <Row data-aos="fade-down" data-aos-delay="100" data-aos-easing="ease-in-out" data-aos-mirror="true" data-aos-once="false">
                  <Col>
                  <img src= {creationlogo} alt="Students Auto Logo" id="creation-img" />
                  </Col>
                  <Col id="content-info">
                  <p> <h3 id="content-title">Creation</h3>
                  You may ask why this site was created, well many students out their don’t have many places to go to discuss all details about cars or what approach to take when buying them. 
                  The site does not only cater to students in ways to as their will be a page dedicated to a mini taching guide on how to look after your car to help make the car perfom better
                   and aesthetically look better.</p>
                  </Col>
                </Row>

                <Row data-aos="fade-down" data-aos-delay="150" data-aos-easing="ease-in-out" data-aos-mirror="true" data-aos-once="false"> 
                  <Col id="content-info2">
                  <p> <h3 id="content-title">Satisfaction</h3>We hope that our site can bring you joy in finding a car with help from 
                  our sponsors providing vehicles for our users to take a look at with benefits if purchased from representive site. 
                  Remember choose a car that makes you and your wallet happy and we ask that you stay safe, drive safe and buy safe. Happy car hunting auto’s.</p>
                  </Col>
                  <Col>
                  <img src= {satisfactionlogo} alt="Students Auto Logo" id="satisfaction-img" />
                  </Col>
                  </Row>
              </Container>

              {/* landing newletter form */}
              <Container>
                {/* AOS fot his is more delayed otherwise when user scrolls to this it will not animate as it already has */}
                <Grid container data-aos="fade-down" data-aos-delay="200" data-aos-easing="ease-in-out" data-aos-mirror="true" data-aos-once="false">
                  <Grid className="form-grid">
                    <div className="landing-card">
                      <h1> GET THE LATEST NEWS </h1>
                      <h5> Have your auto information emailed to you with a click of a button. Write email below.</h5>
                      <p id="form-input"><textarea></textarea></p>
                      <Button variant="contained" id="card-btn">KEEP ME UPDATED</Button>
                      </div>
                      </Grid>
                      </Grid>
                      </Container>
            </div>
            </div>
    );
}

export default Landing;