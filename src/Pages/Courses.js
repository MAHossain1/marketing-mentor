import React from "react";
import { useLoaderData } from "react-router-dom";
import CourseCard from "../CourseCard/CourseCard";

const Courses = () => {
  const courses = useLoaderData();

  return (
    <div className="flex flex-col lg:flex-row ">
      {/* Side navigation */}
      <nav className="bg-gray-800 text-white text-2xl w-100 lg:text-start sm:text-center lg:w-64 flex-shrink-0 ">
        <div className="px-4 py-3 border-b border-gray-700">
          <h1 className="text-lg font-bold">All Courses</h1>
        </div>
        <ul className="py-4">
          {courses.map(course => (
            <li
              key={course.id}
              className="px-4 py-2 hover:bg-gray-700 cursor-pointer"
            >
              {course.title}
            </li>
          ))}
        </ul>
      </nav>

      {/* Content section */}
      <main className="flex-1 bg-gray-100 p-10">
        <h2 className="text-xl font-bold mb-5">Dashboard</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {courses.map(course => (
            <CourseCard key={course.id} course={course}></CourseCard>
          ))}
        </div>
      </main>
    </div>
  );
};

export default Courses;
