import NavBar from "./NavBar";
import Card from "react-bootstrap/Card";
import "../index.css";
import CardsPage1 from "./Cards";
// import Product_Page from "./Product_Page"
function Category() {

  
  return (
    <>
      <body>
        <div className="container-fluid">
          <div className="row mt-5 mx-2">
            <div className="col-md-2">
              <Card className="glass1" style={{border:"0"}} id="category">
                <button className="w-100 pb-2 pt-2 border-0" >
                  <strong>Browse Categories</strong>
                </button>
                <hr />
                <button  className="w-100 pb-2 pt-2 border-0 " id="btn">
                  Flower Pots
                </button>
                <hr />
                <button  className="w-100 pb-2 pt-2 border-0 " id="btn">
                  Fancy Mountains
                </button>
                <hr />
                <button  className="w-100 pb-2 pt-2 border-0 " id="btn">
                  Ground Chakkars
                </button>
                <hr />
                <button  className="w-100 pb-2 pt-2 border-0 " id="btn">
                  Fancy Chakkars
                </button>
                <hr />
                <button  className="w-100 pb-2 pt-2 border-0 " id="btn">
                  Twinkling Stars
                </button>
                <hr />
                <button  className="w-100 pb-2 pt-2 border-0 " id="btn">
                  Something Special Pencil
                </button>
                <hr />
                <button  className="w-100 pb-2 pt-2 border-0 " id="btn">Rocket</button>
                <hr />
                <button  className="w-100 pb-2 pt-2 border-0 " id="btn">Atom Bomb</button>
                <hr />
                <button  className="w-100 pb-2 pt-2 border-0 " id="btn">
                  Loose Bijili Crackers
                </button>
                <hr />
                <button  className="w-100 pb-2 pt-2 border-0 " id="btn">Honey Bees</button>
                <hr />
                <button  className="w-100 pb-2 pt-2 border-0 " id="btn">Fly Bees</button>
                <hr />
                <button  className="w-100 pb-2 pt-2 border-0 " id="btn">
                  One Sound Crackers
                </button>
                <hr />
                <button  className="w-100 pb-2 pt-2 border-0 " id="btn">
                  Fancy Single Shots
                </button>
                <hr />
                <button  className="w-100 pb-2 pt-2 border-0 " id="btn">Sparklers</button>
                <hr />
                <button  className="w-100 pb-2 pt-2 border-0 " id="btn">
                  Color Matches
                </button>
                <hr />
                <button  className="w-100 pb-2 pt-2 border-0 " id="btn">Gift Boxes</button>
                <hr />
                <button  className="w-100 pb-2 pt-2 border-0 " id="btn">
                  Multi Color Shot
                </button>
                <hr />
                <button  className="w-100 pb-2 pt-2 border-0 " id="btn">
                  Sony's Fancy Novelties (Shots)
                </button>
                <hr />
                <button  className="w-100 pb-2 pt-2 border-0 " id="btn">
                  Sony's Fancy Novelties (Pipes)
                </button>
                <hr />
                <button  className="w-100 pb-2 pt-2 border-0 " id="btn">
                  Sony Egg & Run
                </button>
                <hr />
                <button  className="w-100 pb-2 pt-2 border-0 " id="btn">
                  Uncategorized
                </button>
                <hr />
                <button  className="w-100 pb-2 pt-2 border-0 " id="btn">
                  Chorsa giant crackers
                </button>
                <hr />
                <button  className="w-100 pb-2 pt-2 border-0 " id="btn">Garlands</button>
              </Card>
            </div>
            <div className="col-md-9 ">
              <h3 style={{ marginLeft: "0.8rem", color:"black" }}>Shop</h3>
              <div className="row" >
                <NavBar/>
                <CardsPage1/>
              </div>
            </div>
          </div>
        </div>
      </body>
    </>
  );
}

export default Category;
