import React from 'react';
import '../styles/Profile.css';
import { useAuth0 } from '@auth0/auth0-react';

const Profile = () => {
  const { user } = useAuth0();
  const { last_login, name, picture, email, nickname, logins_count, email_verified } = user;

  return (
    <div className='divBody'>
      <div className="row align-items-center profile-header custom-header">
        <div className="col-md-2 mb-3">
          <img
            src={picture}
            alt="Profile"
            className="rounded-circle img-fluid profile-picture mb-3 mb-md-0"
          />
        </div>
        <div className="col-md text-center text-md-left">
          <h2 className='userText'><span className='userText'>User:</span>{' '}{name}</h2>
          <p className="lead text-muted"></p>
        </div>
      </div>
      <div className="row">
        <div className="col-12 text-light bg-dark p-4 profileInfo">
          <h2>My username: {nickname} </h2>
          <h2>My coach: </h2>
          <h2>Visits to Coach App: {logins_count}</h2>
          <h2>Last login: {last_login}</h2>
          {/* <h2>Verified user?: {email_verified}</h2> */}
        </div>
      </div>
    </div>
  );
};

export default Profile;




































//GMS TODO: DO NOT DELETE! This is a default data token from auth0 that I am picking apart

//   return (
//     <div className='divBody'>
//       <div className="row align-items-center profile-header">
//         <div className="col-md-2 mb-3">
//           <img
//             src={picture}
//             alt="Profile"
//             className="rounded-circle img-fluid profile-picture mb-3 mb-md-0"
//           />
//         </div>
//         <div className="col-md text-center text-md-left">
//           <h2><span className='userText'>User:</span> {name}</h2>
//           <p className="lead text-muted"></p>
//         </div>
//       </div>
//       <div className="row">
//         <pre className="col-12 text-light bg-dark p-4">
//           {JSON.stringify(user, null, 2)};
//           {/*GMS these are just some call examples of the desctructured user token at the top of the page. Can grab anything, easily.}
//             {/* {JSON.stringify(user.picture)};
//             <img src={picture}></img> */}
//         </pre>
//       </div>
//     </div>
//   );
// };
