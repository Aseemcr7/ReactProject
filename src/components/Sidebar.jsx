import Nittany from '../assets/Images/nittany.png';
import '../assets/Css/Sidebar.css';

export default function Sidebar() {
    return (
        <>
            <div className="sidebar-overlay" id="sidebarOverlay"></div>
            <nav className="sidebar" id="mainSidebar">
                <div className="sidebar-brand">
                    <div className="brand-name">
                        <img src={Nittany} className="logo-img" />
                    </div>
                </div>
                <nav className="sidebar-nav">
                    <ul>
                        <SidebarLink href="/dashboard" icon="fas fa-home" label="Dashboard" />
                        <SidebarLink href="/ApplyLeave" icon="fas fa-paper-plane" label="Apply Leave" />
                        <SidebarLink href="/MyLeaveRequest" icon="fas fa-list-check" label="My Leaves" />
                        <SidebarLink href="/ApprovalPending" icon="fas fa-check-double" label="Approval" />
                    </ul>
                </nav >
                <SideFooter />
            </nav>
        </>
    )
}

function SidebarLink({ href, icon, label }) {
    return (
        <>
            <li className="nav-item"><a href={href}><i className={icon}></i> {label}</a></li >
        </>
    )
}

function SideFooter() {
    return (
        <>
            <div className="sidebar-footer">
                <div className="user-card">
                    <div className="user-avatar">@initials</div>
                    <div className="user-info">
                        <div className="user-name">@empName</div>
                        <div className="user-role">@roleLabel &bull; EMP-@empId</div>
                    </div>
                    <a href="/Logout" title="Logout"
                        style={{ color: 'var(--sidebar-muted)', marginLeft: 'auto', fontSize: '15px' }}>
                        <i className="fas fa-sign-out-alt"></i>
                    </a>
                </div>
            </div >
        </>
    )
}