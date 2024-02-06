import React from "react";
import {
  Button,
  TableRow,
  TableHeaderCell,
  TableHeader,
  TableCell,
  Table,
  ModalHeader,
  ModalContent,
  ModalActions,
  Modal,
} from "semantic-ui-react";
function CartDetails({ setOpen2, open2, data }) {
  console.log(open2);
  return (
    <Modal
      style={{
        width: "50%",
        height: "70%",
        position: "absolute",
        left: "25%",
        top: "15%",
      }}
      onClose={() => setOpen2(false)}
      open={open2}
      size="large"
    >
      <ModalHeader>Cart details</ModalHeader>
      <ModalContent
        style={{
          // width: "50%",
          minHeight: "90%",
        }}
      >
        <Table>
          <TableHeader>
            <TableRow>
              <TableHeaderCell
                style={{ backgroundColor: " hsl(173, 95%, 42%)" }}
              >
                Product
              </TableHeaderCell>
              <TableHeaderCell
                style={{ backgroundColor: " hsl(173, 95%, 42%)" }}
              >
                Quantity
              </TableHeaderCell>
              <TableHeaderCell
                style={{ backgroundColor: " hsl(173, 95%, 42%)" }}
              >
                Unity Price
              </TableHeaderCell>
              <TableHeaderCell
                style={{ backgroundColor: " hsl(173, 95%, 42%)" }}
              >
                Image
              </TableHeaderCell>
            </TableRow>
          </TableHeader>
          {data.map((elt) => (
            <TableRow>
              <TableCell> {elt.productId.title} </TableCell>
              <TableCell> {elt.quantity} </TableCell>
              <TableCell> {elt.productId.price} DT </TableCell>

              <TableCell>
                <img src={elt.productId.imageUrls[0]} width={100} alt="" />
              </TableCell>
            </TableRow>
          ))}
        </Table>
      </ModalContent>
      <ModalActions>
        <Button
          color="black"
          onClick={() => {
            setOpen2(false);
            console.log(open2);
          }}
        >
          Close
        </Button>
      </ModalActions>
    </Modal>
  );
}

export default CartDetails;
