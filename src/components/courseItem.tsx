import React from "react";
import "./courseItem.scss";

interface Props {
  course: Course;
  selectedType: string;
}

export const CourseItem: React.FC<Props> = ({ course }) => {
  return (
    <li key={course.id} className="course-item">
      <div className="course-item--box course-item__info">
        <span className="info__text">{course["course-type"]}</span>
        <span className="info__text info__title"> {course.title}</span>
        <span className="info__text"> {course.description}</span>
      </div>
      <div className="course-item--box course-item__skills">
        <span className="skills__text skills__title">Key Topic & Skills</span>
        {course.topics?.map((topic, idx) => {
          return (
            <span className="skills__text" key={idx}>
              {topic}
            </span>
          );
        })}
      </div>
    </li>
  );
};
