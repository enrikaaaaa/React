import "./Main.css"; // Import the CSS file for styling

const Main = () => {
  return (
    <div className="container">
      <header>
        <h1>Welcome to User Management System</h1>
      </header>
      <section className="hero">
        <div className="hero-content">
          <h2>Manage Your Users Efficiently</h2>
          <p>
            Explore our user management system to view and manage your users
            with ease.
          </p>
          <a href="/users" className="btn">
            Go to users
          </a>
        </div>
      </section>
    </div>
  );
};

export default Main;
