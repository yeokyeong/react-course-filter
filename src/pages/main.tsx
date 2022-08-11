import React, { useState } from "react";
import { CourseItem } from "../components/courseItem";
import { CourseSelect } from "../components/courseSelect";
import courses from "../data/courses.json";
import "./main.scss";

const courseTypes: string[] = Array.from(
  new Set(["all", ...courses.map((item) => item["course-type"])])
);
const inititalLimit = 3;

function Main() {
  const [selectedType, setSelectedType] = useState(courseTypes[0]);
  const [limit, setLimit] = useState(inititalLimit);

  const filteredCourses: Course[] =
    selectedType === "all"
      ? courses
      : courses.filter((item) => item["course-type"] === selectedType);

  const hasNext: boolean = filteredCourses.length > limit;

  const handleChangeSelect = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedType(e.target.value);
    setLimit(inititalLimit);
  };

  const showMoreItems = () => {
    setLimit(limit + inititalLimit);
  };

  return (
    <div className="page--main">
      <section className="section--info component-layout">
        <span className="info__sub-title">Hult / Courses </span>
        <h1 className="info__title">Courses</h1>
        <h5 className="info__desc">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </h5>
      </section>
      <section className="section--select component-layout">
        <CourseSelect
          courseTypes={courseTypes}
          selectedType={selectedType}
          handleChangeSelect={handleChangeSelect}
        />
      </section>

      <section className="section--course">
        <div className="course__result component-layout">
          <span>
            Showing
            <span className="result__count">{filteredCourses.length}</span>
            results
          </span>
        </div>
        <ul className="component-layout">
          {filteredCourses.slice(0, limit).map((item, idx) => {
            return (
              <CourseItem
                course={item}
                key={item.id}
                selectedType={selectedType}
              />
            );
          })}
        </ul>
        {hasNext && (
          <div className="course__more component-layout">
            <button onClick={showMoreItems}>Load More</button>
          </div>
        )}
      </section>
    </div>
  );
}

export default Main;
