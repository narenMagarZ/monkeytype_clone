import Paragraph from "./paragraph/paragraph";
import Keyboard from "./keyboard/keyboard";
import Result from "./result/result";
import Graph from "./graph/graph";
import '../style/monkeytype.css'

// export const component = {
//     Paragraph,
//     Keyboard,
//     Result,
//     Graph
// }


function MonkeyType(){
    return(
        <div className="monkeytype-container">
            <Paragraph/>
            <Keyboard/>
        </div>
    )
}

export default MonkeyType