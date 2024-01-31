import React from "react";
import {
  ItemMeta,
  ItemImage,
  ItemHeader,
  ItemGroup,
  ItemExtra,
  ItemDescription,
  ItemContent,
  Image,
  Item,
} from "semantic-ui-react";

const ItemExampleItems = ({ productId, quantity }) => (
  <ItemGroup>
    <Item>
      <ItemImage size="tiny" src="/images/wireframe/image.png" />

      <ItemContent>
        <ItemHeader as="a">{productId.title}</ItemHeader>
        <ItemMeta>${productId.price}</ItemMeta>
        <ItemDescription>
          <Image src={productId.imageUrls[0]} />
        </ItemDescription>
        <ItemExtra>{quantity}</ItemExtra>
      </ItemContent>
    </Item>
  </ItemGroup>
);

export default ItemExampleItems;
