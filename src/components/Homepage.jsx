import React, { useState } from 'react'
import './style/Homepage.css'
import logo from '../images/Learnify-Logo.png'

const Homepage = (value) => {
  console.log("homepage - ", value)
  const [searchKeyword, setSearchKeyword] = useState([]);
  const handleInputChange = (e) => {
    setSearchKeyword(e.target.value);
  }

  const handleSearch = () => {

  }
  const handleMyCourses = () => {

  }
  const handleTeachOnline = () => {

  }
  const handleNotification = () => {

  }
  const handleCart = () => {

  }
  const handleProfile = () => {

  }

  const handleLogout = () => {
    const confirmLogout = window.confirm('Are you sure you want to logout?');
    if (confirmLogout) {
      window.location.href = 'http://localhost:8000/logout';
    }
  };

  return (
    <div className='homepage'>
      <header>
        <img src={logo} alt="Learnify Logo" />
        <div>
          <input value={searchKeyword} onChange={handleInputChange} />
          <button style={{ margin: 20 }} onClick={handleSearch}>Search</button>
        </div>
        <nav>
          <button onClick={handleMyCourses}>My Courses</button>
          <button onClick={handleTeachOnline}>Teach Online</button>
          <button onClick={handleNotification}>Notification</button>
          <button onClick={handleCart}>Cart</button>
          <button onClick={handleProfile}>Profile</button>
          <button onClick={handleLogout}>Logout</button>
        </nav>
      </header>

      <section>
        <h2>Trending Courses</h2>

      </section>

      <section>
        <h2>Most Relevant Courses</h2>
      </section>
    </div>
  )
}

export default Homepage




