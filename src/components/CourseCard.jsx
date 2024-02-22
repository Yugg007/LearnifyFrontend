// CourseCard.jsx
import React from 'react';
import './style/CourseCard.css'; // Import the associated CSS file
const CourseCard = ({courses}) => {
    console.log(courses)
    return (
      <div className="course-container">
        {courses.map((course) => (
          <div key={course.id} className="course-card">
            <img src={course.image} alt={course.name} />
            <h3>{course.name}</h3>
            <p>{course.description}</p>
            <div className="course-details">
              <span className="rating">Rating: {course.rating}</span>
              <span className="comments">Comments: {course.comments}</span>
            </div>
          </div>
        ))}
      </div>
    );
  };
  
  export default CourseCard;