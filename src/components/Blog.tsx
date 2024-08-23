import styles from "../styles/Blog.module.css";

function Blog() {
  return (
    <>
      <div
        className={`${styles.background} container-fluid d-flex justify-content-center`}
        style={{padding: "90px"}}
      >
        <div className="row">
          <h1
            className="fw-bold text-uppercase"
            style={{
              fontSize: "50px",
              color: "white",
              textShadow: "1.5px 1.5px 3px black",
            }}
          >
            My{" "}
            <span style={{ color: "#00b4be", filter: "brightness(1.2)" }}>
              blog
            </span>
          </h1>
        </div>
      </div>
    </>
  );
}

export default Blog;
