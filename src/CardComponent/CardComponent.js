import React, {useState} from 'react'
import gingerbread_img from "../Images/gingerbreadman.png"
import mewow_cafe from "../Images/mewow_cafe.jpg"
import './CardComponent.css'

function CardComponent() {
    const [currentId, setCurrentId] = useState(0)
    
    const data = [
        {
            "id": 0,
            "title": "Hi Angel",
            "description": "I know we haven't known each other for very long, but even still I wanted to do something special for you for valentine's day. I hope you like it!",
            "image": null
        },
        {
            "id": 1,
            "title": "",
            "description": "You're so silly and cheerful when you talk about the things you like.",
            "image": gingerbread_img
        },
        {
            "id": 2,
            "title": "",
            "description": "Whether it's about cats, psychology, or philly sports (I'll learn about it) I'd love to keep talking and spend more time together.",
            "image": mewow_cafe
        },
        {
            "id": 3,
            "title": "That's all for now",
            "description": "I hope you enjoyed this little surprise. Happy Valentines day!",
            "image": null
        }
    ]

    const currentData = data[currentId]

    return (<>
        <div class="container">
            <div class="bg-body-tertiary p-5 rounded">
                <h1>{currentData.title}</h1>
                {currentData.image && (
                    <img src={currentData.image} alt="" width="100%" height="100%"/>
                )}
                
                <p class="lead" style={{marginTop: '5%'}}>{currentData.description}</p>
                {
                    currentId === data.length - 1 && 
                    <p class="lead" style={{marginTop: '5%'}}>{"- William"}</p>
                }

            </div>
        </div>
        <nav aria-label="Page navigation example" class="fixed-bottom">
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