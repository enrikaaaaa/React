import "./App.css";
import logo from "./assets/logo.png";
import Header_img from "./assets/Header-img.jpeg";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="Logo">
          <img src={logo} className="App-logo" alt="logo" />
        </div>
        <nav>
          <ul>
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">Product</a>
            </li>
            <li>
              <a href="#">Company</a>
            </li>
            <li>
              <a href="#">Contact</a>
            </li>
          </ul>
        </nav>
      </header>
      <body>
        <div className="Hero">
          <img className="Hero-img" src={Header_img}></img>
        </div>
        <div className="info-container">
          <div className="category-cards">
            <div className="category-card">
              <h1>About</h1>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae
                architecto repudiandae eum accusantium ducimus? Ipsum id dolorum
                aperiam corporis adipisci, officia amet obcaecati suscipit nihil
                quis nam doloremque iure distinctio.
              </p>
            </div>
            <div className="category-card">
              <h1>Company</h1>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae
                architecto repudiandae eum accusantium ducimus? Ipsum id dolorum
                aperiam corporis adipisci, officia amet obcaecati suscipit nihil
                quis nam doloremque iure distinctio.
              </p>
            </div>
            <div className="category-card">
              <h1>Services</h1>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae
                architecto repudiandae eum accusantium ducimus? Ipsum id dolorum
                aperiam corporis adipisci, officia amet obcaecati suscipit nihil
                quis nam doloremque iure distinctio.
              </p>
            </div>
          </div>
          <div className="content-card">
            <div className="content-container">
              <h1>Content</h1>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione
                culpa veritatis eum, impedit necessitatibus ipsa laborum
                aliquid. Consequatur quas voluptatum beatae dicta recusandae
                nulla tenetur dolorem omnis, quo nemo. Necessitatibus?
              </p>
              <h2>Sub Header</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque
                ad quaerat consectetur voluptas quibusdam vel vitae asperiores
                voluptatem error. Illum quasi adipisci ipsum deserunt voluptatum
                expedita possimus consequatur odit labore.
              </p>
            </div>
            <div className="down-navigation">
              <h2>Navigation</h2>
              <ul>
                <li>
                  <a href="#">Home</a>
                </li>
                <li>
                  <a href="#">Product</a>
                </li>
                <li>
                  <a href="#">Company</a>
                </li>
                <li>
                  <a href="#">Contact</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </body>
    </div>
  );
}

export default App;
