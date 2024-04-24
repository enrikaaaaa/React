import { ErrorMessage, Field } from "formik";

import PropTypes from "prop-types";

const FormikField = ({ name, ...props }) => {
  return (
    <div>
      <Field name={name} {...props} />
      <ErrorMessage name={name}>{(error) => <div>{error}</div>}</ErrorMessage>
    </div>
  );
};

FormikField.propTypes = {
  name: PropTypes.string.isRequired,
};

export default FormikField;
