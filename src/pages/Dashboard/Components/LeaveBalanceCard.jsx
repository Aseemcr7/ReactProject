import { useState } from "react";

function LeaveBalanceCard({
    casualLeave = "4",
    sickLeave = "5",
    privilegeLeave = "12",
    totalLeave = "21",
    date = "07/31/2026",
}) {
    const [isExpanded, setIsExpanded] = useState(true);

    const handleToggle = () => {
        setIsExpanded((prev) => !prev);
    };

    return (
        <div className="card dashboard-half-card" id="leaveBalanceCard" >

            <div
                className="card-header"
                onClick={handleToggle}
            >
                <span className="card-title">
                    <i className="fas fa-calendar-check"></i>
                    {" "}Leave Balance{" "}
                    <span className="card-date">
                        {date}
                    </span>
                </span>

                <button type="button" className="toggle-btn" aria-label="Toggle Leave Balance" style={{ backgroundColor : "black" }}>
                    <i
                        className={`fas ${isExpanded
                                ? "fa-chevron-up"
                                : "fa-chevron-down"
                            }`}
                    ></i>
                </button>
            </div>

            {/* CONTENT */}
            {isExpanded && (
                <div style={{ padding: "14px" }}>

                    <div
                        className="leave-balance-grid"
                        id="leaveBalanceGrid"
                    >

                        {/* CL */}
                        <div className="leave-box cl-box">
                            <span className="leave-title">
                                CL
                            </span>

                            <h4>
                                {casualLeave}
                            </h4>

                            <small>
                                Casual Leave
                            </small>
                        </div>

                        {/* SL */}
                        <div className="leave-box sl-box">
                            <span className="leave-title">
                                SL
                            </span>

                            <h4>
                                {sickLeave}
                            </h4>

                            <small>
                                Sick Leave
                            </small>
                        </div>

                        {/* PL */}
                        <div className="leave-box pl-box">
                            <span className="leave-title">
                                PL
                            </span>

                            <h4>
                                {privilegeLeave}
                            </h4>

                            <small>
                                Privilege Leave
                            </small>
                        </div>

                        {/* TOTAL */}
                        <div className="leave-box total-box">
                            <span className="leave-title">
                                TOTAL
                            </span>

                            <h4>
                                {totalLeave}
                            </h4>

                            <small>
                                Total Leave
                            </small>
                        </div>

                    </div>

                </div>
            )}

        </div>
    );
}

export default LeaveBalanceCard;