import React, { Component } from 'react';
import axios from 'axios';
import CompanyContainer from './CompanyContainer';
// import Photo1 from '../Animations/Photo1'



class CompanyM extends Component {
  constructor(props){
    super(props)
    this.state = {
      companyNames: [],
      comment:'',
      company: '',
    }
  }

selectCompany=(company)=> {
this.setState({
  company:company
})
}

deleteCompany = (id) => {
 // console.log('id--------', id);
  axios.delete(`/api/post_comment/${id}`)
  .then(res => {
    this.setState({companyNames: res.data});
  }).catch(err => console.log('Delete Error--------', err));
}

reRender = () => {
  axios.get('/api/company_names')
  .then(res => {
    
    this.setState({
      companyNames: res.data
    })
  }).catch(err => console.log('Axios Get Cities Error-----', err));   
}

  changeHandler=(comment)=>{
    this.setState({
      comment:comment
    })
  }
 postComment=()=>{
   console.log(this.state.company, this.state.comment);
   axios.post('/api/post_comment',{company:this.state.company, comment: this.state.comment}).then(response => 
  this.setState({
    companyNames:response.data
  })).catch(err => console.log(err))
 }

  getUserInfo = () => {
    axios.get('/api/company_names').then(customers => {
        
        this.setState({
          companyNames: customers.data
        })
    })
  }






  //getPlaces=()=>
  //axios.get()



render() {
   
    let names = this.state.companyNames.map(company => {
      return (
     
      
      <CompanyContainer key={company.id} company={company} reRender={this.reRender}
             deleteCompany={this.deleteCompany} updateComment={this.updateComment} 
             handleChange={this.handleCommentChange}/>
      )})
      console.log(this.state.companyNames)
     
  return (
    
    <div className="App">
   
    
        {/* <p>Silicon Valley</p>
          <button className="animated-box in" onClick={() => this.getUserInfo}></button>  */}
                
   <div>
      <select onChange= {(e)=> this.selectCompany(e.target.value)}>
              <option  className="Cuba"> Cuba</option> 
              <option className="NewYork">NewYork</option>    
              <option className="Malaga">Malaga</option>
              <option className="Dominican Republic">Dominican Republic"</option> 
              <option className="Milano">Milano</option>
              <option className="Miami">Miami</option>
              <option className="Madrid">Madrid</option>

    </select>  
  </div>

  {/* <div>
    <p className="experience">Post Comment:</p>
  </div> */}
  
  





  <div>
            <meta charSet="utf-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" />
            {/*  */}
            <br />
            <div className="col-sm-9">
              <h4><small>RECENT POSTS</small></h4>
              <hr />
              <h2>Punta Cana</h2>
              <h5><span className="glyphicon glyphicon-time" /> Post by Mickey Mouse, Oct 1, 1928.</h5>
              <h5><span className="label label-danger">Punta Cana</span> <span className="label label-primary">Ipsum</span></h5><br />
              <p>Punta Cana, the easternmost tip of the Dominican Republic, abuts the Caribbean Sea and the Atlantic Ocean. It's a region known for its 32km stretch of beaches and clear waters. The Bávaro area and Punta Cana combine to form what's known as La Costa del Coco, or the Coconut Coast, an area of lavish, all-inclusive resorts. It's popular for zip-lining, windsurfing, kayaking and sailing.</p>
              <br /><br />
              <h4><small>RECENT POSTS</small></h4>
              <hr />
              <h2>Malaga</h2>
              <h5><span className="glyphicon glyphicon-time" /> Post by James Bond, July 24, 2018.</h5>
              <h5><span className="label label-success">Travel</span></h5><br />
              <p>Málaga is a port city on southern Spain’s Costa del Sol, known for its high-rise hotels and resorts jutting up from yellow-sand beaches. Looming over that modern skyline are the city’s 2 massive hilltop citadels, the Alcazaba and ruined Gibralfaro, remnants of Moorish rule.</p>
              <hr />
              <h4>Leave a Comment:</h4>
              <form role="form">
                <div className="form-group">
                  <textarea className="form-control"  onChange={(e)=>this.changeHandler(e.target.value)} rows={3} required defaultValue={""}  />
                </div>
                <button type="submit" className="btn btn-success">Submit</button>
              </form>
              <br /><br />
            </div></div>
        
  <div>  
    <button className="postcomment in" onClick={() =>this.postComment()}>Post comment</button>
  </div>
      {/* <textarea className="textArea" onChange={(e)=>this.changeHandler(e.target.value)}></textarea> */}
    <div>
      <div>{names}</div>
     

    </div>
    
</div>

)    
}
}


export default CompanyM;








