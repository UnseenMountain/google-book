import React from "react"

function Form(props){
    return(
        <div className="container">
            <form>
                <div className="fromGroup">
                    <label htmlFor="search"><h2>Search for books the interest you!</h2></label>
                    <input
                    onChange={props.handleInputChange}
                    value={props.search}
                    name="search"
                    type="text"
                    className="form-control"
                    placeholder="Search a Book"
                    id="search"
                    
                    />
                    <button on onClick={props.handleFormSubmit} className="btn btn-dark mt-3 mb-5">
                        Search
                    </button>
                </div>
            </form>
        </div>
    )
}

export default Form