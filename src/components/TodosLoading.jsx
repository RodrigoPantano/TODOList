import React from "react";
import '../styles/TodosLoading.css'

function TodosLoading() {
    return (
        <div className="lds-ellipsis">
            <div></div>
            <div></div>
            <div></div>
        </div>
    )
}

export { TodosLoading };