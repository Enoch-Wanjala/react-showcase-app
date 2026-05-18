import style from './form.module.css';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

// this is our form component
// receives onAddCoffe as a prop
function Form({ onAddCoffee }) {

    //to navigate to the shop page after form submission 
    const navigate = useNavigate();

    // these are our states for the form inputs, 
    // we will be using these states to store the values of the form inputs
    const [coffeeName, setProductName] = useState('');
    const [description, setDescription] = useState('');
    const [origin, setOrigin] = useState('');
    const [price, setPrice] = useState('');
    const [message, setMessage] = useState('');


    // this function will be called when the submit button is called
    async function handleSubmit(e) {
        e.preventDefault();
        // here we will handle the form submission, 
        // we will send the data to the backend and then clear the form inputs
        const newCoffee = {
            name: coffeeName.trim(),
            description: description.trim(),
            origin: origin.trim(),
            price: price
        };

        // makes sure the form if filled before submission  
        if (!newCoffee.name || !newCoffee.description || !newCoffee.origin || !newCoffee.price) {
            setMessage('Please fill in all fields before submitting.');
            return;
        }

        try {
            await onAddCoffee(newCoffee);

            // Clear the form inputs after submission
            setProductName('');
            setDescription('');
            setOrigin('');
            setPrice('');
            setMessage('Coffee added successfully.');
            navigate('/shop');
        } catch (error) {
            setMessage(error.message);
        }
    }


    return (
        // the form data is collected form here
        <form className={style.form} onSubmit={handleSubmit}>
            <div className={style.formGroup}>
                <label className={style.label}>Coffee Name</label>
                <input type="text" placeholder="Type here" className={style.input} value={coffeeName} onChange={(e) => setProductName(e.target.value)} />
                <label className={style.label}>Description</label>
                <input type="text" placeholder="Description" className={style.input} value={description} onChange={(e) => setDescription(e.target.value)} />
                <label className={style.label}>Origin</label>
                <input type="text" placeholder="Origin" className={style.input} value={origin} onChange={(e) => setOrigin(e.target.value)} />
                <label className={style.label}>Price</label>
                <input type="number" placeholder="Price" className={style.input} value={price} onChange={(e) => setPrice(e.target.value)} />

                <button className={style.button} type="submit">
                    Submit
                </button>
                {message && <p>{message}</p>}
                <div />
            </div>

        </form>
    )

}

export default Form;
