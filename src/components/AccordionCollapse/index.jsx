import React from "react";
import PropTypes from "prop-types";

import "./style.scss";

function AccordionCollapse({ title, textArray }) {
  return (
   
      <div class="accordions accordion-about mb-4">
        <div class="accordion">
          <input type="checkbox" id={`service-${title}`}/>

          <label class="accordion-header" for={`service-${title}`}>
            {title}
          </label>

          <div class="accodion-body"> <ul>{textArray.map((item, index) => (
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
