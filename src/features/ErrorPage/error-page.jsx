import Button from "react-bootstrap/Button";
import { useRouteError } from "react-router-dom";

export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  return (
    <div id="error-page" className='bg-dark text-light' style={{paddingTop: '10rem',}}>
      <h1 >Oops!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      <p>
        <i>{error.statusText || error.message}</i>
      </p>
      <Button href='/'>Go Home</Button>
    </div>
  );
}