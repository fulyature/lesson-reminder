import img from "../../img/b.jpeg";

const Header = () => {
  return (
    <div>
      <nav className="nav">
        <img src={img} alt="" />
      </nav>
      <h1>Lesson Reminder</h1>
    </div>
  );
};

export default Header;
