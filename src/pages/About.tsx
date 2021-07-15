import Navbar from "../components/Navbar";

const About = () => {
  return (
    <>
      <Navbar />
      <section className="aboutPage">
        <p>
          My name is Jesper Pettersson and I'm a soon to be junior front-end dev
          and this is my first project i made with TypeScript! Except TS I also
          used React, React-router-dom, SASS and Firestore to create this
          website. This website works as a blog just for me and noone else and I
          have a secret site where i can add new posts. You can see the code at
          my repo{" "}
          <span>
            <a
              href="https://github.com/Jesper-dev/blogts"
              target="_blank"
              rel="noreferrer"
            >
              here
            </a>
          </span>
          .
        </p>
      </section>
    </>
  );
};

export default About;
