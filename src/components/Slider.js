import React from 'react';
import {useState} from 'react';
import reviews from '../data';
import Comments from './Comments';
import 'bootstrap/dist/css/bootstrap.css';
import '../sass/index.scss';
import { Container, Row} from 'react-bootstrap';
import Button from '@material-ui/core/Button';
import ArrowRightIcon from '@material-ui/icons/ArrowRight';
import ArrowLeftIcon from '@material-ui/icons/ArrowLeft';
import AOS from 'aos';
import 'aos/dist/aos.css'; 

// Initialises the animate on scroll library to use through the app
AOS.init();

const ShowCase = () => {
    // 0 will show the first car in the array
    const [car, setCar] = useState(0);

    // car is used so when the state value changes it will respond by displaying a different car information via properties from json data sourced from  data.js
    const {model, price, image, title, engine, speed, power, mot, mileage} = reviews[car];

    // checknumber checks if the value given is bigger or lower than number of cars in array (4 but in array terms [3])
    const checkNumber = (number) => {
        // If number is bigger than 0 then return first car in array 
        if(number > reviews.length -1){
            return 0;
        }
        // If number is less than 0 then return last car in array
        if(number < 0) {
            return reviews.length -1
        }
        // If number hasnt been affected by both statments then return number
        return number;
    } 

    // Button functions

    // setCar function will access the state value, then use let varibable newCar which will eqal to car + 1 so that it will add 1 to the current state value and move to the next car
    // newCar is now passed within checkNumber so that the slider does not break 
    const nextCar = () => {
        setCar((car) => {
            let newCar = car + 1;
            return checkNumber(newCar);
        });
    };
    // same as nextCar function, the only change is we -1 to move to previous car
    const prevCar = () => {
        setCar((car) => {
            let newCar = car - 1;
            return checkNumber(newCar);
        });
    };


    return (
        <Container>
            {/* Car slider heading  */}
            <Row id="slider-section"> 
            <h1 data-aos="fade-down" data-aos-delay="100" data-aos-easing="ease-in-out" data-aos-mirror="true" data-aos-once="false">FIND YOUR NEXT CAR HERE TODAY!!</h1>
            <p id="slider-title" data-aos="fade-down" data-aos-delay="100" data-aos-easing="ease-in-out" data-aos-mirror="true" data-aos-once="false">Take a look at the cars that have been added to the database and see if it meets your budgeting needs. 
                Slide thorugh all the options available and take a look at specs and comments from other students on how the cars peform, 
                easiest to look after and what causes the most trouble.</p>

                 {/* Underline under the title headings */}
                <p id="borderline" data-aos="fade-down" data-aos-delay="100" data-aos-easing="ease-in-out" data-aos-mirror="true" data-aos-once="false"></p>
        
        {/* Car specifications slider */}
        <article className="slider-content" data-aos="fade-down" data-aos-delay="100" data-aos-easing="ease-in-out" data-aos-mirror="true" data-aos-once="false">
        <div className="img-container">
        {/* The = { } means that it reads a property from data.js file and alternates each time a new car is selected */}
        <img src={image} alt={model} className="car-img" />
        </div>
        <h4 className="car-heading">{model}</h4>
        <h4>{price}</h4>

        <Button variant="contained" id="car-btn">VIEW CAR SITE</Button>

        <p className="car-info-title">{title}</p>
        <p className="car-info">{engine}</p>
        <p className="car-info">{speed}</p>
        <p className="car-info">{power}</p>
        <p className="car-info">{mileage}</p>
        <p className="car-info">{mot}</p>
        
        {/* Next/Prev Buttons */}
        <div className="button-container">
            <button className="prev-btn" onClick={prevCar}>prev
                <ArrowLeftIcon id="btn-lefticon" />
                </button>
                <button className="next-btn" onClick={nextCar}>
                <ArrowRightIcon id="btn-lefticon" />next
                </button>
                </div>
                </article>
                </Row>
                <Comments />
                </Container>
    );
}

export default ShowCase;