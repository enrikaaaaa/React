import Notifications from "./Notifications";
import { action } from "@storybook/addon-actions";

export default {
  title: "Components/Notifications",
  component: Notifications,
};

const Template = (args) => <Notifications {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  notifications: [{ message: "Primary notification", type: "primary" }],
  onClick: action("notification clicked"),
};

export const Success = Template.bind({});
Success.args = {
  notifications: [{ message: "Success notification", type: "success" }],
  onClick: action("notification clicked"),
};

export const Error = Template.bind({});
Error.args = {
  notifications: [{ message: "Error notification", type: "error" }],
  onClick: action("notification clicked"),
};
