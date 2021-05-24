import { Link } from "react-router-dom";

function Course({ course }) {
  const { name, category, price } = course;

  return (
    <div className="course">
      <h1>{name}</h1>
      <h2>{category}</h2>
      <h3> Cost of the course : {price}</h3>
      <button>
        <Link to="/enquire"> Enquire </Link>
      </button>
    </div>
  );
}

export default Course;
