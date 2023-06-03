import React from 'react'
import { useSelector } from 'react-redux'
import Button from '../Components/Button';
import LayoutBox from '../Components/LayoutBox'
import { useNavigate } from 'react-router-dom'

const ReviewAssissment = () => {
    const selectedTests = useSelector(state => state.data.selectedTests);
    const navigate = useNavigate();

    return (
        <LayoutBox containerStyle={{ backgroundColor: '#FFF' }}>
            <div className='review-content'>
                <h1>Review Assessment</h1>
                <p>Is the assessment complete?</p>
                {selectedTests?.length > 0 &&
                    selectedTests?.map(x => (
                        <div className='box-container test-box' style={{ background: "#F2F1F6" }}>
                            <div>
                                <div className='box-child-1'>
                                    <img src={x.image} alt='logo' />
                                    <h2 className='card-title'>&nbsp;{x.title}</h2>
                                </div>
                                <div className='box-child-2'>
                                    <Button
                                        title={"Completed"}
                                        className={`btn-contained selected`}
                                    />
                                </div>
                            </div>
                        </div>
                    ))
                }
                <div className='review-btns-container'>
                    <Button
                        title={"No yet, go back"}
                        className={`btn-contained back-btn`}
                        onClick={() => navigate("/")}
                    />
                    <Button
                        title={"Yes, generate report"}
                        onClick={() => navigate("/close-assissment")}
                        className={`report-btn`}
                    />
                </div>
            </div>
        </LayoutBox>
    )
}

export default ReviewAssissment