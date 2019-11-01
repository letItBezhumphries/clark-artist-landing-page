import React from "react";
import { Link } from "react-router-dom";

// const DropdownList = props => {
//   return (
//     <div className="dropdown">
//       <Link to="/portfolios" className="navbar__link dropdown__dropbtn">
//         + portfolio
//       </Link>
//       <div className="dropdown__dropdown-content">
        
//           <Link to="/portfolios/early-works" className="dropdown__portfolio-link">
//             <span>early works</span>
//           </Link>
//           <Link to="/portfolios/montages" className="dropdown__portfolio-link">
//             <span>montages</span>
//           </Link>
//           <Link to="/portfolios/photography" className="dropdown__portfolio-link">
//             <span>photography</span>
//           </Link>
//           <Link to="/portfolios/people-and-places" className="dropdown__portfolio-link">
//             <span>people & places</span>
//           </Link>
//           <Link to="/portfolios/aerials" className="dropdown__portfolio-link">
//             <span>aerials</span>
//           </Link>
  
//       </div>
//     </div>
//   );
// };
const DropdownList = props => (
  <div className="navbar__dropdown">
    <button className="navbar__link navbar__dropbtn">+ portfolios</button>

    <div className="navbar__dropdown-list">
      <Link to="/portfolios/early-works" className="navbar__portfolio-link">
        early works
      </Link>
      <Link to="/portfolios/montages" className="navbar__portfolio-link">
        montages
      </Link>
      <Link to="/portfolios/photography" className="navbar__portfolio-link">
        photography
      </Link>
      <Link to="/portfolios/people-and-places" className="navbar__portfolio-link">
        people & places
      </Link>
      <Link to="/portfolios/aerials" className="navbar__portfolio-link">
        aerials
      </Link>
    </div>
  </div>
);

export default DropdownList;
