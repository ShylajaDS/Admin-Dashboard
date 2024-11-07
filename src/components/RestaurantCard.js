// RestaurantCard.js
import React from "react";
import { styled } from "@mui/system";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CDN_URL } from "../utils/constants";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

const ResCard = styled(Card)({
  backgroundColor: "white",
  color: "black",
  border:"1px solid whitesmoke",
  margin: "20px",
  width: "27%",
  height: "300px",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
});

const ResImage = styled(CardMedia)({
  width: "100%",
  height: "50%",
});

const LeftAlignedCardContent = styled(CardContent)({
  textAlign: "left",
  width: "100%",
  marginLeft: "15px",
});

const CustomRating = styled("div")({
  color: "#4CAF50", 
  display: "flex",
  alignItems: "center",
});

const RestaurantCard = (props) => {
  const { name, avgRating, cuisines, areaName, cloudinaryImageId } = props.resObj;

  return (
    <ResCard>
      <ResImage
        component="img"
        alt="laddu"
        src={CDN_URL + cloudinaryImageId}
      />
      <LeftAlignedCardContent>
        <Typography variant="h5">{name}</Typography>
        <CustomRating>
          {Array.from({ length: Math.floor(avgRating) }).map((_, index) => (
            <FontAwesomeIcon icon={faStar} key={index} />
          ))}
        </CustomRating>
        <Typography variant="body2">{cuisines.join(",")}</Typography>
        <Typography variant="body2">{areaName}</Typography>
      </LeftAlignedCardContent>
    </ResCard>
  );
};

export default RestaurantCard;
