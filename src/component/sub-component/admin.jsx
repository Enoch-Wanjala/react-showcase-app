import Form from "../form"; 

// this is our  admin component
// we receive onAddCoffee as a prop 
function Admin({ onAddCoffee }) {

    return (
        <>
            <Form onAddCoffee={onAddCoffee} />
        </>
    )

}

export default Admin;
