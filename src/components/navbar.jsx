export default function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg bg-primary">
            <ul className="navbar-nav mr-auto">
                <li className="nav-item">
                    <a className="nav-link" href="/"> Home </a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="/quiz"> Quiz </a>
                </li>
            </ul>
        </nav>
    )
}