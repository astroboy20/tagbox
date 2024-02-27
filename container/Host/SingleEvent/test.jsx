import React, { useState } from 'react';

function EventForm() {
  const [formData, setFormData] = useState({
    userId: '',
    eventType: '',
    hostingType: '',
    eventHashtag: '',
    location: '',
    date: '',
    dressCode: '',
    qrCode: '',
    invitationCard: '',
    souvenir: [],
    consultation: false,
    consultationType: '',
    consultationFrequency: '',
    wishlist: []
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleWishlistChange = (e, index) => {
    const { name, value } = e.target;
    const updatedWishlist = [...formData.wishlist];
    updatedWishlist[index][name] = value;
    setFormData(prevState => ({
      ...prevState,
      wishlist: updatedWishlist
    }));
  };

  const handleAddWishlistItem = () => {
    setFormData(prevState => ({
      ...prevState,
      wishlist: [...prevState.wishlist, { item_name: '', item_image: '' }]
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Send formData to your backend server
    console.log(formData);
    // You can use fetch or Axios to send the data to your server
  };

  return (
    <form onSubmit={handleSubmit}>
      {/* Input fields for other event data */}
      <input type="text" name="userId" value={formData.userId} onChange={handleChange} />
      {/* Add input fields for other event data */}

      {/* Wishlist */}
      <h3>Wishlist</h3>
      {formData.wishlist.map((item, index) => (
        <div key={index}>
          <input type="text" name="item_name" value={item.item_name} onChange={(e) => handleWishlistChange(e, index)} />
          <input type="text" name="item_image" value={item.item_image} onChange={(e) => handleWishlistChange(e, index)} />
        </div>
      ))}
      <button type="button" onClick={handleAddWishlistItem}>Add Wishlist Item</button>

      <button type="submit">Submit</button>
    </form>
  );
}

export default EventForm;