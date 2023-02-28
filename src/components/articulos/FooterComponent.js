export default function FooterComponent(props) {

    return (
        <>
            <nav aria-label="Page navigation example">
                <ul className="pagination justify-content-center mt-2">
                    <li className="page-item">
                        <a className="page-link" href="/productos" tabIndex="-1" aria-disabled="true">Previous</a>
                    </li>
                    <li className="page-item active">
                        <a className="page-link" href="/productos">1</a>
                    </li>
                    <li className="page-item">
                        <a className="page-link" href="/productos">2</a>
                    </li>
                    <li className="page-item">
                        <a className="page-link" href="/productos">3</a>
                    </li>
                    <li className="page-item">
                        <a className="page-link" href="/productos">Next</a>
                    </li>
                </ul>
            </nav>
        </>
    )
}
