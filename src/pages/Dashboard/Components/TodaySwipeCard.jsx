function TodaySwipeCard({
    SwipeCardData
}) {
    return (
        <div className="card dashboard-half-card">

            <div className="card-header" style={{ display: "block" }}>

                <span className="card-title">
                    <i className="fas fa-user-clock"></i>
                    {" "}Today Swipe Details -{" "}

                    <span style={{ color: "#dc2626" }}>
                        {SwipeCardData.date}
                    </span>
                </span>

                <div style={{ marginTop: "5px", fontWeight: 600, color: "#2563eb", display: "flex", justifyContent: "space-around",}}>
                    <span>
                        Total Hours: <span>{SwipeCardData.totalHours}</span>
                    </span>
                    <span>
                        Total InTime: <span>{SwipeCardData.intime}</span>
                    </span>
                </div>

            </div>

            <div className="attendance-grid">

                {/* First Swipe */}
                <div className="attendance-box swipe-in attendance-click"  data-tooltip="Click to View Today Swipe Details">
                    <div className="attendance-icon">
                        <i className="fas fa-sign-in-alt"></i>
                    </div>

                    <div className="attendance-content">
                        <span>First Swipe In</span>
                        <h5>{SwipeCardData.firstSwipe || "--:--"}</h5>
                    </div>
                </div>

                <div
                    className="attendance-box swipe-out attendance-click"                    
                    data-tooltip="Click to View Today Swipe Details"
                >
                    <div className="attendance-icon">
                        <i className="fas fa-sign-out-alt"></i>
                    </div>

                    <div className="attendance-content">
                        <span>Last Swipe</span>
                        <h5>{SwipeCardData.lastSwipe || "--:--"}</h5>
                    </div>
                </div>

            </div>
        </div>
    );
}

export default TodaySwipeCard;