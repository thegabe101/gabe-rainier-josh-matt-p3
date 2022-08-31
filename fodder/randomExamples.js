// export class TicketCard extends Component {
//   state = {
//    tickets: [],
//  };

//  constructor() {
//    super();

// // GET All Ticket Dates
// axios.get("http://localhost:23455/TicketApplication").then((res) => {
//   console.log(res.data);
//   this.setState({ tickets: res.data });
// });
// }

// render() {
//  return (
//   <div>
//     <Card className="text-center">
//       <Card.Header>
//         Ticket:{" "}
//         {this.state.tickets.map((ticket) => {
//           return (
//             <p key={ticket.id} value={ticket.id}>
//               {ticket.id}
//             </p>
//           );
//         })}
//       </Card.Header>
//       <Card.Body>
//         <Card.Title>
//           {this.state.tickets.map((ticket) => {
//             return (
//               <p key={ticket.id} value={ticket.id}>
//                 {ticket.firstName} {ticket.lastName}
//               </p>
//             );
//           })}
//         </Card.Title>
//         <Card.Text>
//           First choice:{" "}
//           {this.state.tickets.map((ticket) => {
//             return (
//               <p key={ticket.id} value={ticket.id}>
//                 {ticket.choice1Id}
//               </p>
//             );
//           })}
//           &nbsp; &nbsp; Second choice:{" "}
//           {this.state.tickets.map((ticket) => {
//             return (
//               <p key={ticket.id} value={ticket.id}>
//                 {ticket.choice2Id}
//               </p>
//             );
//           })}
//           &nbsp; &nbsp; Third choice:{" "}
//           {this.state.tickets.map((ticket) => {
//             return (
//               <p key={ticket.id} value={ticket.id}>
//                 {ticket.choice3Id}
//               </p>
//             );
//           })}
//         </Card.Text>
//       </Card.Body>
//       <Card.Footer className="text-muted">
//         <Button variant="primary">Remove Ticket</Button>
//       </Card.Footer>
//     </Card>
//   </div>
// );
// }
// } 