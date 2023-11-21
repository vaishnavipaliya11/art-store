import React, { useEffect } from "react";
import Navbar from "../../components/navbar/Navbar";
import "../../styles.css";
import { useNavigate } from "react-router-dom";
import { profileOptions } from "../../constansts";
import { useDispatch, useSelector } from "react-redux";
import { getOrder } from "../../features/orders/helpers/getOrder";
import OrderCard from "../../components/orderCard/OrderCard";
import Loader from "../../components/loader/Loader";
const Order = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { allOrders, orderLoading } = useSelector((store) => store.order);
  useEffect(() => {
    dispatch(getOrder());
  }, []);
  return (
    <div>
      {orderLoading ? (
        <Loader />
      ) : (
        <>
          <Navbar />

          <div className="common-col ">
            <div className="profile-container common-col gap-sm">
              <div>
                <h2 className="text-primary">All Orders</h2>
                <div className="horizontal-line"></div>
              </div>
              <div className="common-flex gap-sm">
                <div className="common-col gap-sm">
                  {profileOptions?.map(({ text, path }) => {
                    return (
                      <>
                        <ul onClick={() => navigate(path)}>{text}</ul>
                      </>
                    );
                  })}
                </div>
                <div className="three-layout-grid  ">
                  {allOrders?.map((data) => (
                    <div key={data.id} className="padding-sm box-shadow">
                      <h2>Order ID: {data.id}</h2>
                      <p>Order Date: {data.createdAt}</p>
                      {data.products?.map((prod) => {
                        return <OrderCard data={prod} />;
                      })}
                      <ul></ul>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Order;
