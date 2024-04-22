import Button from "./Button";
import { action } from "@storybook/addon-actions";

export default {
  title: "Components/Button",
  component: Button,
};

const Template = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  primary: true,
  children: "Primary Button",
  onClick: action("clicked"),
};

export const Secondary = Template.bind({});
Secondary.args = {
  secondary: true,
  children: "Secondary Button",
  onClick: action("clicked"),
};

export const Default = Template.bind({});
Default.args = {
  children: "Default Button",
  onClick: action("clicked"),
};
