import React from "react";
import { Menu, Dropdown, Button, Space , Row , Col } from "antd";
import {Link} from 'react-router-dom'


function DefaultLayout(props) {
    const user = JSON.parse(localStorage.getItem('user'))
  const menu = (
    <Menu>
      <Menu.Item>
        <Link to={'/'} >
        <a>
        Home
        </a>
        </Link>  
      </Menu.Item>
      <Menu.Item>
        <Link to={'/userbookings'} >
        <a>
       Bookings
        </a>
        </Link>  
      </Menu.Item>
      <Menu.Item>
        <Link to={'/admin'} >
        <a>
       Admin
        </a>
        </Link>  
      </Menu.Item>
      <Menu.Item onClick={()=>{
          localStorage.removeItem('user');
          window.location.href='/login'
      }}>
          <li style={{color:'orangered'}}>Logout</li>
      </Menu.Item>
    </Menu>
  );
  return (
    <div>
      <div className="header bs1 mt-4">
          <Row gutter={16} justify='center'>
              <Col lg={20} sm={20} xs={24}>
              <div className="d-flex justify-content-between items-center">
             <h1 ><b><Link to='/'>
              <div className="logo-main">
              <img src="https://svgshare.com/i/gdS.svg" alt="" />
              </div>
             </Link></b></h1>

          <Dropdown overlay={menu} placement="bottomCenter">
            <Button >{user.username}</Button>
          </Dropdown>
        </div>
              </Col>
          </Row>
        
      </div>
      <div className="content">{props.children}</div>

     
    </div>
  );
}

export default DefaultLayout;
