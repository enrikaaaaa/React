import { CiCircleCheck, CiCircleInfo } from "react-icons/ci";

import { CiCircleQuestion } from "react-icons/ci";
import { MdError } from "react-icons/md";
import PropTypes from "prop-types";
import styled from "styled-components";

const NotificationsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  gap: 10px;
  width: 100%;
`;

const notificationColors = {
  primary: "#007bff",
  success: "#28a745",
  error: "#dc3545",
  warning: "#ffc107",
  default: "#007bff",
};

const NotificationIcons = {
  primary: CiCircleInfo,
  success: CiCircleCheck,
  error: MdError,
  warning: CiCircleQuestion,
  default: CiCircleInfo,
};

const NotificationItem = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  background-color: ${(props) =>
    notificationColors[props.type] || notificationColors.default};
  color: #fff;
  padding: 5px 10px;
  border-radius: 4px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
  width: 100%;

  svg {
    width: 5em;
    height: 5em;
    margin-right: 8px;
  }
`;

const Notifications = ({ notifications }) => {
  return (
    <NotificationsWrapper>
      {notifications &&
        notifications.map((notification, index) => {
          const Icon =
            NotificationIcons[notification.type] || NotificationIcons.default;
          return (
            <NotificationItem key={index} type={notification.type}>
              <Icon />
              {notification.message}
            </NotificationItem>
          );
        })}
    </NotificationsWrapper>
  );
};

Notifications.propTypes = {
  notifications: PropTypes.arrayOf(
    PropTypes.shape({
      message: PropTypes.string.isRequired,
      type: PropTypes.oneOf(["primary", "success", "error", "warning"]),
    })
  ),
};

export default Notifications;
