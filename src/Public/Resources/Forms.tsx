import { Link } from "react-router-dom"

export function Forms() {
    return (
        <div>
            <Link to="/resources">
                <h1>Back to Resources</h1>
            </Link>
            <h1>Forms Page</h1>
            <p>This is the Forms page.</p>
        </div>
    );
}