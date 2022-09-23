import React from "react";
import PropTypes from "prop-types";

import "./style.scss";

function AccordionCollapse({ title, textArray }) {
  return (
   
      <div className="accordions accordion-about mb-4">
        <div className="accordion">
          <input type="checkbox" id={`service-${title}`}/>

          <label className="accordion-header" htmlFor={`service-${title}`}>
            {title}
          </label>

          <div className="accodion-body"> <ul>{textArray.map((item, index) => (
          <li key={`item-${index}`}>{item}</li>
        ))}</ul></div>
        </div>
      </div>

  );
}
AccordionCollapse.propTypes = {
  title: PropTypes.string.isRequired,
  textArray: PropTypes.arrayOf(PropTypes.string).isRequired,
};
export default AccordionCollapse;
