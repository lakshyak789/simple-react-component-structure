import React from 'react';
import image2 from '../../images/pic15.jpg';
const Team = () => {
    return(
        <section className="nineteen">
        <div className="container">
                <div className="row">
                    <div className="col-sm-12">
                        <h1 className="nice">MEET THE TEAM</h1>
                    </div>
    
                </div>
            </div>
            <div className="container">
                    <div className="row">
                        <div className="col-sm-12 twelve">
                        <p >Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae dicta consequatur id saepe facere nobis!</p>
                        </div>
                    </div>
                    </div>
                    <div className="container">
                    <div className="row">
                    <div className="col-sm-2">
                        <div className="img-frame-1">
                                
                                <img src="images/pic11.jpg" alt="Image11" class="twenty" /></div>
                                <div className="vertical-line" style={{ left: '75px' , color: '#207b20' , height: '75px'}}></div>
                                <div><p className="twentyfive">Krishna Wijaya</p></div>

    <button style={{margin: '0px auto ', display: 'block' , borderRadius: '20px' , marginBottom: '63px',
    marginTop: '12px' , backgroundColor: '#c5e9c5'}}> 
            <i className="fa fa-twitter" style={{fontSize:'24px'}}></i>
            <i className="fa fa-yoast" style={{fontSize:'24px'}}></i>
            <i className="fa fa-facebook" style={{fontSize:'24px' , color:'blue'}}></i>
     </button>
    </div>	
                    <div className="col-sm-2">
                            <div className="img-frame-1">
                                    <img src="images/pic12.jpg" alt="Image11" className="twenty" /></div>
                                    <div className="vertical-line" style={{  left: '75px' , color: '#207b20' , height: '75px'}}></div>
                                    <div><p className="twentyfive">Gabriel</p></div>

    <button style={{margin: '0px auto ', display: 'block' , borderRadius: '20px' , marginBottom: '63px',
    marginTop: '12px' , backgroundColor: '#c5e9c5'}}> 
            <i className="fa fa-twitter" style={{fontSize:'24px'}}></i>
            <i className="fa fa-yoast" style={{fontSize:'24px'}}></i>
            <i className="fa fa-facebook" style={{fontSize:'24px' , color:'blue'}}></i>
     </button>
                            
                    </div>	
                    <div className="col-sm-2">
                            <div className="img-frame-1">
                                    <img src="images/Pic13.jpg" alt="Image11" className="twenty" /></div>	
                                    <div className="vertical-line" style={{  left: '75px' , color: '#207b20' , height: '75px'}}></div>
                                    <div><p className="twentyfive">Adik</p></div>
                                    
<button style={{margin: '0px auto ', display: 'block' , borderRadius: '20px' , marginBottom: '63px',
    marginTop: '12px' , backgroundColor: '#c5e9c5'}}> 
            <i className="fa fa-twitter" style={{fontSize:'24px'}}></i>
            <i className="fa fa-yoast" style={{fontSize:'24px'}}></i>
            <i className="fa fa-facebook" style={{fontSize:'24px' , color:'blue'}}></i>
     </button>
                            
                    </div>
                    <div className="col-sm-2">
                            <div className="img-frame-1">
                                    <img src="images/Pic14.jpg" alt="Image11" class="twenty" />	</div>
                                    <div className="vertical-line" style={{  left: '75px' , color: '#207b20' , height: '75px'}}></div>
                                    <div><p className="twentyfive">Krishna Wijaya</p></div>

    <button style={{margin: '0px auto ', display: 'block' , borderRadius: '20px' , marginBottom: '63px',
    marginTop: '12px' , backgroundColor: '#c5e9c5'}} > 
            <i className="fa fa-twitter" style={{fontSize:'24px'}}></i>
            <i className="fa fa-yoast" style={{fontSize:'24px'}}></i>
            <i className="fa fa-facebook" style={{fontSize:'24px' , color:'blue'}}></i>
     </button>
                                
                    </div>
                    <div className="col-sm-2">
                            <div className="img-frame-1">
                                    <img src={image2} alt="Image11" class="twenty" /></div>	
                                    <div className="vertical-line" style={{  left: '75px' , color: '#207b20' , height: '75px'}}></div>	
                                    <div><p className="twentyfive">Zlatan</p></div>

    <button style={{margin: '0px auto ', display: 'block' , borderRadius: '20px' , marginBottom: '63px',
    marginTop: '12px' , backgroundColor: '#c5e9c5'}}> 
            <i className="fa fa-twitter" style={{fontSize:'24px'}}></i>
            <i className="fa fa-yoast" style={{fontSize:'24px'}}></i>
            <i className="fa fa-facebook" style={{fontSize:'24px' , color:'blue'}}> </i>
     </button>
                            
                    </div>
                    </div>
                    </div>
</section>
    )
}
export default Team;