import { useEffect, useState } from "react";
import "./App.css";
import ShowReferralLink from "./components/ShowReferralLink";
import { db } from "./firebase-config";
import { collection, getDocs } from "firebase/firestore";
import GiveReferralLink from "./components/GiveReferralLink";

const App = () => {
   const [referralLinks, setReferralLinks] = useState([]);
   const [linksLength, setLinksLength] = useState(0);
   const linksCollectionRef = collection(db, "links");
   useEffect(() => {
      const getReferralLinks = async () => {
         const data = await getDocs(linksCollectionRef);
         setReferralLinks(
            data.docs.map((doc) => ({ ...doc.data(), id: doc.id }))
         );
         setLinksLength(referralLinks.length);
      };
      getReferralLinks();
   }, []);

   return (
      <div>
         {referralLinks.map((link) => {
            return (
               <div>
                  {" "}
                  <h1>Name: {link.linkName}</h1>
                  <h1>Id: {link.linkNumber}</h1>
               </div>
            );
         })}
         <p>This is a placeholder</p>
         <ShowReferralLink />
         <GiveReferralLink
            linksCollectionRef={linksCollectionRef}
            linksLength={linksLength}
         />
      </div>
   );
};

export default App;
