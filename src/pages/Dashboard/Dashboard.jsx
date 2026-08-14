import StartCard from "../../components/StartCard"
import TodaySwipeCard from "./Components/TodaySwipeCard"
import LeaveBalanceCard from "./Components/LeaveBalanceCard"
import '../../assets/Css/Dashboard.css';

export default function Dashboard() {
    return (<>

        <div id="attendanceModal" className="modal" style={{ display: "none" }}>
            <div className="modal-content" id="attendanceContent">
                <div className="popup-topbar">
                    <div className="popup-topbar-left">
                        <div className="popup-month-title" id="period">June 2026</div>
                    </div>
                    <div className="popup-topbar-right">
                        <div className="popup-leave-badge" id="Leavedays">Total Leave : 0</div>
                        <div className="popup-close-btn" onClick="closeAttendancePopup()">&#x2715;</div>
                    </div>
                </div>

                <div className="card">
                    <div className="popup-body">
                        <div className="calendar-wrapper">

                            <button id="btnPrev"
                                className="month-nav"
                                onClick="changeMonth(-1)">
                                <i className="fas fa-chevron-left"></i>
                            </button>

                            <div className="calendar-container">

                                <div id="attendanceLoader"
                                    className="calendar-loader"
                                    style={{ display: "none" }}>
                                    <div className="loader-spinner"></div>
                                </div>


                                <div style={{ display: "grid", gridTemplateColumns: "repeat(7,1fr)", gap: "5px", marginBottom: "6px" }}>

                                    <div className="dow-header-cell">Mon</div>
                                    <div className="dow-header-cell">Tue</div>
                                    <div className="dow-header-cell">Wed</div>
                                    <div className="dow-header-cell">Thu</div>
                                    <div className="dow-header-cell">Fri</div>
                                    <div className="dow-header-cell">Sat</div>
                                    <div className="dow-header-cell">Sun</div>
                                </div>

                                <div className="cal-grid1" id="calGrid"></div>

                            </div>

                            <button id="btnNext"
                                className="month-nav"
                                onClick="changeMonth(1)">
                                <i className="fas fa-chevron-right"></i>
                            </button>

                        </div>
                    </div>
                    <div className="legend">
                        <div className="leg-item"><div className="leg-pip lp-P"></div> Present</div>
                        <div className="leg-item"><div className="leg-pip lp-A"></div> Absent (A/L)</div>
                        <div className="leg-item"><div className="leg-pip lp-L"></div> Holiday (H)</div>
                        <div className="leg-item"><div className="leg-pip lp-np"></div>NightShift</div>
                    </div>

                </div>

            </div>

        </div>

        <div className="stats-grid">
            <StartCard id="team-members-card" variant="primary" animation="anim-up-1" tooltip="Click to view Team Members" icon="fas fa-users"
                value={25}
                label="Team Members"
            />
            <StartCard id="pendingcardid" variant="warning" animation="anim-up-2" tooltip="Click to view Pending Approval's" icon="fas fa-clock"
                value={8}
                label="Pending Approvals"
            />
            <StartCard id="AbsentId" variant="danger" animation="anim-up-3" tooltip="Click to view Today's Leave Employee List" icon="fas fa-user-minus"
                value={1}
                label="On Leave Today"
            />
            <StartCard id="Presentid" variant="success" animation="anim-up-4" tooltip="Click to view employee swipe list" icon="fas fa-user-check"
                value={24}
                label="Present Today as per Swipe"
            />
            <StartCard id="Attendanceid" variant="danger" animation="anim-up-5" tooltip="Click to view Attendance" icon="fas fa-calendar-check"
                value={31}
                label="This Month Total Days"
            />                        
        </div>
        <div className="dashboard-row mt-2">
            <TodaySwipeCard />
            <LeaveBalanceCard />
        </div>       
        </>);
}