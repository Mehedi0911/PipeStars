import React, { useState } from 'react';
import './Admin.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faList, faPlus, faUserPlus, faTasks } from '@fortawesome/free-solid-svg-icons'
import AddProduct from './AddProduct/AddProduct';
import OrderList from './OrderList/OrderList';
import MakeAdmin from './MakeAdmin/MakeAdmin';
import ManageServices from './ManageServices/ManageServices';
const Admin = () => {
    const [addServices, setAddServices] = useState(true);
    const [orderList, setOrderList] = useState(false);
    const [addAdmin, setAddAdmin] = useState(false);
    const [manage, setManage] = useState(false);

    const handleAddServices = () => {
        setAddServices(true);
        setOrderList(false);
        setAddAdmin(false);
        setManage(false);
    }
    const handleOrderList = () => {
        setAddServices(false);
        setOrderList(true);
        setAddAdmin(false);
        setManage(false);

    }
    const handleAddAdmin = () => {
        setAddServices(false);
        setOrderList(false);
        setAddAdmin(true);
        setManage(false);

    }
    const handleManage = () => {
        setAddServices(false);
        setOrderList(false);
        setAddAdmin(false);
        setManage(true);

    }
    

    return (
        <div className="row admin-page">
            <div className="col-md-3">
                <div style={{ height: '100vh' }} className="brand-background-secondary p-5">
                    <h3 className="mb-5 text-white">PIPE<span className="brand-text-primary">STARs</span> Admin</h3>
                    <div>
                        <button onClick={handleOrderList} className="allBtn mb-3"> <FontAwesomeIcon icon={faList} /> Order List</button>
                        <button onClick={handleAddServices} className="allBtn mb-3"> <FontAwesomeIcon icon={faPlus} /> Add Product</button>
                        <button onClick={handleAddAdmin} className="allBtn mb-3"> <FontAwesomeIcon icon={faUserPlus} /> Make Admin</button>
                        <button onClick={handleManage} className="allBtn"> <FontAwesomeIcon icon={faTasks} /> Manage Services</button>
                    </div>

                </div>

            </div>
            <div className="col-md-9">
               <div className="pt-5">
               {
                   manage ? <ManageServices></ManageServices>
                   :
                   orderList ? <OrderList></OrderList>
                   :
                   addAdmin ? <MakeAdmin></MakeAdmin>
                   :
                   <AddProduct></AddProduct>

               }
               </div>
            </div>

        </div>
    );
};

export default Admin;