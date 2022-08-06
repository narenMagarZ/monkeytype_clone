
let paraCharCounter = 0
let finalCursorPos = 0
let prevCursorPos = 0
let scollHelper = 0
let countWord = 0
let errorChar = 0
function onKeyEvent(para,startTimer,countTypedWord,e){
    let keyValue = e.key
    let keyPressed = e.key
    if(keyPressed === ' ') keyPressed = 'space'
    if(keyValue.match(/^[A-z\W]{1}$/) || keyValue === ' '){
        
        startTimer()
        const thatChar = document.querySelector(`[data-id='${paraCharCounter}']`)
        const cursor = document.getElementById('cursor')
        const cursorCurrParent = cursor?.parentElement
        const cursorParentNextSibling = cursorCurrParent.nextElementSibling
        if(keyValue === para[paraCharCounter]){
            if(thatChar.innerHTML !== '&nbsp;'){
                thatChar.style.color = '#2faa77'
                finalCursorPos = thatChar.offsetWidth  + finalCursorPos 
            } else {
                cursorCurrParent.removeChild(cursor)
                cursorParentNextSibling?.appendChild(cursor) 
                finalCursorPos = 0
                countWord ++
            }
        } else {
            thatChar.style.color = '#bb5e66'
            finalCursorPos = thatChar.offsetWidth  + finalCursorPos 
            if(thatChar.innerHTML === '&nbsp;'){
                cursorCurrParent.removeChild(cursor)
                cursorParentNextSibling?.appendChild(cursor) 
                finalCursorPos = 0
                countWord ++
            }
            errorChar++
        }
            cursor.style.transform = `translate(${finalCursorPos}px)`
            paraCharCounter ++

        document.querySelector(`[data-id='${keyPressed}']`)?.classList.add('active-btn')
        setTimeout(() => {
        document.querySelector(`[data-id='${keyPressed}']`)?.classList.remove('active-btn')
        },100);
        countTypedWord(countWord,errorChar)
    } else if(keyPressed === 'Backspace') {
        paraCharCounter --
        if(paraCharCounter < 0)
            paraCharCounter = 0
        if(paraCharCounter >= 0){
            const thatChar = document.querySelector(`[data-id='${paraCharCounter}']`)
            thatChar.style.color = '#000000'
            const charWidth = thatChar.offsetWidth
            const cursor = document.getElementById('cursor')
            if(thatChar.innerHTML === '&nbsp;') paraCharCounter ++            
             else {
                finalCursorPos = finalCursorPos - charWidth
                cursor.style.transform = `translate(${finalCursorPos}px)`
            }
        }

    }
    const cursor = document.getElementById('cursor')
    const cursorPosFromTop = cursor?.getBoundingClientRect().top
    if(prevCursorPos < cursorPosFromTop && prevCursorPos !== 0){
        scollHelper = scollHelper + 36
        document.getElementById('in-para-wrapper').scrollTo(0,scollHelper)
        prevCursorPos = cursorPosFromTop
    } else {
        prevCursorPos = cursorPosFromTop
    }
    
}
export default onKeyEvent