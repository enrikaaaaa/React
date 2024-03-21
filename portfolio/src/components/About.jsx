import "../styles/About.css";
import Knowledge from "./Knowledge";
import ListItem from "./ListItem";
import Contact from "./Contact";

function About() {
  return (
    <div className="About-section" id="1">
      <h1>About</h1>
      <p className="about-me">
        <h2>
          Hi there <div className="wave">👋</div>
        </h2>
        I am Enrika, a budding front-end developer thrilled to embark on this
        journey of discovery and growth in the world of web development. As a
        junior developer, I bring a blend of enthusiasm, curiosity, and a hunger
        for knowledge to every project I undertake.
        <h2>Passion for Front-End Development</h2> Front-end development is
        where I found my passion. The ability to shape user experiences through
        code fascinates me. From crafting layouts with HTML and CSS to adding
        interactivity with JavaScript, I am constantly amazed by the creative
        possibilities and the impact they can have on users.{" "}
        <h2>Learning and Development</h2> As a junior developer, I recognize the
        importance of continuous learning. I am dedicated to honing my skills
        and expanding my knowledge base. Whether it is through online courses,
        tutorials, or hands-on projects, I am always seeking opportunities to
        grow and improve. <h2>Tools and Technologies</h2> I am proficient in
        foundational technologies like HTML, CSS, and JavaScript, and I am eager
        to delve deeper into frameworks and libraries such as React. I am also
        familiar with version control systems like Git and platforms like
        GitHub, essential tools for modern development workflows.{" "}
        <h2>Let as Connect and Grow Together</h2> If you are searching for a
        junior front-end developer who as eager to learn, collaborate, and make
        a meaningful contribution to your team, I ad love to connect. Together,
        we can create innovative solutions and embark on an exciting journey of
        growth and development.
      </p>
      <div className="knowledge-container" id="2">
        <h1>Knowledge</h1>
        <Knowledge h2="Front-End">
          <ListItem li="HTML" />
          <ListItem li="CSS" />
          <ListItem li="JavaScript" />
          <ListItem li="React" />
        </Knowledge>
        <Knowledge h2="Back-End">
          <ListItem li="Node.js" />
          <ListItem li="Express" />
          <ListItem li="MongoDB" />
        </Knowledge>
        <Knowledge h2="Other">
          <ListItem li="Git" />
          <ListItem li="GitHub" />
        </Knowledge>
        <Contact />
      </div>
    </div>
  );
}

export default About;
