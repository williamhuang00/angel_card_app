import React, {useState} from 'react'
import image from "../Images/simpleplan.jpg"
import './CardComponent.css'

function CardComponent() {
    const [currentId, setCurrentId] = useState(0)
    
    const data = [
        {
            "id": 0,
            "title": "Simple Plan",
            "description": "Simple Description",
            "image": image
        },
        {
            "id": 1,
            "title": "Another Plan",
            "description": "Another Description",
            "image": image
        },
        {
            "id": 2,
            "title": "Third Plan",
            "description": "Third Description",
            "image": image
        }
    ]

    const currentData = data[currentId]

    return (<>
        <div class="container">
            <div class="bg-body-tertiary p-5 rounded">
                <h1>{currentData.title}</h1>
                <p class="lead">{currentData.description}</p>
                <img src={currentData.image} alt="" width="100%" height="100%"/>
            </div>
        </div>


        <nav aria-label="Page navigation example">
            <ul class="pagination justify-content-center">
                <li className={`page-item ${currentId === 0 ? 'disabled' : ''}`}>
                        <a className="page-link" onClick={() => setCurrentId(currentId - 1)}>Previous</a>
                </li>

                {data.map((item, index) => (
                        <li key={item.id} className={`page-item ${currentId === index ? 'active' : ''}`}>
                            <a className="page-link" onClick={() => setCurrentId(index)}>{item.id + 1}</a>
                        </li>
                ))}
                <li className={`page-item ${currentId === data.length - 1 ? 'disabled' : ''}`}>
                        <a className="page-link" onClick={() => setCurrentId(currentId + 1)}>Next</a>
                </li>
            </ul>
        </nav>
    </>)
}

export default CardComponent