import React from 'react'
import Button from '../Components/Button';
import { useNavigate } from 'react-router-dom'
import LayoutBox from '../Components/LayoutBox'
import { useDispatch } from 'react-redux'
import { addAssessment } from '../Redux/DataSlice'

const CloseAssessment = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const handleonCloseAssessment = () => {
        dispatch(addAssessment([]));
        navigate("/")
    }

    return (
        <LayoutBox containerStyle={{ backgroundColor: '#FFF' }}>
            <div className='review-content close-assessment'>
                <h1>Close assessment, <br />are you sure?</h1>
                <p>The assessment will not be saved and any questionnaires or tests completed wil be lost</p>
                                
                <div className='review-btns-container'>
                    <Button
                        title={"No, go back"}
                        className={"btn-contained back-btn"}
                        onClick={() => navigate("/review-assissment")}
                    />
                    <Button
                        title={"Yes, close assessment"}
                        onClick={handleonCloseAssessment}
                        className={`report-btn`}
                    />
                </div>
            </div>
        </LayoutBox>
    )
}

export default CloseAssessment