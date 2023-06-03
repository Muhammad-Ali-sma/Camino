import React from 'react'
import CardBox from '../Components/CardBox';
import Button from '../Components/Button'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

const Home = () => {
    const selectedTests = useSelector(state => state.data.selectedTests);
    const [isCompleted, setIsCompleted] = React.useState([]);

    const navigate = useNavigate();

    return (
        <div>
            <div className='header'>
                <Button
                    title="Close Assessment"
                />
            </div>
            <section className='container'>
                <h1 className='main-heading'>Assessment</h1>
                <p className='main-para'>To take an assessment please complete one or both of the following seps</p>
                <CardBox
                    title="Complete a Questionnaire"
                    description="Questions to help assess your gait and stability"
                    btnTitle={"Start"}
                    isCompleted={isCompleted}
                    completeTest={(id) => setIsCompleted([...isCompleted, id])}
                />
                <CardBox
                    title={"Run a Test"}
                    description="Choose one or more tests to complete as part of assessment"
                    btnTitle="Select Test"
                    onClick={() => navigate('/choose-test')}
                    selectedTests={selectedTests}
                    completeTest={(id) => setIsCompleted([...isCompleted, id])}
                    isCompleted={isCompleted}
                />
                <CardBox
                    title="Complete Assessment"
                    description="Review before you complete assessment"
                    btnTitle="Review"
                    onClick={() => navigate('/review-assissment')}
                    disableBtn={selectedTests?.length < isCompleted?.length && selectedTests?.length > 0 ? false : true}
                />
            </section>
        </div>
    )
}

export default Home;