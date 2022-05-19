import React from 'react'
import {Spin} from 'antd'
import { LoadingOutlined } from '@ant-design/icons';

function Spinner() {
    return (
        <div className="spinner">
           <LoadingOutlined style={{ fontSize: 45 }} spin />
        </div>
    )
}

export default Spinner
