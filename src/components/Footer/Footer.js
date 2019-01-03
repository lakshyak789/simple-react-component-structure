import React from 'react';

const Footer = () => {
    return (
        <section className="twentytwo">

			<div className="container">
			<div className="row  ">
			<div className="col-sm-4  lay ">
			<h3 className="john"
			style={{textAlign:'center'}} >ABOUT US</h3>
       <p className="lie" style={{padding: '26px'}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis possimus accusamus ipsam corporis minima delectus? Eveniet est explicabo nesciunt nemo distinctio accusantium molestias architecto. Delectus saepe asperiores esse unde vel consequuntur, eos explicabo necessitatibus quam eaque corporis facere nisi dignissimos officiis numquam dolore! Ea reprehenderit nemo esse harum ratione deleniti?
	   </p>
			<button
            style={{margin: '0px auto' , display: 'block' , borderRadius: '20px' , backgroundColor:'#e6e7e6' , marginBottom: '78px' ,
             padding: '4px 14px'}} > 
					<i class="fa fa-twitter" style={{fontSize:'24px' , marginRight: '5px'}}></i>
					<i class="fa fa-yoast" style={{fontSize:'24px',  marginRight: '5px'}}></i>
					<i class="fa fa-facebook" style={{fontSize:'24px' , color: 'blue'}}></i>
			 </button>
			 </div>
			 <div class="col-sm-4 lay ">
					<h3 class="smith"
					style= {{marginBottom: '26px'}} >RECENT POSTS</h3>
				
				<div>Lorem ipsum dolor sit amet.</div>
					<span class="green">MAGAZINE</span>		
					<div >Lorem ipsum dolor sit amet.</div>
					<span class="yellow">UI DESIGN</span>	
					<div>Lorem ipsum dolor sit amet.</div>
					<span class="blue">PHOTOGRAPHY</span>	
					<div>Lorem ipsum dolor sit amet.</div>
					<span class="red">BOOK</span>							
					<div>Lorem ipsum dolor sit amet.</div>
					<span class="yellow">UI DESIGN</span>		
				</div>
				<div class="col-sm-4 lay">
					<div class="may">
						<h3 class="div" style={{paddingBottom: '15px' }}>CONTACT US</h3>
						<p style={{textAlign:'center' , paddingBottom:'15px'}}>C-13,Turner Road <br/> CLement Town,Dehradun <br/> Pin Code: 248001</p>
					</div>					
			</div>
			</div>
			</div>
		</section>
    )
}

export default Footer;