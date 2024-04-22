import Hero from "./Hero";

export default {
  title: "Components/Hero",
  component: Hero,
};

const Template = (args) => <Hero {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  type: "primary",
  title: "Primary Hero Title",
  subtitle: "This is a primary hero subtitle.",
};

export const Secondary = Template.bind({});
Secondary.args = {
  type: "secondary",
  title: "Secondary Hero Title",
  subtitle: "This is a secondary hero subtitle.",
};
