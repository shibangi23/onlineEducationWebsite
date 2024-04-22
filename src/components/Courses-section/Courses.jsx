import React from "react";
import { Container, Row, Col } from "reactstrap";
import courseImg1 from "../../assests/images/workout1.jpg";
import courseImg2 from "../../assests/images/workout2.jpg";
import courseImg3 from "../../assests/images/workout3.jpg";
import "./courses.css";
import CourseCard from "./CourseCard";

const coursesData = [
  {
    id: "01",
    title: "Cardiovascular Workouts",
    lesson: 10,
    students: 124,
    rating: 4.5,
    imgUrl: courseImg1,
  },

  {
    id: "02",
    title: "Abs and Functional Workouts",
    lesson: 16,
    students: 150,
    rating: 4.3,
    imgUrl: courseImg2,
  },

  {
    id: "03",
    title: "Flexibility and Mobility Workouts",
    lesson: 12,
    students: 12.5,
    rating: 5.9,
    imgUrl: courseImg3,
  },
];

const Courses = () => {
  return (
    <section>
      <Container>
        <Row>
          <Col lg="12" className="mb-5">
            <div
              className="course__top d-flex justify-content-between align-items-center"
              id="courses"
            >
              <div className="course__top__left w-50">
                <h2>Our Popular Workout plans</h2>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae
                  consequatur libero quod voluptatibus ullam quia quas, vitae
                  voluptatem recusandae reprehenderit!
                </p>
              </div>

              <div className="w-50 text-end">
                <button className="btn">See All</button>
              </div>
            </div>
          </Col>
          {coursesData.map((item) => (
            <Col lg="4" md="6" sm="6">
              <CourseCard key={item.id} item={item} />
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default Courses;
