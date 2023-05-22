import { useRouter } from "next/router";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

function Discount() {
  const router = useRouter();
  const {productID} = router.query;

  console.log("getProSducts",productID)

  return (
    <Form>
      {/* <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" />
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Check me out" />
      </Form.Group>
      <Button variant="primary" type="submit">
        Submit
      </Button> */}
      <h1>Discount Page</h1>
      <table>
        <tbody>
          <tr>
            <th>gfg </th>
            <th>gfg</th>
            <th>gfg</th>
            <th>gfg</th>
            <th>gfg</th>
          </tr>
        </tbody>
      </table>
    </Form>
  );
}

export default Discount;
