import React from "react";
import styles from "from.module.css";

const Form = (props) => {
  return (
    <>
      <section>
        <div>
          <input type="text" />
          <input type="text" />
          <select name="select" id=""></select>
          <option value="dark">dark</option>
          <option value="light">light</option>
          <option value="colorful">colorful</option>
        </div>
        <div>
          <input type="text" />
          <input type="text" />
        </div>
        <div>
          <textarea name="" id="" cols="30" rows="10"></textarea>
        </div>
      </section>
    </>
  );
};

export default Form;
