import React from "react";
import { useLoaderData } from "react-router-dom";

const Checkout = () => {
  const course = useLoaderData();
  return (
    <div className="text-center text-3xl text-success mt-4">
      Please Checkout for this course of id: {course.id}
    </div>
  );
};

export default Checkout;
