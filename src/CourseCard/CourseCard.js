import React from "react";
import { Link } from "react-router-dom";

const CourseCard = ({ course }) => {
  const { id, title, image, skills, review, details } = course;
  return (
    <div className="card w-96 bg-base-100 shadow-xl">
      <figure>
        <img src={image} alt={skills} />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{title}</h2>
        <p>{details}</p>
        <Link to={`/courses/${course.id}`}>
          <button className="btn btn-primary">Learn More</button>
        </Link>
      </div>
    </div>
  );
};

export default CourseCard;
