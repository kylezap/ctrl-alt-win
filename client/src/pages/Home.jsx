// import { Link } from 'react-router-dom';
// import { useQuery } from '@apollo/client';
// import { QUERY_MATCHUPS } from '../utils/queries';
import logo from "../assets/logo.png"; // adjust the path to match your project structure

const Home = () => {
  // const { loading, data } = useQuery(QUERY_MATCHUPS, {
  //   fetchPolicy: "no-cache"
  // });

  // const matchupList = data?.matchups || [];

  return (
    <>
      <div className="card bg-dark card-rounded">
        <img
          src={logo}
          alt="logo"
          style={{ height: "400px", width: "400px" }}
        />
        
      </div>
    {/* create an unordered list without bullet */}
      
      <a href="/signup">
        <h4>Signup</h4>{" "}
      </a>
      <a href="/search">
        <h4>Search</h4>{" "}
      </a>
      <a href="/profile">
        <h4>Profile</h4>{" "}
      </a>
    </>
    // <div className="card bg-white card-rounded w-50">
    //   <div className="card-header bg-dark text-center">
    //     <h1>Welcome to Tech Matchup!</h1>
    //   </div>
    //   <div className="card-body m-5">
    //     <h4>Here is a list of matchups you can vote on:</h4>
    //     {loading ? (
    //       <div>Loading...</div>
    //     ) : (
    //       <ul className="square">
    //         {matchupList.map((matchup) => {
    //           return (
    //             <li key={matchup._id}>
    //               <Link to={{ pathname: `/matchup/${matchup._id}` }}>
    //                 {matchup.tech1} vs. {matchup.tech2}
    //               </Link>
    //             </li>
    //           );
    //         })}
    //       </ul>
    //     )}
    //   </div>
    //   <div className="card-footer text-center m-3">
    //     <h4>Ready to create a new matchup?</h4>
    //     <Link to="/matchup">
    //       <button className="btn btn-lg btn-danger">Create Matchup!</button>
    //     </Link>
    //   </div>
    // </div>
  );
};

export default Home;
