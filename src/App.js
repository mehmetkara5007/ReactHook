import React, { useEffect } from "react";
import { useForm } from "./useForm";

const App = () => {
  const [values, handleChange] = useForm({ email: "", password: "" });
  // const [values2, handleChange2] = useForm({ name: "", surName: "" });

  useEffect(() => {
    console.log("renddder");
  });

  return (
    <div>
      <>
        <input name="email" value={values.email} onChange={handleChange} />
        <input
          name="password"
          type="password"
          value={values.password}
          onChange={handleChange}
        />
      </>
    </div>
  );
};

export default App;
