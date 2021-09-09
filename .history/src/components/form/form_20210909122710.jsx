import React from "react";
// import styles from "form.module.css";

const Form = (props) => {
  return (
    <>
      <section>
        <div>
          <input type="text" />
          <input type="text" />
          <select name="select" id="">
            <option value="dark">dark</option>
            <option value="light">light</option>
            <option value="colorful">colorful</option>
          </select>
        </div>
        <div>
          <input type="text" />
          <input type="text" />
        </div>
        <div>
          <textarea name="" id="" cols="30" rows="10"></textarea>
        </div>
        <div>
          <button>me</button>
          <button>delete</button>
        </div>
      </section>
    </>
  );
};

export default Form;
