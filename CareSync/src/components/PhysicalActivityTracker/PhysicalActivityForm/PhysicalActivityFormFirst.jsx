let PhysicalActivityFormFirst = () => {
    return <div className="row">
        <div className="col-12">
            <h2>Hi! Let's get started</h2>
            <p>We’re happy you’re here.</p>
            <p>Let’s get to know a little about you.</p>
            <div className="formCustomInputs">
                <label>Name</label>
                <input type="text" className="form-control"></input>
                <label>Gender</label>
                <div className="genderBoxCustom">
                    <div class="form-check" style={{ marginRight: "12px" }}>
                        <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" />
                        <label class="form-check-label" for="flexRadioDefault1">
                            Male
                        </label>
                    </div>
                    <div class="form-check">
                        <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" />
                        <label class="form-check-label" for="flexRadioDefault2">
                            Female
                        </label>
                    </div>
                </div>

                <label>Age</label>
                <input type="text" className="form-control"></input>
                <label>Weight (in kg)</label>
                <input type="text" className="form-control"></input>
                <label>Height (in cm)</label>
                <input type="text" className="form-control"></input>
                
            </div>

        </div>
    </div>
}
export default PhysicalActivityFormFirst