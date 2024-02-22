import React, { useState } from 'react'
import './style/Homepage.css'
import logo from '../images/Learnify-Logo.png'
import dummyData from './store/data';
import CourseCard from './CourseCard';
import DropDown from './DropDown';

const Homepage = ({ userDetail }) => {
  console.log("homepage page- " ,userDetail)
  const ProfileData = ['Name - Yogendra Jhala', 'Email - yogendrajhala650@gmail.com', 'Mobile no -9669895867'];
  const CoursesTagDetails = ['Enrolled Courses - 3', 'Completed Courses - 1', 'In Progress - 2'];
  const TeachOnlineTagDetails = ['Subjects Taught - Math, Science', 'Total Students - 20', 'Teaching Experience - 2 years'];
  const NotificationsTagDetails = ['Unread Messages - 2', 'Event Reminders - 1', 'New Followers - 5'];
  const CartTagDetails = ['Items in Cart - 5', 'Total Amount - $50.00', 'Last Purchase - Product XYZ'];

  const [searchKeyword, setSearchKeyword] = useState([]);
  const [courseData, setCourseData] = useState(dummyData);
  const [isAlertMsgShown, setIsAlertMsgShown] = useState(false);
  const alertMsg = "Ooops!!, No course found, Try searching something else...";


  const handleInputChange = (e) => {
    setIsAlertMsgShown(false);
    let newKeyword = e.target.value;
    setSearchKeyword(e.target.value);
    let currentData = dummyData.filter((data) => {
      let lowerCaseNewKeyword = newKeyword.toLowerCase();
      let lowerCaseName = data.name.toLowerCase();
      let lowerCaseDescription = data.description.toLowerCase();
      return lowerCaseName.includes(lowerCaseNewKeyword) || lowerCaseDescription.includes(lowerCaseNewKeyword);
    })

    console.log("current data - ", currentData)
    if (currentData.length == 0) {
      setIsAlertMsgShown(true);
    }
    console.log("alert msg - ", isAlertMsgShown)
    setCourseData(currentData);
  };



  return (
    <div className='homepage'>
      <header>
        <img src={logo} alt="Learnify Logo" />
        <div>
          <input style={{ margin: 20 }} value={searchKeyword} onChange={handleInputChange} />
        </div>
        <nav>
          {/* <button onClick={handleMyCourses}>My Courses</button>
          <button onClick={handleTeachOnline}>Teach Online</button>
          <button onClick={handleNotification}>Notification</button>
          <button onClick={handleCart}>Cart</button> */}
          <DropDown link={'my-courses'} data={CoursesTagDetails} tag={'My Courses'} />
          <DropDown link={'teach-online'} data={TeachOnlineTagDetails} tag={'Teach Online'} />
          <DropDown link={'notification'} data={NotificationsTagDetails} tag={'Notification'} />
          <DropDown link={'cart'} data={CartTagDetails} tag={'Cart'} />
          <DropDown link={'profile'} data={ProfileData} tag={'Profile'} />
          <DropDown tag={'Logout'} />
          {/* <button onClick={handleLogout}>Logout</button> */}
        </nav>
      </header>

      <main>


        {searchKeyword.length == 0 && <>
          <section>
            <h2>Trending Courses</h2>
            <div>
              <CourseCard courses={dummyData.filter((data) => { return data.id < 4 })} onClick={() => console.log(`Enrolling in dasfgersd`)} />

            </div>
          </section>

          <section>
            <h2>Most Relevant Courses</h2>
            <div>
              <CourseCard courses={dummyData.filter((data) => { return data.id > 3 })} onClick={() => console.log(`Enrolling in dasfgersd`)} />
            </div>
          </section>

        </>}

        {isAlertMsgShown == false ?
          <section>
            <h2>Courses</h2>
            <div>
              <CourseCard courses={courseData} onClick={() => console.log(`Enrolling in dasfgersd`)} />
            </div>
          </section>
          :
          <>
            <h2 style={{ color: 'red', textAlign: 'center', marginTop: '20px' }}>
              {alertMsg}
            </h2>
          </>
        }

      </main>
    </div>
  )
}

export default Homepage




