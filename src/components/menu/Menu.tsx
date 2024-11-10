import { Link } from "react-router-dom";
import "./menu.scss";
import { menu } from "../../data";

const Menu = () => {
  return (
    <div className="menu">
      {menu.map((item) => (
        <div className="item">
          <div className="title">{item.title}</div>
          {item.listItems.map((listItem) => (
            <Link to="/" className="listItem">
              <img src={listItem.icon} alt="" />
              <div className="listItemTitle">{listItem.title}</div>
            </Link>
          ))}
        </div>
      ))}
    </div>
  );
};

export default Menu;
