
import useAuth from "../context/useAuth";
import useTheme from "../context/useTheme";

export default function Header() {

    const { theme, toggletheme } = useTheme();
    const { logout, user } = useAuth();

    return (
        <nav className="navbar navbar-expand-lg bg-body-tertiary border-bottom shadow-sm">
            <div className="container-fluid px-3 px-lg-4">

                {/* Brand */}
                <a
                    className="navbar-brand fw-bold d-flex align-items-center gap-2"
                    href="/dashboard"
                >
                    <span className="bg-primary text-white rounded-3 px-3 py-2">
                        MD
                    </span>

                    <span>
                        My Dashboard
                        <small className="d-block text-body-secondary fw-normal"
                            style={{ fontSize: "11px" }}>
                            Management Portal
                        </small>
                    </span>
                </a>

                {/* Right Section */}
                <div className="d-flex align-items-center gap-3 ms-auto">

                    {/* Theme Status */}
                    <span className={`badge rounded-pill ${
                        theme === "dark"
                            ? "text-bg-dark"
                            : "text-bg-light border text-dark"
                    }`}>
                        {theme === "dark" ? "Dark Mode" : "Light Mode"}
                    </span>

                    {/* Theme Toggle */}
                    <button
                        type="button"
                        className="btn btn-outline-secondary btn-sm"
                        onClick={toggletheme}
                    >
                        {theme === "dark" ? "Light Theme" : "Dark Theme"}
                    </button>

                    {/* User Details */}
                    <div className="d-none d-md-flex align-items-center gap-2 border-start ps-3">

                        <div className="rounded-circle bg-primary text-white d-flex align-items-center justify-content-center fw-bold"
                            style={{ width: "38px", height: "38px" }}>
                            {user?.name?.charAt(0).toUpperCase() ?? "U"}
                        </div>

                        <div>
                            <div className="fw-semibold small">
                                {user?.name ?? "User"}
                            </div>

                            <span className="badge text-bg-primary">
                                {user?.role ?? "Guest"}
                            </span>
                        </div>

                    </div>

                    {/* Logout */}
                    <button
                        type="button"
                        className="btn btn-outline-danger btn-sm"
                        onClick={logout}
                    >
                        Logout
                    </button>

                </div>
            </div>
        </nav>
    );
}
