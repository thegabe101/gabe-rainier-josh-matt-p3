// import { Card, Grid, Text, Link } from "@nextui-org/react";
import React from "react";
import "../../styles/Home-Content.css";
// import card1 from '../../images/Card1.jpg';
const axios = require('axios');

//TODO: REMAKE INTO ROSTER 

//GMS card 2 option. this one uses a parallax effect to flip the card, the question is what do we store on the back. 

const HomeContent = () => {
  return (
    <div className="rosterBox">
      <div className="front side">
        <div className="content"><h1>The rock</h1>
        </div>
      </div>
      <div className="back side">
        <div className="content">
          <h1>Assign Exercise</h1>
          <div className="inputBox">
            <form>
              <input className="inputThingy" placeholder="name of exercise"></input>
              <input className="inputThingy" placeholder="date due"></input>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
};

export default HomeContent;


//GMS this is an example of how we might iterate over data to create an array of liftr cards. 
//GMS not sure whether we would use class or not but this example makes sense.

// export class RosterCard extends Component {
//   state = {
//     cards: [],
//   };

//   constructor() {
//     super();


//     axios.get("http://localhost:3001/api/clients").then((res) => {
//       console.log(res.data);
//       this.setState({ cards: res.data });
//     });
//   }

//   render() {
//     return (
//       <div className="rosterBox">
//         <div className="front side">
//           {this.state.cards.map((card) => {
//             return (
//               <p key={client.name} value={client.name}>
//                 {client.name}
//               </p>
//             );
//           })}
//           <div className="content"><h1>The rock</h1>
//           </div>
//         </div>
//         <div className="back side">
//           <div className="content">
//             <h1>Contact Me</h1>
//           </div>
//         </div>
//       </div>
//     )
//   }
// }

//GMS CARD1 option. this one uses the nextUi provider. 

{/* <Card css={{ p: "$6", mw: "400px" }}>
<Card.Header>
  <img
    alt="nextui logo"
    src={card1}
    width="60%"
    height="40%"
  />
  <Grid.Container css={{ pl: "$6" }}>
    <Grid xs={12}>
      <Text h4 css={{ lineHeight: "$xs" }}>
        The Rock
      </Text>
    </Grid>
    <Grid xs={12}>
      <Text css={{ color: "$accents8" }}>liftr</Text>
    </Grid>
  </Grid.Container>
</Card.Header>
<Card.Body css={{ py: "$2" }}>
  <Text>
    
  </Text>
</Card.Body>
<Card.Footer>
  <Link
    icon
    color="primary"
    target="_blank"
    href="#"
  >
    Take a look at this liftr.
  </Link>
</Card.Footer>
</Card>
) */}



