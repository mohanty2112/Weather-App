import React, { useState } from "react";
import { Field, Form, Formik } from "formik";
import * as Yup from "yup";

const SignupSchema = Yup.object().shape({
  fahrenheit: Yup.number()
    .min(-459.67,"Temperature can not go below absolute Zero (lowest limit of the thermodynamic temperature scale), which is -459.67 Fahrenheit"),

    celsius: Yup.number()
    .min(-273.15,"Temperature can not go below absolute Zero (lowest limit of the thermodynamic temperature scale), which is -273.15 Celsius")

});

function TempConverter() {
  const [initialFormValues] = useState({
    fahrenheit: "",
    celsius: "",
  });

  const handleFormSubmit = async (values) => {
 
    function showMsg(msg) {
        let msgDiv = document.getElementById("msg")
        msgDiv.innerText = msg
    }

if(values.fahrenheit === "" && values.celsius=== "") 
   {
    showMsg("Enter any one Temperature")
    }else if ( values.fahrenheit=== "") {
        values.fahrenheit = Math.floor((values.celsius)*1.8 + 32 * 100)/100
        showMsg("")
    } else {
        values.celsius= Math.floor(((values.fahrenheit -32)/1.8) * 100)/100
        showMsg("")
    }

  };

  return (
    <>
 <div className="TempConv">
 <h1>Temperature Converter</h1>

      <Formik validationSchema={SignupSchema} initialValues={initialFormValues} onSubmit={handleFormSubmit}>
      {({ errors, touched }) => (
        <Form className="form">
          <div>
            <Field
              type="number"
              name="fahrenheit"
              placeholder="Enter Fahrenheit"
              className="Field"
            ></Field>
            {errors.fahrenheit && touched.fahrenheit ? (
                <div className="red"> {errors.fahrenheit}</div>
              ) : null}
          </div>

          <div>
            <Field
              type="number"
              name="celsius"
              placeholder="Enter Celsius"
              className="Field"
            ></Field>
            {errors.celsius && touched.celsius ? (
                <div className="red"> {errors.celsius}</div>
              ) : null}
          </div>
          <div>
            <button className="button" type="submit">
              Convert
            </button>
            <button className="button" type="reset" refresh>
              Reset
            </button>
          </div>
        </Form>
          )}
      </Formik>
      <div class="result1" id="msg"></div>
      </div>
    </>
  );
}

export default TempConverter;
