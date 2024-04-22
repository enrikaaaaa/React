import Button from "../src/components/Button/Button";
import Hero from "./components/Hero/Hero";
import Notifications from "./components/Notifications/Notifications";

const App = () => {
  return (
    <div>
      <Button primary>Click me</Button>
      <br />
      <br />
      <Button secondary>Click me</Button>
      <br />
      <br />
      <Button disabled>Click me</Button>
      <br />
      <br />
      <Notifications
        notifications={[
          { message: "Primary notification", type: "primary" },
          { message: "Success notification", type: "success" },
          { message: "Warning notification", type: "warning" },
          { message: "Error notification", type: "error" },
        ]}
      />
      <Hero
        type="primary"
        title="Primary Hero Title"
        subtitle="This is a primary hero subtitle."
      />
      <br />
      <br />
      <Hero
        type="secondary"
        title="Secondary Hero Title"
        subtitle="This is a secondary hero subtitle."
      />
    </div>
  );
};

export default App;
