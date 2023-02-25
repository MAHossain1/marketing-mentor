import React from "react";
import { Link, useLoaderData } from "react-router-dom";

const CourseDetails = () => {
  const course = useLoaderData();
  //   console.log(course);
  const { title, image, skills, review, details } = course;
  return (
    <div className="card w-96 glass mx-auto mt-12">
      <figure>
        <img src={image} alt="car!" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{title}</h2>
        <p>How to park your car at your garage?</p>
        <p>{details}</p>
        <p>Skills: {skills}</p>
        <p>
          <small>Review: {review}</small>
        </p>
        <div className="card-actions justify-end">
          <Link to={`/checkout/${course.id}`}>
            <button className="btn btn-primary">Get Premium Access</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CourseDetails;
