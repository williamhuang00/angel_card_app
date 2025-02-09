import React from 'react'

function CardComponent() {
    return (<>
        <div class="container">
            <div class="bg-body-tertiary p-5 rounded">
                <h1>Navbar example</h1>
                <p class="lead">This example is a quick exercise to illustrate how the top-aligned navbar works. As you scroll, this navbar remains in its original position and moves with the rest of the page.</p>
                <a class="btn btn-lg btn-primary" href="/docs/5.3/components/navbar/" role="button">View navbar docs »</a>
            </div>
        </div>


        <nav aria-label="Page navigation example">
            <ul class="pagination justify-content-center">
                <li class="page-item disabled">
                    <a class="page-link">Previous</a>
                </li>
                <li class="page-item"><a class="page-link" href="#">1</a></li>
                <li class="page-item"><a class="page-link" href="#">2</a></li>
                <li class="page-item"><a class="page-link" href="#">3</a></li>
                <li class="page-item">
                    <a class="page-link" href="#">Next</a>
                </li>
            </ul>
        </nav>
    </>)
}

export default CardComponent