import calculatorZ_img from "../assets/calculatorZ.png";
import _300baicodeZ_img from "../assets/300baicodeZ.jpg";
import ProjectTag from "./ProjectTag";

function WebProject() {
  return (
    <>
      <div className="row d-flex justify-content-center align-items-center w-100 mt-5">
        <div className="col-3">
          <ProjectTag
            _backgroundImage={_300baicodeZ_img}
            name="300 Bài Code Thiếu Nhi"
            technology="HTML, CSS, JavaScript"
            link="https://baoqg9104.github.io/300baicodeZ/"
            github="https://github.com/baoqg9104/300baicodeZ"
            reference={[`https://leetcode.com/`, `https://300baicode.com/`]}
          />
        </div>
        <div className="col-3">
          <ProjectTag
            _backgroundImage={calculatorZ_img}
            name="CalculatorZ"
            technology="HTML, CSS, JavaScript"
            link="https://baoqg9104.github.io/CalculatorZ/"
            github="https://github.com/baoqg9104/CalculatorZ"
            reference={[`https://www.frontendmentor.io/`]}
          />
        </div>
        <div className="col-3">
          {/* <ProjectTag _backgroundImage={calculatorZ_img} name="300 Bài Code Thiếu Nhi"/> */}
        </div>
      </div>
    </>
  );
}

export default WebProject;
