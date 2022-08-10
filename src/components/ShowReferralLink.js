import { React, useState } from "react";
import "../App.css";

const ShowReferralLink = () => {
   const [referralLink, setReferralLink] = useState("placeholder");
   const handleChange = () => {
      const getRandomInt = (max) => {
         return Math.floor(Math.random() * max);
      };

      //fetch a link from the db with the same id as the random integer

      console.log("button was clicked");
      console.log(getRandomInt(9));
      setReferralLink("new link");
   };
   return (
      <div>
         <h1>Use this randomly selected referral link!</h1>;
         <a onClick={handleChange} className="link-field" href={referralLink}>
            {referralLink}
         </a>
         <button onClick={handleChange}>New Link</button>
      </div>
   );
};

export default ShowReferralLink;
