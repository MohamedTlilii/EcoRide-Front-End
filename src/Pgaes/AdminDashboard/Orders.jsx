import React, { useState } from "react";
import AdminAside from "../../Components/Navbar/AdminAside";
import CartDetails from "../Profile/CartDetails";
import {
  Button,
  Table,
  TableBody,
  TableCell,
  TableHeader,
  TableHeaderCell,
  TableRow,
} from "semantic-ui-react";
import { useFetch } from "../../utils/useFetch";
import axios from "axios";
import { adminUrl } from "../../utils/url";

function Orders() {
  const [open2, setOpen2] = useState(false);
  const [loading, setLoading] = useState(false);
  let token = localStorage.getItem("token");
  const data = useFetch(
    "https://ecoridebackend.onrender.com/api/admin/getOrders",
    token
  );
  const handleConfirmOrder = (id) => {
    setLoading(true);
    axios
      .put(
        `${adminUrl}/confirmOrder/${id}`,
        {},
        {
          headers: { token },
        }
      )
      .then((res) => {
        setLoading(false);
      })
      .catch();
  };
  const handleDeliverOrder = (id) => {
    setLoading(true);

    axios
      .put(
        `${adminUrl}/deliverOrder/${id}`,
        {},
        {
          headers: { token },
        }
      )
      .then((res) => {
        setLoading(false);
      })
      .catch();
  };
  // console.log(data.data);
  return (
    <div className="dashboard">
      <AdminAside />
      <div>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHeaderCell
                style={{ backgroundColor: " hsl(173, 95%, 42%)" }}
              >
                Full Name
              </TableHeaderCell>
              <TableHeaderCell
                style={{ backgroundColor: " hsl(173, 95%, 42%)" }}
              >
                Phone
              </TableHeaderCell>
              <TableHeaderCell
                style={{ backgroundColor: " hsl(173, 95%, 42%)" }}
              >
                Email
              </TableHeaderCell>
              <TableHeaderCell
                style={{ backgroundColor: " hsl(173, 95%, 42%)" }}
              >
                Products
              </TableHeaderCell>
              <TableHeaderCell
                style={{ backgroundColor: " hsl(173, 95%, 42%)" }}
              >
                IsConfirmed{" "}
              </TableHeaderCell>
              <TableHeaderCell
                style={{ backgroundColor: " hsl(173, 95%, 42%)" }}
              >
                IsDelivered{" "}
              </TableHeaderCell>
              <TableHeaderCell
                style={{ backgroundColor: " hsl(173, 95%, 42%)" }}
              >
                Createdate{" "}
              </TableHeaderCell>

              <TableHeaderCell
                style={{ backgroundColor: " hsl(173, 95%, 42%)" }}
              >
                Totall
              </TableHeaderCell>
              <TableHeaderCell
                style={{ backgroundColor: " hsl(173, 95%, 42%)" }}
              >
                Actions
              </TableHeaderCell>
            </TableRow>
          </TableHeader>
          <TableBody>
            {data.data &&
              data.data.map((order) => (
                <TableRow>
                  <TableCell>
                    {order.userId.firstName} {order.userId.lastName}
                  </TableCell>
                  <TableCell>{order.userId.number}</TableCell>
                  <TableCell>{order.userId.email}</TableCell>
                  <TableCell
                    onClick={() => {
                      setOpen2(true);
                    }}
                    style={{
                      cursor: "pointer",
                      textDecoration: "underline",
                    }}
                  >
                    See Details
                  </TableCell>
                  <CartDetails
                    data={order.cart}
                    setOpen2={setOpen2}
                    open2={open2}
                  />
                  <TableCell>{order.isConfirmed ? "Yes" : "No"}</TableCell>
                  <TableCell>{order.isDelevered ? "Yes" : "No"}</TableCell>
                  <TableCell>
                    {order.createdAt.substring(0, 10)},{" "}
                    {order.createdAt.substring(11, order.createdAt.length - 8)}
                  </TableCell>
                  <TableCell>
                    <Button
                      size="mini"
                      onClick={() => {
                        handleConfirmOrder(order._id);
                      }}
                      disabled={order.isConfirmed}
                      loading={loading}
                    >
                      Confirm
                    </Button>
                    <Button
                      onClick={() => {
                        handleDeliverOrder(order._id);
                      }}
                      disabled={order.isDelevered}
                      loading={loading}
                      size="mini"
                    >
                      Deliver
                    </Button>
                  </TableCell>
                  <TableCell>{order.total} DT</TableCell>
                </TableRow>
              ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}

export default Orders;
