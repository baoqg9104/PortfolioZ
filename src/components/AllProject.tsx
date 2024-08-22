import ProjectTag from "./ProjectTag";
import calculatorZ_img from "../assets/calculatorZ.png";
import _300baicodeZ_img from "../assets/300baicodeZ.jpg";

function AllProject() {
  return (
    <>
      <div className="row d-flex justify-content-center align-items-center w-100 mt-5">
        <div className="col-3">
          <ProjectTag
            _backgroundImage={_300baicodeZ_img}
            name="300 Bài Code Thiếu Nhi"
          />
        </div>
        <div className="col-3">
          <ProjectTag _backgroundImage={calculatorZ_img} name="CalculatorZ" />
        </div>
        <div className="col-3">
          {/* <ProjectTag _backgroundImage={calculatorZ_img} name="300 Bài Code Thiếu Nhi"/> */}
        </div>
      </div>
    </>
  );
}

export default AllProject;
