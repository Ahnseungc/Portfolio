import { setCookie } from "cookies-next";
import { motion } from "framer-motion";
import Link from "next/link";

import "./style.css";

import { data } from "../../data";

export interface ItemProps {
  id: string;
  title: string;
  category?: string | number;
  isSelected?: boolean;
}

const DIVIDER_HEIGHT = 5;

const Item = ({ id, category }: ItemProps) => {
  const itemClick = () => {
    setCookie("scroll_position", window.innerHeight * 2 + DIVIDER_HEIGHT * 2);
  };

  console.log(id);
  return (
    <li className="item">
      <motion.div layoutId={`item-motion-${id}`}>
        <Link href={`/${id}`} className="link" onClick={itemClick}>
          <div className="content">
            <motion.div
              className="title-motion"
              layoutId={`title-motion-${id}`}
            >
              <span className="category">{category}</span>
            </motion.div>
          </div>
        </Link>
      </motion.div>
    </li>
  );
};

const List = ({ selectedId }: { selectedId: string }) => {
  return (
    <ul className="list">
      {data.map((item: ItemProps) => (
        <Item key={item.id} {...item} isSelected={item.id === selectedId} />
      ))}
    </ul>
  );
};

export default List;
