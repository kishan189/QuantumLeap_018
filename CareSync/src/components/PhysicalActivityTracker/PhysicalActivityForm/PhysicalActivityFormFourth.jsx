const PhysicalActivityFormFourth = () => {
    const customSelectReason = ["Lack of time","The regimen was too hard to follow","Did not enjoy training","Difficult to make food choises","Lack of progress","Lack of motivation"]
    return <div className="row">
    <div className="col-12">
        <h2>In the past, what have been your<br/> barriers for quitting?</h2>
        <p>Select all that apply.</p>
        <div className="formCustomInputs">
            {customSelectReason.map((items,index) => (<div className="goalsCustomDiv" key={index}>
                <p>{items}</p>
            </div>))}
        </div>

    </div>
</div>
}
export default PhysicalActivityFormFourth