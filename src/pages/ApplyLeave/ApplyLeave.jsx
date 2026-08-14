import '../../assets/Css/ApplyLeave.css'
export default function ApplyLeave() {
    return (<>

        <div className="form-sidebar">            
            <div className="card">
                <div className="card-header">
                    <h3 className="card-title"><i className="fas fa-pen-fancy"></i> Leave Application</h3>
                </div>
                <div className="card-body">
                    <div className="alert alert-success" style={{background: "#ECFDF5",borderLeft:" 4px solid #10B981", padding: "14px",borderRadius: "8px", color: "#065F46",display: "none"}} id="successAlert">
                        <i className="fas fa-check-circle"></i> <strong>Leave submitted successfully!</strong> Auto-approval workflow initiated.
                    </div>

                    <div className="form-grid">

                        <div className="form-group">
                            <label className="form-label"><i className="fas fa-clock"></i> Leave Type <span style={{ color: "#EF4444" }} >*</span></label>
                            <select className="form-control" id="leavetype" required></select>
                        </div>
                        <div id="comp" className="form-group">                            
                            <div id="divcomp">
                                <label className="form-label">
                                    <i className="fas fa-clock"></i> Comp Off Leave Type
                                    <span style={{ color: "#EF4444" }}>*</span>
                                </label>

                                <select className="form-control" id="compleavetype">
                                    <option value="1">Single Day</option>
                                    <option value="3">Half Day (1st Half)</option>
                                    <option value="4">Half Day (2nd Half)</option>
                                </select>
                            </div>
                        </div>
                        <div className="form-group">
                            <label className="form-label"><i className="fas fa-calendar-check"></i><span id="lblfromdate"> From Date </span><span style={{ color: "#EF4444" }}>*</span></label>
                            <input type="date" className="form-control" id="fromDate" min="1900-01-01" max="2099-12-31" required />
                        </div>
                        <div className="form-group" id="toDateGroup">
                            <label className="form-label"><i className="fas fa-calendar-times"></i><span id="lbltodate"> To Date </span><span style={{ color: "#EF4444" }}>*</span></label>
                            <input type="date" className="form-control" id="toDate" min="1900-01-01" max="2099-12-31" required />
                        </div>
                        <div id="divovertime">
                            <div className="form-grid">
                                <div className="form-group">
                                    <label className="form-label"><i className="fas fa-hourglass-start"></i> Start Time <span style={{ color: "#EF4444" }}>*</span></label>
                                    <input type="time" id="startTime" className="form-control" />
                                </div>
                                <div className="form-group">
                                    <label className="form-label"><i className="fas fa-hourglass-end"></i> End Time <span style={{ color: "#EF4444" }}>*</span></label>
                                    <input type="time" id="endTime" className="form-control" />
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="total-days-box">
                        <div className="total-days-box-content">
                            <span className="total-days-label">Total Days:</span>
                            <span id="totalDays" className="total-days-count">0 days</span>
                        </div>
                    </div>

                    <div className="form-group">
                        <label className="form-label" style={{marginTop: "60px"}}><i className="fas fa-comment"></i> Reason for Leave <span style={{ color: "#EF4444" }}>*</span></label>
                        <textarea className="form-control" id="reason" placeholder="Explain your reason for leave..." required></textarea>
                    </div>

                    <div className="form-group d-none">
                        <label className="form-label"><i className="fas fa-paperclip"></i> Attachments</label>
                        <div className="upload-zone">
                            <i className="fas fa-cloud-upload-alt upload-zone-icon"></i>
                            <p className="upload-zone-title" id="uploadTitle">Drag files or click to upload</p>
                            <p className="upload-zone-text" id="uploadText">Medical certificates, documents, etc.</p>
                            <span id="fileName" style={{ display: "none", fontWeight: "600", color: "#0369A1" }}></span>
                            <input type="file" id="attachments" style={{ display: "none" }} multiple />
                        </div>
                    </div>

                    <button type="submit" className="btn btn-primary submit-btn" id="submitBtn" style={{ textAlign: "center", justifyContent: "center" }} >
                        <i className="fas fa-check"></i> Submit
                    </button>
                </div>
            </div>            
            <div className="info-sidebar">
                <div className="card">
                    <div className="card-header">
                        <span className="card-title"><i className="fas fa-info-circle"></i> Info</span>
                    </div>
                    <div className="card-body">
                        <div className="info-section">
                            <div className="info-label">Balance:</div>                            
                            <strong className="info-value balance">
                                10 Days
                            </strong>
                        </div>

                    </div>
                </div>
            </div>
        </div>
        </>);
}