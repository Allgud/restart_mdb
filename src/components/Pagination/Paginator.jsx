import React from "react"
import PropTypes from "prop-types"
import {Pagination} from "antd"
import "./paginator.scss"
import "antd/dist/antd.css"

const Paginator=({current, total})=>(
    <div className="pagination">
        <Pagination 
          size="small"
          current={current}
          total={Math.ceil(total/2)}
        />
    </div>
)

Paginator.propTypes={
    current: PropTypes.number.isRequired,
    total: PropTypes.number.isRequired
}

export default Paginator