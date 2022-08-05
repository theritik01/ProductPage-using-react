import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Products from "./Product_Page";

const CardsPage1 = () => {

  return (
    <>
    

      {Products.map((currEle) => {
        return (
          <Card className="col-md-4 mb-2" style={{ marginRight: '1rem' }} id="cards">
            <Card.Title className="mt-2" >{currEle.name}</Card.Title>
            <Card.Img variant="top" id="cardImg" src={currEle.image} />
            <Card.Body >
              <Card.Text>
                <s>{currEle.old_price}</s>
                <br />
                {currEle.new_price}
              </Card.Text >
              <Button id="btn2" style={{marginLeft:"-1rem"}} >Quick Purchase</Button>
            </Card.Body>
          </Card>
        );
      })}
      
    </>
  );
};

export default CardsPage1;
