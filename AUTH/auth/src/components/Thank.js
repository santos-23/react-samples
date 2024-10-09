import { Button } from "react-bootstrap";

const Thank =()=>{
    return(
        <div>
            <h1>Thank You for visiting this page</h1>
            <section id="navigation">
                Don't have a account kindly register...   <Button href="/register">Register</Button>
                Login if you Have an account...   <Button href="/login">Login</Button>
            </section>
        </div>
    )
}

export default Thank;