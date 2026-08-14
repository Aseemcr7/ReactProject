export default function StartCard({ id,
    variant = "primary",
    animation = "anim-up-1",
    tooltip = "Click to view",
    icon = "fas fa-users",
    value = 0,
    label = "Team Members", }) {
    return (
        <div className={`stat-card ${variant} ${animation}`} id={id} data-tooltip={tooltip}>
            <div className={variant}><i className={icon}></i></div>
            <div className="stat-content">
                <div className="stat-value">{value}</div>
                <div className="stat-label">{label}</div>            
        </div>
    </div>
    );
}