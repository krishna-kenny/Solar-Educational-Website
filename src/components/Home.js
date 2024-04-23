import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Nav = () => {
  const navigate = useNavigate();

  const showSelected = (section) => {
    navigate(`/home/${section}`);
  };

  const logout = () => {
    navigate(`/`);
  };

  return (
    <nav>
      <ul>
        <li>
          <button onClick={() => showSelected("company-profile")}>
            [ Company Profile / Introduction ]
          </button>
        </li>
        <li>
          <button onClick={() => showSelected("course-registration")}>
            [ Course Registration ]
          </button>
        </li>
        <li>
          <button onClick={() => showSelected("interactive-course-learning")}>
            [ Interactive Course Learning ]
          </button>
        </li>
        <li>
          <button onClick={() => showSelected("assessment")}>
            [ Assessment ]
          </button>
        </li>
        <li>
          <button onClick={() => showSelected("feedback-contact")}>
            [ Feedback and Contact Us ]
          </button>
        </li>
        <li>
          <button className="logout-button" onClick={() => logout()}>
            [ Logout ]
          </button>
        </li>
      </ul>
    </nav>
  );
};

const getRandomWordOfTheDay = () => {
  const spaceWords = [
    "Galaxy",
    "Nebula",
    "Supernova",
    "Comet",
    "Asteroid",
    "Black Hole",
    "Constellation",
    "Celestial",
    "Satellite",
    "Orbit",
    "Universe",
    "Astronaut",
    "Gravity",
    "Solar System",
    "Cosmology",
    "Exoplanet",
    "Lunar",
    "Interstellar",
    "Cosmic",
    "Milky Way",
  ];

  const randomIndex = Math.floor(Math.random() * spaceWords.length);
  return spaceWords[randomIndex];
};

export const CompanyProfile = () => {
  const [wordOfTheDay, setWordOfTheDay] = useState("");
  const [isAnimated, setIsAnimated] = useState(false);

  useEffect(() => {
    setWordOfTheDay(getRandomWordOfTheDay());
    setIsAnimated(true); // Trigger animation when component mounts
  }, []);

  return (
    <>
      <Nav />
      <div className="company-profile-container">
        <div
          id="word-of-the-day"
          className={`company-profile-title ${
            isAnimated ? "animated-slide" : ""
          }`}
        >
          <strong>Word of the Day:</strong> {wordOfTheDay}
        </div>
        <br />
        <div
          className={`company-profile-section ${
            isAnimated ? "animated-slide" : ""
          }`}
          style={{ animationDelay: "0.2s" }}
        >
          <span className="company-profile-section-title">Company Profile</span>
          <br />
          <span className="company-profile-section-content">
            {/* Company profile content */}
            Solarium is a pioneering educational platform dedicated to
            unraveling the wonders of our solar system. As a leading online
            resource, Solarium is committed to providing comprehensive and
            engaging content designed to foster curiosity, understanding, and
            appreciation for the cosmos. Our mission is to ignite a passion for
            astronomy and space exploration among learners of all ages,
            inspiring the next generation of scientists, educators, and
            enthusiasts.
          </span>
        </div>
        <div
          className={`company-profile-section ${
            isAnimated ? "animated-slide" : ""
          }`}
          style={{ animationDelay: "0.4s" }}
        >
          <span className="company-profile-section-title">Vision</span>
          <br />
          <span className="company-profile-section-content">
            {/* Vision content */}
            At Solarium, we envision a world where everyone has access to
            high-quality educational materials about the solar system. We strive
            to be the go-to destination for individuals seeking to expand their
            knowledge of the universe, offering innovative learning experiences
            that transcend geographical boundaries and cultural differences.
          </span>
        </div>
        <div
          className={`company-profile-section ${
            isAnimated ? "animated-slide" : ""
          }`}
          style={{ animationDelay: "0.6s" }}
        >
          <span className="company-profile-section-title">Introduction</span>
          <br />
          <span className="company-profile-section-content">
            {/* Introduction content */}
            Welcome to Solarium, your portal to the mesmerizing realms of our
            solar system. Our new website invites you to embark on an
            exhilarating journey through space as we unravel the mysteries of
            the planets that orbit our sun. Explore the rocky terrain of Mars,
            the swirling storms of Jupiter, and the icy landscapes of
            Neptune—all from the comfort of your own screen. Dive into immersive
            articles, captivating visuals, and interactive simulations that
            bring the wonders of the cosmos to life. Delve into the dynamics of
            planetary atmospheres, the intricacies of orbital mechanics, and the
            quest for extraterrestrial life. Our virtual planetarium offers a
            stunning tour of the night sky, allowing you to identify
            constellations and witness celestial events in real-time.
            <br />
            <br />
            Join our vibrant community of learners, educators, and space
            enthusiasts to share insights, ask questions, and engage in spirited
            discussions about the universe. Whether you're a seasoned astronomer
            or a curious novice, there's something for everyone at Solarium.
            Empowering discovery, sparking curiosity, and fostering a deeper
            understanding of the cosmos—welcome to Solarium, where the wonders
            of space await. Begin your odyssey today and let the exploration
            begin.
          </span>
        </div>
        {/* Repeat for other sections */}
      </div>
    </>
  );
};

export const CourseRegistration = () => {
  const [selectedCourses, setSelectedCourses] = useState([]);

  const courses = [
    {
      id: "sun",
      name: "Sun",
      image: "./assets/sun.jpg",
      description:
        "Grasp the fiery heart of our solar system—the Sun. Explore its nuclear fusion processes, sunspots, and the solar wind that shapes space weather.",
    },
    {
      id: "mercury",
      name: "Mercury",
      image: "./assets/mercury.jpg",
      description:
        "Embark on a celestial journey to explore the smallest planet in our solar system. Discover its extreme temperature variations, lack of atmosphere, and intriguing surface features.",
    },
    {
      id: "venus",
      name: "Venus",
      image: "./assets/venus.jpg",
      description:
        "Immerse yourself in the scorching realm of Venus, where thick clouds of sulfuric acid shroud the surface. Investigate its runaway greenhouse effect, intense volcanic activity, and the enigma of its slow retrograde rotation.",
    },
    {
      id: "earth",
      name: "Earth",
      image: "./assets/earth.jpg",
      description:
        "Dive into the intricate web of Earth’s geology, meteorology, and oceanography. Study plate tectonics, climate dynamics, and the delicate balance that sustains life.",
    },
    {
      id: "moon",
      name: "Moon",
      image: "./assets/moon.jpg",
      description:
        "Unearth the lunar mysteries that have fascinated humanity for eons. Study the Moon’s phases, craters, and ancient lava flows. Explore Apollo landing sites and the quest for water ice in permanently shadowed regions.",
    },
    {
      id: "mars",
      name: "Mars",
      image: "./assets/mars.jpg",
      description:
        "Venture to the rusty plains and towering volcanoes of Mars. Investigate evidence of ancient rivers, polar ice caps, and the possibility of past life.",
    },
    {
      id: "jupiter",
      name: "Jupiter",
      image: "./assets/jupiter.jpg",
      description:
        "Plunge into the colossal storm systems and mesmerizing cloud bands of Jupiter. Learn about its immense magnetic field, dozens of moons, and the Great Red Spot.",
    },
    {
      id: "saturn",
      name: "Saturn",
      image: "./assets/saturn.jpg",
      description:
        "Delve into the captivating world of Saturn, adorned with its magnificent ring system. Study the icy particles that create these ethereal rings and unravel the mysteries of its moon Titan.",
    },
    {
      id: "uranus",
      name: "Uranus",
      image: "./assets/uranus.jpg",
      description:
        "Explore the sideways wonder of Uranus, a planet that rolls along its orbital path like a cosmic barrel. Investigate its icy composition, faint ring system, and peculiar magnetic field.",
    },
    {
      id: "neptune",
      name: "Neptune",
      image: "./assets/neptune.jpg",
      description:
        "Plunge into the azure depths of Neptune, the windiest planet in the solar system. Study its turbulent atmosphere, dark storms, and the elusive Great Dark Spot.",
    },
  ];

  function handleCourseSelect(event) {
    const courseId = event.target.id.replace("-checkbox", "");
    const isChecked = event.target.checked;

    // Update selected courses based on checkbox state
    if (isChecked) {
      setSelectedCourses((prevSelected) => [...prevSelected, courseId]);
    } else {
      setSelectedCourses((prevSelected) =>
        prevSelected.filter((course) => course !== courseId)
      );
    }
  }

  function showSelectedCourses() {
    return selectedCourses.map((courseId) => (
      <div key={courseId} className="selected-course">
        <h3>{courseId.toUpperCase()}</h3>
        <p>{courses.find((course) => course.id === courseId).description}</p>
      </div>
    ));
  }

  return (
    <div className="course-registration-container-full">
      <Nav />
      <div className="course-registration-container">
        <h1>Course Registration</h1>
        <form>
          {courses.map((course) => (
            <div key={course.id} className="course-checkbox">
              <input
                type="checkbox"
                id={`${course.id}-checkbox`}
                onChange={handleCourseSelect}
              />
              <label htmlFor={`${course.id}-checkbox`}>{course.name}</label>
            </div>
          ))}
        </form>
        <div>
          <h2>Selected Courses:</h2>
          {selectedCourses.length === 0 ? (
            <p>No courses selected</p>
          ) : (
            showSelectedCourses()
          )}
        </div>
        {/* Add submit button and other form elements as needed */}
      </div>
    </div>
  );
};

export const InteractiveCourseLearning = () => {
  // Array of objects containing video URLs and descriptions
  const items = [
    {
      videoUrl: "https://www.youtube.com/embed/6EbuAEagQj4?si=Vu-JCoR3_hM1dVCZ",
      description:
        "Scientists employ ultraviolet imaging to unravel the Sun’s mysteries. By peering into its fiery depths, they uncover intricate details about its dynamic surface, magnetic fields, and solar flares. The Solar Dynamics Observatory (SDO), equipped with 4K resolution cameras, provides unprecedented views, revealing the Sun’s mesmerizing dance of energy and turbulence",
    },
    {
      videoUrl: "https://www.youtube.com/embed/0KBjnNuhRHs?si=O-KWMIUNtdj2oDKn",
      description:
        "The planet Mercury is named after the messenger of the Roman gods due to its fleeting nature across the sky. It’s the smallest planet in our solar system and is slowly shrinking. But what’s truly remarkable is its incredible speed—Mercury orbits the Sun at a whopping 112,000 miles per hour! Despite being closest to the Sun, it isn’t the hottest planet; that title goes to Venus. Still, Mercury’s surface temperature can swing from a scorching 800°F during the day to -290°F at night.",
    },
    {
      videoUrl: "https://www.youtube.com/embed/BvXa1n9fjow?si=nR9MLEUa8iCXnUlA",
      description:
        "Venus, named after the ancient Roman goddess of beauty, dazzles in our night sky. Its exceptional brightness sets it apart, outshining every planet and star. But what lies beneath this celestial allure? Let’s explore: Volcanoes: Venus’s surface is dotted with volcanoes, remnants of ancient eruptions. Stormy Skies: The planet’s atmosphere is a tempest of fierce storms. Surprising Feature: Venus’s most intriguing trait? It outshines the night sky due to its reflective cloud cover.",
    },
    {
      videoUrl: "https://www.youtube.com/embed/HCDVN7DCzYE?si=Z2741rLAHipVVyUd",
      description:
        "Earth, our precious home planet, is a remarkable oasis in the vastness of space. It’s the only known planet that sustains life. Let’s delve into its origins and the essential ingredients that make it a unique global ecosystem: Life’s Cradle: Earth’s nurturing environment allows life to flourish. From lush forests to vast oceans, it’s a haven for diverse organisms. Blue Gem: Our planet’s azure hue is due to its abundant water, covering about 71% of its surface. Dynamic Forces: Earth’s tectonic plates shift and collide, shaping continents and creating mountains. Life-Sustaining Atmosphere: The atmosphere shields us from harmful radiation and provides the precious oxygen we breathe.",
    },
    // Add more items as needed
  ];

  return (
    <>
      <Nav /> {/* Assuming you have a navigation component */}
      <div className="interactive-course-learning">
        <h1 className="padding">Interactive Course Learning</h1>
        <div className="items-container">
          {items.map((item, index) => (
            <div key={index} className="item">
              <div className="video-container">
                <iframe
                  width="560"
                  height="315"
                  src={item.videoUrl}
                  title={`Video ${index + 1}`}
                  frameBorder="0"
                  allowFullScreen
                ></iframe>
              </div>
              <div className="description">
                <p>{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export const Assessment = () => {
  const [userAnswers, setUserAnswers] = useState(Array(10).fill(null));

  const correctAnswers = ["b", "c", "a", "d", "a", "c", "b", "d", "c", "a"];

  const questions = [
    {
      question: "What is the largest planet in our solar system?",
      options: ["Earth", "Jupiter", "Mars", "Venus"],
    },
    {
      question: 'Which planet is known as the "Red Planet"?',
      options: ["Venus", "Jupiter", "Mars", "Saturn"],
    },
    {
      question: "Which planet is closest to the Sun?",
      options: ["Jupiter", "Venus", "Mercury", "Mars"],
    },
    {
      question: "Which planet has the most moons in our solar system?",
      options: ["Earth", "Jupiter", "Saturn", "Mars"],
    },
    {
      question: "Which planet is famous for its beautiful rings?",
      options: ["Venus", "Mars", "Saturn", "Neptune"],
    },
    {
      question:
        'Which planet is often referred to as the "Evening Star" or the "Morning Star"?',
      options: ["Venus", "Mars", "Jupiter", "Mercury"],
    },
    {
      question: "Which planet has the tallest volcano in the solar system?",
      options: ["Earth", "Mars", "Venus", "Mercury"],
    },
    {
      question:
        "Which planet is known for its extreme temperatures and sulfuric acid clouds?",
      options: ["Earth", "Mars", "Venus", "Jupiter"],
    },
    {
      question:
        "Which planet has a moon named Titan that is larger than the planet Mercury?",
      options: ["Mars", "Jupiter", "Saturn", "Uranus"],
    },
    {
      question:
        "Which planet's rotational axis is tilted almost parallel to its orbital plane, causing extreme seasonal variations?",
      options: ["Uranus", "Venus", "Jupiter", "Saturn"],
    },
  ];

  const handleChange = (event, index) => {
    const updatedAnswers = [...userAnswers];
    updatedAnswers[index] = event.target.value;
    setUserAnswers(updatedAnswers);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    let score = 0;
    for (let i = 0; i < 10; i++) {
      if (userAnswers[i] === correctAnswers[i]) {
        score++;
      }
    }
    alert(`Your score: ${score}/10`);
    setUserAnswers(Array(10).fill(null));
  };

  return (
    <>
      <Nav />
      <div className="assessment-container">
        <h1 className="assessment-title">Assessment</h1>
        <form id="space-assessment" onSubmit={handleSubmit}>
          <ol className="question-list">
            {questions.map((questionObj, index) => (
              <li key={index} className="question-item">
                <p className="question-text">{questionObj.question}</p>
                <div className="options-container">
                  {questionObj.options.map((option, optionIndex) => (
                    <div key={optionIndex} className="option-item">
                      <input
                        type="radio"
                        name={`q${index + 1}`}
                        value={String.fromCharCode(97 + optionIndex)}
                        onChange={(e) => handleChange(e, index)}
                        checked={
                          userAnswers[index] ===
                          String.fromCharCode(97 + optionIndex)
                        }
                      />
                      <label className="option-label">
                        {String.fromCharCode(65 + optionIndex)}) {option}
                      </label>
                    </div>
                  ))}
                </div>
              </li>
            ))}
          </ol>
          <button type="submit" className="submit-button">
            Submit
          </button>
        </form>
      </div>
    </>
  );
};

export const FeedbackContact = () => {
  const map =
    'https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d904726.6131739549!2d85.24565535!3d27.65273865!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2snp!4v1652535615693!5m2!1sen!2snp" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"';
  return (
    <>
      <Nav />
      <section className="contacts padding">
        <div className="container shadow flexSB">
          <div className="left">
            <iframe title="map" src={map}></iframe>
          </div>
          <div className="right">
            <h1>Contact us</h1>
            <p>We're open for any suggestion or just to have a chat</p>

            <div className="items">
              <div className="box">
                <h4>ADDRESS:</h4>
                <p>Bangalore</p>
              </div>
              <div className="box">
                <h4>EMAIL:</h4>
                <p>krishna.kenny4@gmail.com</p>
              </div>
              <div className="box">
                <h4>PHONE:</h4>
                <p>+ 1235 2355 98</p>
              </div>
            </div>

            <form action="" className="contact-form">
              <input type="text" placeholder="Name" className="input-field" />
              <input type="email" placeholder="Email" className="input-field" />
              <input
                type="text"
                placeholder="Subject"
                className="input-field"
              />
              <textarea
                cols="30"
                rows="10"
                placeholder="Create a message here..."
                className="input-field"
              ></textarea>
              <button className="primary-btn">SEND MESSAGE</button>
            </form>

            <div className="social-links">
              <h3>Follow us here</h3>
              <span>FACEBOOK TWITTER INSTAGRAM</span>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
