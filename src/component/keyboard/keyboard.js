import '../../style/keyboard.css'

function Keyboard(){
    const row1 = ['q','w','e','r','t','y','u','i','o','p']
    const row2 = ['a','s','d','f','g','h','j','k','l']
    const row3 = ['z','x','c','v','b','n','m']
    const row4 = ['space']
    return(
        <div className='keyboard-container'>
            <KeyboardLayout layout={row1}  />
            <KeyboardLayout layout={row2} />
            <KeyboardLayout layout={row3} />
            <KeyboardLayout layout={row4} />
        </div>
    )
}

function KeyboardLayout({layout}){
    return(
        <div className='keyboard-layout'>
            {
                layout.map((letter,index)=>{
                    return (
                        <button id='btn-key' data-id={letter} key={index}>{letter}</button>
                    )
                })
            }
        </div>
    )
}
export default Keyboard