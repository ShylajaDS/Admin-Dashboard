// Body.js
import React, { useState } from "react";
import Button from "@mui/material/Button";
import RestaurantCard from "./RestaurantCard";
import resObj from "../utils/mockData";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import FastfoodIcon from '@mui/icons-material/Fastfood';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { styled } from '@mui/system';

const StyledTypography = styled(Typography)({
  letterSpacing: '.3rem',
  fontFamily: 'Pacifico, cursive',
});

const feedbackImages = [
  require("../components/feedback1.png"),
  require("../components/feedback2.png"),
  require("../components/feedback3.png"),
  require("../components/feedback4.png"),
  require("../components/feedback5.png"),
  require("../components/feedback6.png"),
];


const Body = () => {
  const [restaurants, setRestaurants] = useState(resObj);

  

  const filterByCuisine = (cuisine) => {
    let filteredList;

    if (cuisine === "Fast Food") {
      // Include pizzas and burgers for Fast Food
      filteredList = restaurants.filter((restaurant) => 
        restaurant.cuisines.includes(cuisine) || restaurant.cuisines.includes("Pizzas") || restaurant.cuisines.includes("Burgers")
      );
    } else {
      // Regular filter for other cuisines
      filteredList = restaurants.filter((restaurant) => restaurant.cuisines.includes(cuisine));
    }

    setRestaurants(filteredList);
  };

  return (
    <div className="body" style={{ textAlign: "center" }}>
      <video
        controls autoPlay loop
        width="100%"
        height="450"
        style={{ marginTop: "1px",paddingTop:"2px",backgroundColor:"#1C1C1C" }}
      >
        <source
          src={require("../components/foodvideo.mp4")}
          type="video/mp4"
        />
        Your browser does not support the video tag.
      </video>
      <br></br><br></br><br></br><br></br><br></br><br></br><br></br>
      <Card style={{  width:"96.5%",padding: "20px", backgroundColor: "whitesmoke" }}>
        <Typography variant="h6" style={{ fontWeight: "bolder", marginBottom: "20px" }}>What's on your mind?</Typography>

        <div style={{ display: "flex", justifyContent: "center", alignItems: "center", padding: "20px" }}>
          <div style={{ display: "flex", flexDirection: "column", alignItems: "center", marginRight: "20px" }} onClick={() => filterByCuisine("North Indian")}>
            {/* Circle 1 - North Indian */}
            <div style={{ backgroundColor: "white", width: "120px", height: "120px", borderRadius: "50%", marginBottom: "10px", overflow: "hidden" }}>
              <img src="https://t4.ftcdn.net/jpg/02/75/39/15/360_F_275391566_ERSe7DTvq37WilB8CYgQqV1W2tYx1GO6.jpg" alt="North Indian" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
            </div>
            <Typography variant="body1" style={{ marginBottom: "0" }}>North Indian</Typography>
          </div>

          <div style={{ display: "flex", flexDirection: "column", alignItems: "center", marginRight: "20px" }} onClick={() => filterByCuisine("South Indian")}>
            {/* Circle 2 - South Indian */}
            <div style={{ width: "120px", height: "120px", borderRadius: "50%", marginBottom: "10px", overflow: "hidden" }}>
              <img src="https://previews.123rf.com/images/livedubai/livedubai1801/livedubai180100010/93195584-south-indian-meals-on-a-plate.jpg" alt="South Indian" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
            </div>
            <Typography variant="body1" style={{ marginBottom: "0" }}>South Indian</Typography>
          </div>

          <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }} onClick={() => filterByCuisine("Fast Food")}>
            {/* Circle 3 - Fast Food */}
            <div style={{ width: "120px", height: "120px", borderRadius: "50%", marginBottom: "10px", overflow: "hidden" }}>
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSA81-sI0LsWUXnhbuqX5p3zpEOWw0qDzQnDg&usqp=CAU" alt="Fast Food" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
            </div>
            <Typography variant="body1" style={{ marginBottom: "0" }}>Fast Food</Typography>
          </div>
        </div>
      </Card>
      <br></br><br></br><br></br><br></br>

      <Typography variant="h6" style={{ marginTop: "20px", fontWeight: "bolder", padding: "10px", marginBottom: "0" }}>Order food online</Typography>
      <div style={{ display: "flex", flexWrap: "wrap", marginLeft: "100px" }}>
        {restaurants.map((restaurant, index) => (
          <RestaurantCard key={index} resObj={restaurant} />
        ))}
      </div> 
      <br></br><br></br><br></br><br></br><br></br>

      <marquee behavior="scroll" direction="left" style={{  padding: "5px", backgroundColor: "whitesmoke", color:"orange",fontWeight:"bold",display: "flex", width: "98.5%" }}>
        Explore Every Restaurant 
      </marquee>
      <div style={{ display: "flex", justifyContent: "center", marginTop: "20px" }}>
        {/* Card 1 - Explore Restaurants Near Me */}
        <Card style={{ width: "45%", margin: "10px" }}>
          <CardContent>
            <Typography variant="h6" style={{ fontWeight: "bold" }}>Explore Restaurants Near Me</Typography>
            <Typography variant="body1">Discover a variety of restaurants in your vicinity.</Typography>
          </CardContent>
        </Card>

        {/* Card 2 - Explore Top Rated Restaurants */}
        <Card style={{ width: "45%", margin: "10px" }} onClick={() => {
          const filteredList = restaurants.filter((n) => n.avgRating > 4);
          setRestaurants(filteredList);
        }}>
          <CardContent>
            <Typography variant="h6" style={{ fontWeight: "bold" }}>Explore Top Rated Restaurants</Typography>
            <Typography variant="body1">Find the highest-rated restaurants for an exceptional dining experience.</Typography>
          </CardContent>
        </Card>
      </div>
      <br></br><br></br><br></br><br></br><br></br>
      <Typography variant="h6" style={{ fontWeight: "bolder", marginBottom: "20px" ,textAlign:"center"}}>Have you heard?</Typography>
      <Slider dots infinite speed={1000} slidesToShow={4} slidesToScroll={1} arrows>
        {feedbackImages.map((image, index) => (
          <Card key={index} style={{ width: "100%", backgroundColor: "black", color: "white" }}>
            <CardContent>
              <img src={image} alt={`Feedback ${index + 1}`} style={{ width: "60%", height: "250px" }} />
            </CardContent>
          </Card>
        ))}
      </Slider>
      <br></br><br></br><br></br><br></br><br></br> 
<Card style={{ width: "100%", backgroundColor: "black", color: "white" }}>
  <CardContent>
   
    {/* Additional content with StyledTypography */}
    <div style={{ display: "flex", alignItems: "center", marginTop: "15px" }}>
      <FastfoodIcon fontSize="large" style={{ marginRight: '5px', color: 'orange', fontWeight: 'bolder' }} />
      <StyledTypography variant="h5" component="div">
        <strong>Zippy Express</strong>
      </StyledTypography>
    </div><br></br>
    {/* Copyright */}
    <Typography variant="h6" style={{ textAlign: "left", marginTop: "10px" }}>
      Follow us on <br></br>
      <InstagramIcon fontSize="small" style={{ marginLeft: '1px', color: 'white' }} />
      <TwitterIcon fontSize="small" style={{ marginLeft: '5px', color: 'white' }} />
    </Typography>
    
    <br></br>

    {/* Copyright */}
    <Typography variant="body2" style={{ textAlign: "left", marginTop: "10px" }}>
    By continuing past this page, you agree to our Terms of Service, Privacy Policy and Content Policies. All trademarks are properties of their respective owners. <br></br>
      Copyright © 2024 Zippy.
    </Typography>
  </CardContent>
</Card>
    
    </div>
  );
};

export default Body;