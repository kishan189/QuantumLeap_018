import "./PersonalizedChart.css"
const PersonalizedChart = () => {

    const days = ['Mon', 'Tue', 'Wed', 'Thr', 'Fri', 'Sat', 'Sun']
    return <>
        <div className="customContainerPersonalizedChart">
            <span>Dashboard</span>
            <span>Customize Plan</span>
        </div>

        <div className="container">
            <div className="row dashboardPersonalizedChart">

                <div className="col-md-10 d-flex" >
                    <img src="/src/assets/avatar.jpg" height={100} style={{ marginRight: "16px" }}></img>
                    <div className="userDetails">

                        <h3>HI! User</h3>
                        <span>Goal: Weight Loss</span><br />
                        <span>Current Weight: 70kg</span><br />
                        <span>BMI: 26</span>
                    </div>
                </div>
                <div className="col-md-2">
                    <div className="streakDiv">
                        <h2>1</h2>
                        <div>
                            <p>Day</p>
                            <p>Streak</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div className="container">
            <div className="row d-flex">
                <div className="customHr">

                </div>
            </div>
            <div className="row d-flex">
                <h4>Tasks</h4>
            </div>
            <div className="row d-flex">
                {days.map((item, index) => (
                    <div key={index} className="customDays">
                        <h5>{item}</h5>
                    </div>
                ))}

            </div>
            <div className="row d-flex">
                {days.map((item, index) => (
                    <>
                        <div key={index} className="customDays customTasks">
                            <div>
                                <h5>Drink 4L water</h5>
                                <p>Time: 24hrs</p>
                                <span>Status: Pending</span><br/>
                                <span>Mark Completed</span>
                            </div>
                        </div>
                        <div key={index} className="customDays customTasks">
                            <div>
                                <h5>Gym</h5>
                                <p>Time: 8:00</p>
                                <span>Status: Pending</span><br/>
                                <span>Mark Completed</span>
                            </div>
                    </div>
                    <div key={index} className="customDays customTasks">
                            <div>
                                <h5>Running</h5>
                                <p>Time: 24hrs</p>
                                <span>Status: Pending</span><br/>
                                <span>Mark Completed</span>
                            </div>
                    </div>
                    </>
                ))}

            </div>
        </div>
    </>
}
export default PersonalizedChart
// saram test