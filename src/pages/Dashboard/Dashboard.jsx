import StartCard from "../../components/StartCard";
import TodaySwipeCard from "./Components/TodaySwipeCard";
import LeaveBalanceCard from "./Components/LeaveBalanceCard";
import "../../assets/Css/Dashboard.css";
import "../../assets/Css/Loader.css";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";



export default function Dashboard() {
    const navigate = useNavigate();
    const [DashboardData, setDashboardData] = useState(null);
    const [Loader, setLoader] = useState(true);
    const [ErrorMsg, setErrorMsg] = useState(null);

    const today = new Date();

    const daysInMonth = new Date(
        today.getFullYear(),
        today.getMonth() + 1,
        0
    ).getDate();

    useEffect(() => {
        const controller = new AbortController();

        const loadDashboardData = async () => {
            try {
                setLoader(true);
                setErrorMsg(null);

                const response = await fetch(
                    "https://localhost:7014/api/User/Dashboard",
                    {
                        method: "GET",
                        credentials: "include",
                        headers: {
                            "Content-Type": "application/json",
                        },
                        signal: controller.signal,
                    }
                );

                if (!response.ok) {
                    if (response.status === 401) {
                        alert("Session Expired Login to Continue !.")
                        navigate("/Login");
                    } else {
                        setErrorMsg("Something went wrong");
                    }

                    return;
                }

                const data = await response.json();

                console.log(data);

                setDashboardData(data);
            } catch (error) {
                // Ignore abort errors
                if (error.name === "AbortError") {
                    return;
                }

                console.error(error);
                setErrorMsg("Unable to connect to the server");
            } finally {
                if (!controller.signal.aborted) {
                    setLoader(false);
                }
            }
        };

        loadDashboardData();

        return () => {
            controller.abort();
        };
    }, []);

    if (Loader && !DashboardData) {
        return <span className="loader"></span>;
    }

    if (ErrorMsg) {
        return <h4>{ErrorMsg}</h4>;
    }

    return (
        <>
            <div className="stats-grid">
                <StartCard
                    variant="primary"
                    animation="anim-up-1"
                    tooltip=""
                    icon="fas fa-users"
                    value={DashboardData?.leave.totalRequests || 0}
                    label="Total Leave Applied"
                />

                <StartCard
                    variant="warning"
                    animation="anim-up-2"
                    tooltip=""
                    icon="fas fa-clock"
                    value={DashboardData?.leave.approvedCount || 0}
                    label="Approved Leaves"
                />

                <StartCard
                    variant="danger"
                    animation="anim-up-3"
                    tooltip=""
                    icon="fas fa-user-minus"
                    value={DashboardData?.leave.pendingCount || 0}
                    label="Pending Requests"
                />

                <StartCard
                    variant="success"
                    animation="anim-up-4"
                    tooltip=""
                    icon="fas fa-user-check"
                    value={DashboardData?.leave.rejectedCount || 0}
                    label="Rejected Request"
                />

                <StartCard
                    variant="danger"
                    animation="anim-up-5"
                    tooltip="Click to view Attendance"
                    icon="fas fa-calendar-check"
                    value={daysInMonth}
                    label="This Month Total Days"
                />
            </div>

            <div className="dashboard-row mt-2">
                {DashboardData?.swipeDetails && (
                    <TodaySwipeCard
                        SwipeCardData={DashboardData.swipeDetails[0]}
                    />
                )}
                {DashboardData?.leaveDetails && (
                    <LeaveBalanceCard
                        LeaveBalanceCardData={DashboardData.leaveDetails}
                    />
                )}
                
            </div>
        </>
    );
}