import React from "react";
import propTypes from "prop-types";

export default function List(props) {
  const clasName = ["list-reset"];
  clasName.push(props.clasName);
  if (props.isSmall) clasName.push("text-xs");
  return (
    <ul className={clasName.join(" ")}>
      {props.data.map((list, index) => {
        return (
          <li key={index} className={list.isChecked ? "is-checked" : ""}>
            {list.content}
          </li>
        );
      })}
    </ul>
  );
}
List.propTypes = {
  className: propTypes.string,
  data: propTypes.array,
  isSmall: propTypes.bool,
};
