import { Field, Form, Formik } from "formik";
import { getUsers, postUser } from "../../api/Users/Users";
import { useEffect, useState } from "react";

import Button from "@mui/material/Button";
import SendIcon from "@mui/icons-material/Send";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import UserBlock from "../../components/Block/UserBlock";
import styled from "styled-components";

const StyledFormContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-bottom: 20px;
  width: 600px;
  margin: 0 auto;
  & > Form {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 20px;
    margin-bottom: 20px;
  }
`;

const ButtonContainer = styled.div`
  grid-column: span 2;
  display: flex;
  justify-content: center;
`;

const FullWidthButton = styled(Button)`
  width: 100%;
`;

const Users = () => {
  const [users, setUsers] = useState([]);
  const [newUser, setNewUser] = useState(null);

  useEffect(() => {
    getUsers().then((res) => {
      setUsers(res.data);
    });
  }, []);

  useEffect(() => {
    if (newUser) {
      setUsers((prevUsers) => [newUser, ...prevUsers]);
    }
  }, [newUser]);

  const initialValues = {
    name: "",
    username: "",
    email: "",
    address: {
      street: "",
      suite: "",
      city: "",
      zipcode: "",
      geo: {
        lat: "",
        lng: "",
      },
    },
    phone: "",
    website: "",
    company: {
      name: "",
      catchPhrase: "",
      bs: "",
    },
  };

  const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;

  const validate = (values) => {
    const errors = {};

    if (!values.name) {
      errors.name = "Required";
    }
    if (!values.username) {
      errors.username = "Required";
    }
    if (!values.email) {
      errors.email = "Required";
    } else if (!emailRegex.test(values.email)) {
      errors.email = "Invalid email address";
    }

    return errors;
  };

  const handleSubmit = async (values, { resetForm }) => {
    try {
      const response = await postUser(values);
      setNewUser(response.data);
      resetForm();
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <h1>Users List</h1>
      <Formik
        initialValues={initialValues}
        onSubmit={handleSubmit}
        validate={validate}
      >
        {({ errors, touched }) => (
          <StyledFormContainer>
            <Typography variant="h3" component="h3">
              Add User
            </Typography>

            <Form>
              <Field
                as={TextField}
                name="name"
                type="text"
                label="Name"
                variant="outlined"
                fullWidth
                error={errors.name && touched.name}
                helperText={errors.name && touched.name ? errors.name : ""}
              />
              <Field
                as={TextField}
                name="username"
                type="text"
                label="Username"
                variant="outlined"
                fullWidth
                error={errors.username && touched.username}
                helperText={
                  errors.username && touched.username ? errors.username : ""
                }
              />
              <Field
                as={TextField}
                name="email"
                type="email"
                label="Email"
                variant="outlined"
                fullWidth
                error={errors.email && touched.email}
                helperText={errors.email && touched.email ? errors.email : ""}
              />
              <Field
                as={TextField}
                name="address.street"
                type="text"
                label="Street"
                variant="outlined"
                fullWidth
              />
              <Field
                as={TextField}
                name="address.suite"
                type="text"
                label="Suite"
                variant="outlined"
                fullWidth
              />
              <Field
                as={TextField}
                name="address.city"
                type="text"
                label="City"
                variant="outlined"
                fullWidth
              />
              <Field
                as={TextField}
                name="address.zipcode"
                type="text"
                label="Zipcode"
                variant="outlined"
                fullWidth
              />
              <Field
                as={TextField}
                name="address.geo.lat"
                type="text"
                label="Latitude"
                variant="outlined"
                fullWidth
              />
              <Field
                as={TextField}
                name="address.geo.lng"
                type="text"
                label="Longitude"
                variant="outlined"
                fullWidth
              />
              <Field
                as={TextField}
                name="phone"
                type="text"
                label="Phone"
                variant="outlined"
                fullWidth
              />
              <Field
                as={TextField}
                name="website"
                type="text"
                label="Website"
                variant="outlined"
                fullWidth
              />
              <Field
                as={TextField}
                name="company.name"
                type="text"
                label="Company Name"
                variant="outlined"
                fullWidth
              />
              <Field
                as={TextField}
                name="company.catchPhrase"
                type="text"
                label="Catch Phrase"
                variant="outlined"
                fullWidth
              />
              <Field
                as={TextField}
                name="company.bs"
                type="text"
                label="Business BS"
                variant="outlined"
                fullWidth
              />
              <ButtonContainer>
                <FullWidthButton
                  variant="contained"
                  endIcon={<SendIcon />}
                  type="submit"
                >
                  Send
                </FullWidthButton>
              </ButtonContainer>
            </Form>
          </StyledFormContainer>
        )}
      </Formik>
      <UserBlock users={users} />
    </div>
  );
};

export default Users;
