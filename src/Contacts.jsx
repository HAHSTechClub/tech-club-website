import AnimatedPage from "./AnimatedPage";
import EmbeddedPage from "./EmbeddedPage";

function Contacts() {
    return (
        <AnimatedPage>
            <EmbeddedPage embedLink="https://hahstechclub.github.io/tech-club-contacts/" />
        </AnimatedPage>
    );
}

export default Contacts;
