import { Button, ButtonBase, Card, CardContent } from "@mui/material";

import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import PropTypes from "prop-types";
import styled from "styled-components";
import { useState } from "react";

const UserContainer = styled.div`
  background-color: #f9f9f9;
  display: flex;
  flex-direction: column;
  padding: 10px;
  width: 30vw;
  height: 50vh;
  border-radius: 15px;
  box-shadow: 2px 2px 5px #200ec7c9;
  border: 1px solid #200ec7c9;
`;

const CardsContent = styled(Card)`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  align-items: center;
  justify-content: center;
  margin-top: 20px;
  justify-content: flex-start;
`;

const HandledDeleteIcon = styled(DeleteIcon)`
  color: red;
`;

const HandleEditIcon = styled(EditIcon)`
  color: green;
`;

const HandleEdit = (userId) => {
  console.log("Edit user with ID:", userId);
};

const UserBlock = ({ users }) => {
  const [userList, setUserList] = useState(users);

  const HandleDelete = (userId) => {
    const updatedUsers = userList.filter((user) => user.id !== userId);
    setUserList(updatedUsers);
  };

  return (
    <div>
      <CardsContent>
        {users.map((user) => (
          <UserContainer key={user.id}>
            <CardContent>
              <strong>ID:</strong> {user.id}
            </CardContent>
            <CardContent>
              <strong>Name:</strong> {user.name}
            </CardContent>
            <CardContent>
              <strong>Username:</strong> {user.username}
            </CardContent>
            <CardContent>
              <strong>Email:</strong> {user.email}
            </CardContent>
            <CardContent>
              <strong>Phone:</strong> {user.phone}
            </CardContent>
            <CardContent>
              <strong>Website:</strong> {user.website}
            </CardContent>
            <CardContent>
              <strong>Address:</strong> {user.address.street},
              {user.address.suite}, {user.address.city}, {user.address.zipcode}
            </CardContent>
            <CardContent>
              <strong>Geo:</strong> {user.address.geo.lat},
              {user.address.geo.lng}
            </CardContent>
            <CardContent>
              <strong>Company:</strong> {user.company.name},
              {user.company.catchPhrase}, {user.company.bs}
            </CardContent>
            <ButtonBase>
              <Button onClick={() => HandleEdit(user.id)}>
                <HandleEditIcon />
              </Button>
              <Button onClick={() => HandleDelete(user.id)}>
                <HandledDeleteIcon />
              </Button>
            </ButtonBase>
          </UserContainer>
        ))}
      </CardsContent>
    </div>
  );
};

UserBlock.propTypes = {
  users: PropTypes.array.isRequired,
};

export default UserBlock;
