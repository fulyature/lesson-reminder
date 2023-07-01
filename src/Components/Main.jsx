import Data from "../helper/data";

import LessonCard from "./LessonCard/LessonCard";
import "./main.css";
const Main = () => (
  <div className="container">
    {Data.map((elem) => (
      <LessonCard item={elem} />
    ))}
  </div>
);

export default Main;
