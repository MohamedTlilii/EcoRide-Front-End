import React from 'react';
import './Style.css'; // Import your CSS file for styling

function Profile() {
  return (
    <div className="profile-container">
    <div className="profile-header">
      <div className="profile-picture-container">
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTtz4ywqIj5QdGq2_nxs72_wAwhPPkiuc0VCwWmpd6tuA&s" alt="User Profile" className="profile-picture" />
      </div>
      <div className="user-details">
        <h2>User Name</h2>
        <p>Number: 123-456-7890</p>
        <p>Email: john.doe@example.com</p>
      </div>
    </div>

    <div className="product-section">
      <h3>Products Purchased</h3>
      <table className="product-table">
        <thead>
          <tr>
            <th>Product</th>
            <th>Price</th>
            <th>Quantity</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <img
                src="product1-thumbnail.jpg"
                alt="Product 1"
                className="product-thumbnail"
              />
              Product 1
            </td>
            <td>$20</td>
            <td>2</td>
          </tr>
          <tr>
            <td>
              <img
                src="product2-thumbnail.jpg"
                alt="Product 2"
                className="product-thumbnail"
              />
              Product 2
            </td>
            <td>$30</td>
            <td>1</td>
          </tr>
          {/* Add more rows as needed */}
        </tbody>
      </table>
    </div>
  </div>
  );
}

export default Profile;
