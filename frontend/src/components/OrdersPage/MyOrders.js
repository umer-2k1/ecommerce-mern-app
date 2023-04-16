import React,{useState, useEffect} from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { useSelector, useDispatch} from 'react-redux'
import { myOrders, clearErrors} from '../../actions/orderAction'
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { DataGrid, GridColDef, GridValueGetterParams } from '@mui/x-data-grid';
import { toast } from 'react-toastify';
import {RiExternalLinkLine} from 'react-icons/ri'
import '../../Style/MyOrders.css'
import ToastAlert from '../../layout/ToastAlert';

const MyOrders = () => {
    let history = useNavigate();
  const dispatch = useDispatch()
    const { orders, error, loading } = useSelector((state) => state.myOrder);
    const {newUser} = useSelector((state)=> state.user)
    const columns = [
        { field: 'id', headerName: 'Order ID', width: 120, flex:0.7},
        {
          field: 'status',
          headerName: 'Status',
          type: "string",
          width: 150,
          flex:0.5,
          cellClassName: (params)=>{
            return params.getValue(params.id, "status") === "Processing" ?"redColor":"greenColor"
          }
        },
        {
          field: 'itemQty',
          headerName: 'Items Qty',
          width: 150,
          type: 'number',
          flex:0.3
        },
        {
          field: 'amount',
          headerName: 'Amount',
          type: 'number',
          width: 110,
          flex:0.5
        },

         {
          field: 'action',
          headerName: 'Action',
          type: 'number',
          width: 110,
          flex:0.5,
          sortable: false,
          renderCell: (params) => {
            return (
              <Link to={`/order/single/${params.getValue(params.id, "id")}`}>
                <RiExternalLinkLine />
              </Link>
            );
          },
        },




      ];
      
      const rows = [];
      orders&& 
      orders.forEach((item, index)=>{
        rows.push({
            id: item._id,
            status: item.orderStatus,
            itemQty: item.orderItem.length,
            amount: item.totalPrice,
        })
      })

      useEffect(() => {
        if (error) {
          toast.error(error);
          dispatch(clearErrors());
        }
    
        dispatch(myOrders());
      }, [dispatch, error, toast]);


  return (
    <>

       <ToastAlert />

<div className="main-div mx-20" >

<Box sx={{ height: 400, width: '100%' }}>
      <DataGrid
        rows={rows}
        columns={columns}
        pageSize={3}
        rowsPerPageOptions={[1]}
        checkboxSelection
        disableSelectionOnClick
        experimentalFeatures={{ newEditingApi: true }}
        className={"order-table"}
        />
    </Box>
        <Typography className="order-heading" >{newUser.name}'s Orders</Typography>
        </div>

    </>
  )
}

export default MyOrders
