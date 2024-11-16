import "../PhysicalActivityForm/PhysicalActivityForm.css"
const PhysicalActivityFormSecond = () => {
    const customSelectGolas = ["Lose Weight","Maintain Weight","Gain Weight","Gain Muscles","Modify My Diet","Manage Stress"]
    return <div className="row">
    <div className="col-12">
        <h2>Thanks! Now for your goals.</h2>
        <p>Select up to 3 that are important to you, <br/>including one weight goal.</p>
        <div className="formCustomInputs">
            {customSelectGolas.map((items,index) => (<div className="goalsCustomDiv" key={index}>
                <p>{items}</p>
            </div>))}
        </div>

    </div>
</div>
}
export default PhysicalActivityFormSecond