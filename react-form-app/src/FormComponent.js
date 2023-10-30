import React from 'react';
import './FormStyles.css'; 

function FormComponent() {
    const [formData, setFormData] = React.useState({
        name: '',
        description: '',
        category: '',
        quantity: '',
        price: ''
    });

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        alert("Form submitted successfully:\n" + JSON.stringify(formData, null, 2));
    };

    const handleCancel = () => {
        setFormData({
            name: '',
            description: '',
            category: '',
            quantity: '',
            price: ''
        });
    };

    return (
        <div className="form-container">
            <h1>New Product</h1>
            <form onSubmit={handleSubmit}>
                <p>Name</p>
                <input type="text" name="name" value={formData.name} onChange={handleInputChange} />
                <p>Description</p>
                <input type="text" name="description" value={formData.description} onChange={handleInputChange} />
                <p>Category</p>
                <input type="text" name="category" value={formData.category} onChange={handleInputChange} />
                <p>Quantity</p>
                <input type="number" name="quantity" value={formData.quantity} onChange={handleInputChange} />
                <p>Price</p>
                <input type="text" name="price" value={formData.price} onChange={handleInputChange} />
                <button type="submit">SUBMIT</button>
                <button type="button" onClick={handleCancel}>CANCEL</button>
            </form>
        </div>
    );
}

export default FormComponent;