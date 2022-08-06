import { useEffect } from 'react'
import '../../style/paragraph.css'
import { paragraph } from '../data'
import onKeyEvent from './keyevent'
import Timer from './timer'
import {useDispatch} from 'react-redux'
import {isTimerReady} from './startTimer'
import {typed} from './wordstypedslice'
function Paragraph(){
    let renderation = 0
    let filteredParaContent = ''
    const dispatch = useDispatch()
    function loadParagraphToContainer(paragraph){
        filteredParaContent = filterParagraphContent(paragraph).trim()
        const paraWrapper = document.createElement('div')
        const cursor = document.createElement('div')
        paraWrapper.setAttribute('id','in-para-wrapper')
        cursor.setAttribute('id','cursor')
        let isParaCharWrapperExist = false
        let isCursorAttached = false
        let paraCharWrapper 
        for(let i = 0 ; i < filteredParaContent.length ; i++){
            if(filteredParaContent[i].match(/[\s]/)){
                isParaCharWrapperExist = false
                const whiteSpace = document.createElement('span')
                whiteSpace.innerHTML = '&nbsp;'
                whiteSpace.setAttribute('data-id',i)
                paraCharWrapper.appendChild(whiteSpace)
                if(!isCursorAttached){
                    paraCharWrapper.appendChild(cursor)
                    isCursorAttached = true
                }
                paraWrapper.appendChild(paraCharWrapper)
            }  else {
                if(!isParaCharWrapperExist){
                    paraCharWrapper = document.createElement('div')
                    paraCharWrapper.setAttribute('id','para-char-wrapper')
                    isParaCharWrapperExist = true
                }
                const paraChar = document.createElement('span')
                paraChar.setAttribute('id','para-char')
                paraChar.setAttribute('data-id',i)
                paraChar.innerText = filteredParaContent[i]
                paraCharWrapper.appendChild(paraChar)

            }
        }
        document.getElementById('paragraph-container').appendChild(paraWrapper)
    }
    function filterParagraphContent(paragraph){
        let filteredParaContent = ''
        for(let i = 0 ;i < paragraph.length ; i++){
            if(paragraph[i].match(/[A-z\s]/)){
                filteredParaContent += paragraph[i]
            } 
        }
        return filteredParaContent
    }
    const startTimer = ()=>{
        console.log('got ')
        dispatch(isTimerReady(true))
    }
    const countTypedWord = (countWord,error)=>{
        dispatch(typed({wordTyped:countWord,errorChar:error}))
    }

    useEffect(()=>{
        renderation ++
        if(renderation === 1){
            loadParagraphToContainer(paragraph[0])
            document.getElementById('in-para-wrapper')?.scrollTo(0,0)
            document.body.addEventListener('keydown',onKeyEvent.bind(this,filteredParaContent,startTimer,countTypedWord))
        }
    },[])
    return(
        <div id='paragraph-container' className='paragraph-container'>
            <Timer/>
        </div>
    )
}

export default Paragraph