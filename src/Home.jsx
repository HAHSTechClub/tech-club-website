import "./styles/Home.css";
import logo3d from "./assets/render4.png";
import heading from "./assets/large-logo-text.png";
import clubPhoto from "./assets/framed-photo.png";
import slide1 from "./assets/slide1.png";
import slide2 from "./assets/slide2.png";
import slide3 from "./assets/slide3.png";
import slide4 from "./assets/slide4.png";
import slide5 from "./assets/slide5.png";
import mockup from "./assets/tmcw-submission-page-mockup.png";

function Home() {
    return (
        <div className="home">
            <div className="hero">
                <img class="heading" src={heading} alt="" />
                <div className="values">Create ⋅ Learn ⋅ Inspire</div>
                <img class="logo-3d" src={logo3d} alt="" />
            </div>
            <section className="section1">
                <div>
                    <img class="club-photo" src={clubPhoto} alt="" />
                </div>
                <div>
                    <h2>Who we are.</h2>
                    <p>
                        We are a student-led group of technology enthusiasts at
                        Hurlstone Agricultural High School. Our club hosts
                        weekly sessions for all students from Years 7 to 12,
                        exploring exciting topics within programming, data
                        science, and robotics. Additionally, we play a key role
                        in organizing school-wide events, such as Challenge
                        Week, which coordinated in collaboration with the HAHS
                        Maths Circle to celebrate Pi Day 2024.
                    </p>
                </div>
            </section>
            <section className="section2">
                <h2>What we've covered.</h2>
                <p>
                    We've explored a diverse range of topics, including machine
                    learning, hands on programming in Python, and navigating
                    Linus with bash commands.{" "}
                </p>
                <div className="slide-gallery">
                    <img
                        src={slide1}
                        alt="exploring linux powerpoint title slide"
                    />
                    <img
                        src={slide2}
                        alt="learning python powerpoint title slide"
                    />
                    <img
                        src={slide3}
                        alt="cleaning data powerpoint title slide"
                    />
                    <img
                        src={slide4}
                        alt="machine learning powerpoint title slide"
                    />
                    <img
                        src={slide5}
                        alt="trivia and javascript powerpoint title slide"
                    />
                </div>
            </section>
            <section className="section3">
                <h2>What We Add to the School.</h2>
                <p>
                    To celebrate Pi Day in 2024, Tech Club collaborated with
                    HAHS Maths Circle to organize a week filled with fun, games,
                    and challenges. Our members developed a full-stack
                    submission page to facilitate a school-wide, crack-the-code
                    style challenge. This project is just one example of how we
                    use technology to enrich the school environment.
                </p>
                <img
                    class="mockup"
                    src={mockup}
                    alt="mockup of a submission page built by Tech Club members"
                />
            </section>
            <section className="section4">
                <h2>Get involved:</h2>
                <a href="/contacts">Contacts {">"}</a>
            </section>
        </div>
    );
}

export default Home;
