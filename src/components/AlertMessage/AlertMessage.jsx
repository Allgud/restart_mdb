import React from "react"
import PropTypes from "prop-types"
import "./alert.scss"
import {Alert} from "antd"

const AlertMessage=({error, hideAlert})=>(
  <div className="alert">
    <Alert 
      message={error}
      type="error"
      closable
      afterClose={hideAlert}    
    />
  </div>
)

AlertMessage.propTypes={
  error: PropTypes.string.isRequired,
  hideAlert: PropTypes.func.isRequired
}

export default AlertMessage