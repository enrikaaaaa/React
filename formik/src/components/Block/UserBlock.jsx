import CardContent from "@mui/material/CardContent";
import PropTypes from "prop-types";
import styled from "styled-components";

const UserContainer = styled.div`
  background-color: #f9f9f9;
  display: flex;
  flex-direction: column;
  padding: 20px;
  border-radius: 5px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  width: 300px;
`;

const CardsContent = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  justify-content: center;
  margin-top: 20px;
`;

const UserBlock = ({ users }) => {
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
