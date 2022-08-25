import Cube from "react-3d-cube";

import { gitSvg } from "../../images/icon/gitIcon";
import { reactSvg } from "../../images/icon/reactIcon";
import { googleSvg } from "../../images/icon/googleIcon";
import { javaScriptSvg } from "../../images/icon/javaScriptIcon";
import { nextSvg } from "../../images/icon/nextIcon";
import { reduxSvg } from "../../images/icon/reduxIcon";

function Cube3d() {
    return (
        <div className="cube">
            <div className="cube-wrapper">
                <Cube size={275} index="front">
                    <div className="cube-side">{javaScriptSvg}</div>
                    <div className="cube-side">{gitSvg}</div>
                    <div className="cube-side">{reactSvg}</div>
                    <div className="cube-side">{googleSvg} </div>
                    <div className="cube-side">{nextSvg}</div>
                    <div className="cube-side">{reduxSvg}</div>
                </Cube>
            </div>
        </div>
    );
}

export default Cube3d;
