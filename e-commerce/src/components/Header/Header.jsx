// import React from 'react'
// import '../../styles/Header.css';
// import assets from '../../assets/assets';

// const Header = () => {
//   return (
//     <div className='header'>
//       <div className="header-contents">
//         <h2>Everything you love, in one place</h2>
//         <p>“We believe shopping should be simple, joyful, and personal. That's why we bring everything you love — from trusted brands to trending products — all in one place.”</p>
//         <div className="ban">
//             <img src={assets.banners[3]} alt="" />
//         </div>
//         <button>view</button>
//       </div>
//     </div>
//   )
// }

// export default Header

import React, { useState, useEffect } from 'react';
import '../../styles/Header.css';
import assets from '../../assets/assets';

const Header = () => {
  const [currentBanner, setCurrentBanner] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentBanner((prev) => (prev + 1) % assets.banners.length);
    }, 3000); // Change image every 3 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div className='header'>
      <div className="banner-container">
        <img src={assets.banners[currentBanner]} alt="banner" className="banner-img" />
      </div>

      <div className="header-contents">
        <h2>Everything you love, in one place</h2>
        <p>We believe shopping should be simple, joyful, and personal. That’s why we bring everything you love — from trusted brands to trending products — all in one place.</p>
        <button>View</button>
      </div>
    </div>
  );
};

export default Header;
