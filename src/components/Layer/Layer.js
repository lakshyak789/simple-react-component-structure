import React from 'react';
import logo from '../../images/below-fold1.jpg';
const Layer = () => {
    return(
        
        <section className="layer">
            <div className="container">
                <div className="row">
                    <div className="col-sm-12 five">
                        <h1 className="first">WHAT WE DO</h1>
                    </div>
                </div>
            </div>
            <div className="container">
                <div className="row">
                    <div className="col-sm-12 six" >
                        <p >Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus itaque, doloribus minima eaque vitae minus quis consequuntur laborum aspernatur .
                    </p>
                    </div>
                </div>
            </div>
            <div className="container">
                <div className="row">
                    <div className="col-sm-4  right" >
                        <div><img src={logo} alt="Image1" className="wrapper" />
                        </div>
                        <h2 className="seven">Lorem, ipsum dolor.</h2>
                        <p className="eight">Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui, possimus?</p>
                        <button className="nine">Learn More</button>
                    </div>
                    <div className="col-sm-4 right " >
                        <div ><img src="images/below-fold2.jpg" alt="Image2" className="wrapper" />
                        </div>
                        <h2 className="seven">Lorem, ipsum dolor.</h2>
                        <p className="eight">Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui, possimus?</p>
                        <button className="nine">Learn More</button>
                    </div>
                    <div className="col-sm-4 right" >
                        <div ><img src="images/below-fold3.jpg" alt="Image3" className="wrapper" />
                        </div>
                        <h2 className="seven">Lorem, ipsum dolor.</h2>
                        <p className="eight">Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui, possimus?</p>
                        <button className="nine">Learn More</button>
                    </div>
                </div>
            </div>

        </section>
    )
}
export default Layer;