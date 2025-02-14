import React, {useState} from 'react'
import gingerbread_img from "../Images/gongcha.png"
import mewow from "../Images/mewow.jpg"
import './CardComponent.css'
import Cookies from 'js-cookie';



function CardComponent() {
    const [currentId, setCurrentId] = useState(0)

    let authenticated = false
    const token = Cookies.get('authToken'); // Check the cookie
    
    if (token) {
        authenticated = true
    }

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
            "description": "Thanks for the company, the good talks and the laughs. I like the connection we’ve been building so far and I’m looking forward to how it develops further.",
            "image": mewow
        },
        {
            "id": 2,
            "title": "",
            "description": "It doesn’t matter if it’s in person or over the phone I'd like to keep talking and spend more time together. I know you’re busy with school so I appreciate the effort you’ve put in to stay in touch. I can only hope to return the effort back 2x. No 3x… 4x….? Uhh you get the point.",
            "image": gingerbread_img
        },
        {
            "id": 3,
            "title": "That's it for now!",
            "description": " I hope this wasn’t too cringe for ya 😅",
            "image": nullç
        }
    ]

    const currentData = data[currentId]

    if (authenticated) {
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
    } else {
        return (
            <div class="modal modal-sheet position-static d-block bg-body-secondary p-4 py-md-5" tabindex="-1" role="dialog" id="modalSignin">
                <div class="modal-dialog" role="document">
                    <div class="modal-content rounded-4 shadow">
                        <div class="modal-header p-5 pb-4 border-bottom-0">
                            <h1 class="fw-bold mb-0 fs-2">You have not authenticated. This page is for Angel only! Others are not allowed.</h1>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
        
}

export default CardComponent