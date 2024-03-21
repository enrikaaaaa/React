import { useEffect, useState } from "react";
import { fetchUser } from "../../api/api";
import { useParams } from "react-router-dom";
import "./User.css";

const User = () => {
  const [filteredUser, setFilteredUser] = useState([]);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const { id } = useParams();

  useEffect(() => {
    fetchUser(id)
      .then((response) => {
        setFilteredUser(response.data);
      })
      .catch((error) => {
        setError(error.message);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, [id]);

  if (isLoading) {
    return (
      <div className="container-spinner">
        <div className="spinner-frame">
          <div className="spinner-cover"></div>
          <div className="spinner-bar"></div>
        </div>
      </div>
    );
  }

  return (
    <div className="userInfoConainer">
      <h1 className="heading">User info</h1>

      <div className="OneUserCard">
        <div className="userCardOwnerName">
          <h2>{filteredUser.name}</h2>
        </div>
        <div className="userInfo">
          <p>Email:</p> <p>{filteredUser.email}</p>
        </div>
        <div className="userInfo">
          <p>Username:</p> <p>{filteredUser.username}</p>
        </div>
        <div className="adressBlock">
          <div>
            <p>
              <b>Address:</b>
            </p>
          </div>
          <div>
            <p>Street: </p> <p>{filteredUser.address.street}</p>
          </div>
          <div>
            <p>Suite:</p>
            <p> {filteredUser.address.suite}</p>
          </div>
          <div>
            <p>City:</p>
            <p>{filteredUser.address.city}</p>
          </div>
          <div>
            <p>ZipCode:</p>
            <p>{filteredUser.address.zipcode}</p>
          </div>
          <div>
            <p>
              <b>Geolocation:</b>
            </p>
          </div>
          <div>
            <p>Latitude:</p>
            <p>{filteredUser.address.geo.lat}</p>
          </div>
          <div>
            <p>Langtitude:</p>
            <p> {filteredUser.address.geo.lng}</p>
          </div>
        </div>

        <div className="userInfo">
          <p>Phone:</p> <p>{filteredUser.phone}</p>
        </div>
        <div className="userInfo">
          <p>Website:</p> <p>{filteredUser.website}</p>
        </div>
        <div className="companyBlock">
          <div>
            <p>
              <b>Company information:</b>
            </p>
          </div>
          <div>
            <p>Name:</p>
            <p>{filteredUser.company.name}</p>
          </div>
          <div>
            <p>Phrase:</p>
            <p>{filteredUser.company.catchPhrase}</p>
          </div>
          <div>
            <p>BS:</p>
            <p>{filteredUser.company.bs}</p>
          </div>
        </div>
      </div>

      {error && <div>{error}</div>}
      <button
        onClick={() => (window.location.href = "/users")}
        className="back-button"
      ></button>
    </div>
  );
};

export default User;
