import { ButtonBase, Card, CardContent } from "@mui/material";
import { useEffect, useState } from "react";

import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import PropTypes from "prop-types";
import styled from "styled-components";

const UserContainer = styled.div`
  background-color: #f9f9f9;
  display: flex;
  flex-direction: column;
  padding: 10px;
  width: 30vw;
  min-height: 200px;
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

const HandledButtonBase = styled(ButtonBase)`
  gap: 20px;
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

  useEffect(() => {
    setUserList(users);
  }, [users]);

  const HandleDelete = (userId) => {
    const updatedUsers = userList.filter((user) => user.id !== userId);
    setUserList(updatedUsers);
  };

  return (
    <div>
      <CardsContent>
        {userList.map((user) => (
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
            <HandledButtonBase>
              <div onClick={() => HandleEdit(user.id)}>
                <HandleEditIcon />
              </div>
              <div onClick={() => HandleDelete(user.id)}>
                <HandledDeleteIcon />
              </div>
            </HandledButtonBase>
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
