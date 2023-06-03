import React from 'react'
import { useNavigate } from 'react-router-dom'
import Button from '../Components/Button'
import LayoutBox from '../Components/LayoutBox'
import { useDispatch, useSelector } from 'react-redux'
import { addAssessment } from '../Redux/DataSlice'

const ChooseTest = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [selectedTest, setSelectedTest] = React.useState([]);
    const addedTests = useSelector(state => state.data.selectedTests);

    let data = [
        {
            title: "Tinetti Gait",
            desc: "Some quick introduction copy",
            image: './images/test.png',
            id: 1
        },
        {
            title: "Tinetti Balance",
            desc: "Some quick introduction copy",
            image: './images/test2.png',
            id: 2
        },
        {
            title: "Figure 8",
            desc: "Some quick introduction copy",
            image: './images/test.png',
            id: 3
        },
        {
            title: "24 Hour Monitor",
            desc: "Some quick introduction copy",
            image: './images/test2.png',
            id: 4
        }
    ]

    const selectTest = (item) => {
        if (selectedTest.filter(x => x.id === item.id).length > 0) {
            setSelectedTest(selectedTest.filter(x => x.id !== item.id));
        } else {
            if (addedTests.filter(x => x.id === item.id).length === 0) {
                setSelectedTest([...selectedTest, item]);
            }
        }
    }

    return (
        <LayoutBox>
            <div className={`card-header ${selectedTest.length > 0 ? "block" : ""}`}>
                <h3>Choose Tests</h3>
                {selectedTest.length > 0 ?
                    <Button
                        title={"Add to Assessment"}
                        onClick={() => { dispatch(addAssessment([...selectedTest, ...addedTests])); setSelectedTest([]) }}
                        className="btn-contained"
                    />
                    :
                    <Button
                        className="close-btn"
                        title={"Close"}
                        onClick={() => navigate('/')}
                    />
                }
            </div>
            <div className='card-body'>
                {data.map(x => {
                    let isSelected = selectedTest.filter(y => y.id === x.id);
                    let isAdded = addedTests.filter(y => y.id === x.id);

                    return (
                        <div key={`test_${x.id}`} className={`box-container test-box ${isSelected?.length > 0 || isAdded?.length > 0 ? "selected" : ""}`} onClick={() => selectTest(x)}>
                            <div>
                                <div className='box-child-1'>
                                    <img src={x.image} className='test-img' alt='logo' />
                                    <div className='box-content'>
                                        <h2 className='card-title'>{x.title}</h2>
                                        <p className='card-desc'>{x.desc}</p>
                                    </div>
                                </div>
                                <div className='box-child-2'>
                                    <Button
                                        title={isAdded?.length > 0 ? "Added" : isSelected?.length > 0 ? "Selected" : "Select"}
                                        className={`${isSelected?.length || isAdded?.length > 0 > 0 ? "selected" : ""}`}
                                    />
                                </div>
                            </div>
                        </div>)
                }
                )}
            </div>
        </LayoutBox>
    )
}

export default ChooseTest