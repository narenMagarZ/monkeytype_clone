import Paragraph from "./paragraph/paragraph";
import Keyboard from "./keyboard/keyboard";
import Result from "./result/result";
import Graph from "./graph/graph";
import '../style/monkeytype.css'

function MonkeyType(){
    return(
        <div className="monkeytype-container">
            <Result/>
            <Paragraph/>
            <Keyboard/>
        </div>
    )
}

export default MonkeyType