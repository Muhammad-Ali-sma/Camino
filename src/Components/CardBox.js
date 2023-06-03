import React from 'react'
import Button from './Button'
import { useDispatch } from 'react-redux'
import { addAssessment } from '../Redux/DataSlice'

const CardBox = (props) => {
    const dispatch = useDispatch();

    console.log('isCompleted?', props.isCompleted?.length)
    console.log('props.selectedTests', props.selectedTests?.length)

    return (
        <div className='box-wrapper'>
            <div className='box-container'>
                <div>
                    <div className='box-child-1'>
                        <h2 className='card-title'>{props.title}</h2>
                        <p className='card-desc'>{props.description}</p>
                    </div>
                    <div className='box-child-2'>
                        {props.selectedTests?.length > 0 ?
                            <Button
                                title={"Add Another Test"}
                                onClick={props.onClick}
                            />
                            :
                            <Button
                                title={props.isCompleted?.includes(-1) && props.btnTitle === 'Start' ? "Completed" : props.btnTitle}
                                disabled={props.disableBtn}
                                onClick={props.onClick ? props.onClick : () => props.completeTest(-1)}
                                className={`btn-contained ${props.isCompleted?.includes(-1) && props.btnTitle === 'Start' ? 'selected' : ""}`}
                            />
                        }
                    </div>
                </div>
                {props.selectedTests?.length > 0 &&
                    props.selectedTests?.map(x => (
                        <div className='box-container test-box'>
                            <div>
                                <div className='box-child-1'>
                                    <img src={x.image} alt='logo' />
                                    <h2 className='card-title'>&nbsp;{x.title}</h2>
                                </div>
                                <div className='box-child-2'>
                                    <Button
                                        title={props.isCompleted?.includes(x.id) ? "Completed" : "Start Test"}
                                        onClick={() => props.completeTest(x.id)}
                                        className={`btn-contained ${props.isCompleted?.includes(x.id) ? 'selected' : ""}`}
                                    />
                                    <Button
                                        title={"Remove"}
                                        onClick={() => dispatch(addAssessment(props.selectedTests.filter(y => y.id !== x.id)))}
                                    />
                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>
            <div className='shadow-box' />
        </div>
    )
}

export default CardBox