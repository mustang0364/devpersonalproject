import React, { Component } from 'react';



class Slides extends Component {

    render() { 
       
        return (
          <div>
            <meta charSet="utf-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" />
            <style dangerouslySetInnerHTML={{__html: "\n    /* Set height of the grid so .sidenav can be 100% (adjust if needed) */\n    .row.content {height: 1500px}\n    \n    /* Set gray background color and 100% height */\n    .sidenav {\n      background-color: #f1f1f1;\n      height: 100%;\n    }\n    \n    /* Set black background color, white text and some padding */\n    footer {\n      background-color: #555;\n      color: white;\n      padding: 15px;\n    }\n    \n    /* On small screens, set height to 'auto' for sidenav and grid */\n    @media screen and (max-width: 767px) {\n      .sidenav {\n        height: auto;\n        padding: 15px;\n      }\n      .row.content {height: auto;} \n    }\n  " }} />
            <br />
            <div className="col-sm-9">
              <h4><small>RECENT POSTS</small></h4>
              <hr />
              <h2>I Love Food</h2>
              <h5><span className="glyphicon glyphicon-time" /> Post by Jane Dane, Sep 27, 2015.</h5>
              <h5><span className="label label-danger">Food</span> <span className="label label-primary">Ipsum</span></h5><br />
              <p>Food is my passion. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
              <br /><br />
              <h4><small>RECENT POSTS</small></h4>
              <hr />
              <h2>Officially Blogging</h2>
              <h5><span className="glyphicon glyphicon-time" /> Post by John Doe, Sep 24, 2015.</h5>
              <h5><span className="label label-success">Lorem</span></h5><br />
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
              <hr />
              <h4>Leave a Comment:</h4>
              <form role="form">
                <div className="form-group">
                  <textarea className="form-control" rows={3} required defaultValue={""} />
                </div>
                <button type="submit" className="btn btn-success">Submit</button>
              </form>
              <br /><br />
            </div></div>
        );
      }
    };
export default Slides;