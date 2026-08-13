import '../assets/Css/Sidebar.css';

export default function Header() {
    return (
        <>
            <header className="main-header">
                <button className="header-toggle" id="sidebarToggle">
                    <i className="fas fa-bars"></i>
                </button>

                <div className="header-actions">
                    <div className="dropdown">
                        <div className="header-profile" id="profileToggle">
                            <div className="profile-avatar">@initials</div>
                            <div>
                                <div className="profile-name">@empName</div>
                                <div className="profile-role">@roleLabel</div>
                            </div>
                            <i
                                className="fas fa-chevron-down"
                                style={{ fontSize: '10px', color: 'var(--text-muted)', marginLeft: '4px' }}
                            ></i>
                        </div>

                        <div className="dropdown-menu" id="profileDrop">
                            <MenuLink href="/profile" icon="fas fa-user" label="My Profile" />
                            <MenuLink href="/profile" icon="fas fa-key" label="Change Password" />
                            <div className="dropdown-divider"></div>                            
                            <MenuLink style={{color:'var(--danger)'}} href="/profile" icon="fas fa-sign-out-alt" label="Logout" />
                        </div>
                    </div>
                </div>
            </header>
        </>
    );
}

function MenuLink({ href, icon, label }) {
    return (
        <>
            <a href={href} className="dropdown-item">
                <i className={icon}></i> {label}
            </a>
        </>
    );
}
