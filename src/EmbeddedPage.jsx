import "./EmbeddedPage.css";
import AnimatedPage from "./AnimatedPage";

function EmbeddedPage({ embedLink }) {
    return (
        <AnimatedPage>
            <div className="embedded-page">
                <iframe src={embedLink} frameborder="0"></iframe>
            </div>
        </AnimatedPage>
    );
}

export default EmbeddedPage;
