import React from "react";
import "./courseSelect.scss";

interface Props {
  courseTypes: string[];
  selectedType: string;
  handleChangeSelect: ChangeCourseType;
}

export const CourseSelect: React.FC<Props> = ({
  courseTypes,
  selectedType,
  handleChangeSelect,
}) => {
  return (
    <div className="course-select">
      <span className="course-select__title">Course Type</span>
      <select onChange={handleChangeSelect} value={selectedType}>
        {courseTypes.map((item, idx) => {
          return (
            <option key={idx} value={item}>
              {item}
            </option>
          );
        })}
      </select>
    </div>
  );
};
