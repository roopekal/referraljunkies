import { addDoc } from "firebase/firestore";
import React from "react";
import { useState } from "react";

const GiveReferralLink = (props) => {
   const [newLink, setNewLink] = useState("");
   const newLinkNumber = props.linksLength;
   const createNewLink = async () => {
      await addDoc(props.linksCollectionRef, {
         linkName: newLink,
         linkNumber: newLinkNumber,
      });
   };
   return (
      <div>
         <input
            placeholder="Paste your link here"
            onChange={(event) => {
               setNewLink(event.target.value);
            }}
         />
         <button onClick={createNewLink}>Add your referral link!</button>;
      </div>
   );
};

export default GiveReferralLink;
