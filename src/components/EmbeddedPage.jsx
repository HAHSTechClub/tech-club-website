import "../styles/EmbeddedPage.css";

function EmbeddedPage({ embedLink }) {
    return (
        <div className="embedded-page">
            <iframe src={embedLink} frameBorder="0"></iframe>
        </div>
    );
}

export default EmbeddedPage;
