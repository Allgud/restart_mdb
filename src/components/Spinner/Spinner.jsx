import React from "react"
import "./spinner.scss"
import {Spin} from "antd"
import {LoadingOutlined} from "@ant-design/icons"

const Spinner=()=>{
  const spinner=<LoadingOutlined style={{fontSize: 96}} spin />
  return(
    <div className="spinner">
      <Spin indicator={spinner}/>
    </div>
  )
}

export default Spinner