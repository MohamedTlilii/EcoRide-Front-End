import ButtonCard from "../Btn/ButtonCard";
import "./Style.css";
import React from "react";
import {
  
  FormCheckbox
 
} from 'semantic-ui-react'

function Reviews() {
  return (
    
      <div className="cadre">
      <h2>Reviews </h2>
        <form className="review-form">
          <label htmlFor="review">Your review </label>
          <textarea id="review" name="review" rows="4" required></textarea>

          <label htmlFor="name">Name </label>
          <input type="text" id="name" name="name" required />

          <label htmlFor="email">Email </label>
          <input type="email" id="email" name="email" required />
          <FormCheckbox label='Save my name, email, and website in this browser for the next time I
            comment.' />
          <p>
            {" "}
            
          </p>
          <ButtonCard  text={"SUBMIT"} />
        </form>
      </div>
   
  );
}

export default Reviews;
