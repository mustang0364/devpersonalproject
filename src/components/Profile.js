import React, { Component } from 'react';
import './profile.css'


class Contact extends Component {
    state = {  }
    render() { 
        return (
            <div>
            <header>
              <div className="container">
                <div className="profile">
                  <div className="profile-image">
                    <img src="https://images.unsplash.com/photo-1484373030460-8de45ac8796d?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=9568239aef717047484686a9a77b91e2&w=190&h=190&fit=crop&crop=faces"/>
                  </div>
                  <div className="profile-user-settings">
                    <h1 className="profile-user-name">jamesBond</h1>
                    <div className="profile-edit-btn">Edit Profile</div>
                    <div className="profile-settings-btn"><i className="fas fa-cog" /></div>
                  </div>
                  <div className="profile-stats">
                    <ul>
                      <li><span className="profile-stat-count">164</span> posts</li>
                      <li><span className="profile-stat-count">188</span> followers</li>
                      <li><span className="profile-stat-count">206</span> following</li>
                    </ul>
                  </div>
                  <div className="profile-bio">
                    <p><span className="profile-real-name">Jane Doe</span> Lorem ipsum dolor sit, amet consectetur adipisicing elit 📷✈️🏕️</p>
                  </div>
                </div>
                {/* End of profile section */}
              </div>
              {/* End of container */}
            </header>
            <main>
              <div className="container">
                <div className="gallery">
                  <div className="gallery-item">
                    <img src="https://images.unsplash.com/photo-1511765224389-37f0e77cf0eb?w=500&h=500&fit=crop" className="gallery-image" />
                    <div className="gallery-item-info">
                      <ul>
                        <li className="gallery-item-likes"><i className="fas fa-heart" /> 56</li>
                        <li className="gallery-item-comments"><i className="fas fa-comment" /> 2</li>
                      </ul>
                    </div>
                  </div>
                  <div className="gallery-item">
                    <img src="https://images.unsplash.com/photo-1497445462247-4330a224fdb1?w=500&h=500&fit=crop" className="gallery-image" />
                    <div className="gallery-item-info">
                      <ul>
                        <li className="gallery-item-likes"><i className="fas fa-heart" /> 89</li>
                        <li className="gallery-item-comments"><i className="fas fa-comment" /> 5</li>
                      </ul>
                    </div>
                  </div>
                  <div className="gallery-item">
                    <img src="https://images.unsplash.com/photo-1426604966848-d7adac402bff?w=500&h=500&fit=crop" className="gallery-image" />
                    <div className="gallery-item-type">
                      <i className="fas fa-clone" />
                    </div>
                    <div className="gallery-item-info">
                      <ul>
                        <li className="gallery-item-likes"><i className="fas fa-heart" /> 42</li>
                        <li className="gallery-item-comments"><i className="fas fa-comment" /> 1</li>
                      </ul>
                    </div>
                  </div>
                  <div className="gallery-item">
                    <img src="https://images.unsplash.com/photo-1502630859934-b3b41d18206c?w=500&h=500&fit=crop" className="gallery-image" />
                    <div className="gallery-item-type">
                      <i className="fas fa-video" />
                    </div>
                    <div className="gallery-item-info">
                      <ul>
                        <li className="gallery-item-likes"><i className="fas fa-heart" /> 38</li>
                        <li className="gallery-item-comments"><i className="fas fa-comment" /> 0</li>
                      </ul>
                    </div>
                  </div>
                  <div className="gallery-item">
                    <img src="https://images.unsplash.com/photo-1498471731312-b6d2b8280c61?w=500&h=500&fit=crop" className="gallery-image" />
                    <div className="gallery-item-type">
                      <i className="fas fa-clone" />
                    </div>
                    <div className="gallery-item-info">
                      <ul>
                        <li className="gallery-item-likes"><i className="fas fa-heart" /> 47</li>
                        <li className="gallery-item-comments"><i className="fas fa-comment" /> 1</li>
                      </ul>
                    </div>
                  </div>
                  <div className="gallery-item">
                    <img src="https://images.unsplash.com/photo-1515023115689-589c33041d3c?w=500&h=500&fit=crop" className="gallery-image" />
                    <div className="gallery-item-info">
                      <ul>
                        <li className="gallery-item-likes"><i className="fas fa-heart" /> 94</li>
                        <li className="gallery-item-comments"><i className="fas fa-comment" /> 3</li>
                      </ul>
                    </div>
                  </div>
                  <div className="gallery-item">
                    <img src="https://images.unsplash.com/photo-1504214208698-ea1916a2195a?w=500&h=500&fit=crop" className="gallery-image" />
                    <div className="gallery-item-type">
                      <i className="fas fa-clone" />
                    </div>
                    <div className="gallery-item-info">
                      <ul>
                        <li className="gallery-item-likes"><i className="fas fa-heart" /> 52</li>
                        <li className="gallery-item-comments"><i className="fas fa-comment" /> 4</li>
                      </ul>
                    </div>
                  </div>
                  <div className="gallery-item">
                    <img src="https://images.unsplash.com/photo-1515814472071-4d632dbc5d4a?w=500&h=500&fit=crop" className="gallery-image" />
                    <div className="gallery-item-info">
                      <ul>
                        <li className="gallery-item-likes"><i className="fas fa-heart" /> 66</li>
                        <li className="gallery-item-comments"><i className="fas fa-comment" /> 2</li>
                      </ul>
                    </div>
                  </div>
                  <div className="gallery-item">
                    <img src="https://images.unsplash.com/photo-1511407397940-d57f68e81203?w=500&h=500&fit=crop" className="gallery-image" />
                    <div className="gallery-item-type">
                      <i className="fas fa-clone" />
                    </div>
                    <div className="gallery-item-info">
                      <ul>
                        <li className="gallery-item-likes"><i className="fas fa-heart" /> 45</li>
                        <li className="gallery-item-comments"><i className="fas fa-comment" /> 0</li>
                      </ul>
                    </div>
                  </div>
                  <div className="gallery-item">
                    <img src="https://images.unsplash.com/photo-1518481612222-68bbe828ecd1?w=500&h=500&fit=crop" className="gallery-image" />
                    <div className="gallery-item-info">
                      <ul>
                        <li className="gallery-item-likes"><i className="fas fa-heart" /> 34</li>
                        <li className="gallery-item-comments"><i className="fas fa-comment" /> 1</li>
                      </ul>
                    </div>
                  </div>
                  <div className="gallery-item">
                    <img src="https://images.unsplash.com/photo-1505058707965-09a4469a87e4?w=500&h=500&fit=crop" className="gallery-image" />
                    <div className="gallery-item-info">
                      <ul>
                        <li className="gallery-item-likes"><i className="fas fa-heart" /> 41</li>
                        <li className="gallery-item-comments"><i className="fas fa-comment" /> 0</li>
                      </ul>
                    </div>
                  </div>
                  <div className="gallery-item">
                    <img src="https://images.unsplash.com/photo-1423012373122-fff0a5d28cc9?w=500&h=500&fit=crop" className="gallery-image" />
                    <div className="gallery-item-type">
                      <i className="fas fa-video" />
                    </div>
                    <div className="gallery-item-info">
                      <ul>
                        <li className="gallery-item-likes"><i className="fas fa-heart" /> 30</li>
                        <li className="gallery-item-comments"><i className="fas fa-comment" /> 2</li>
                      </ul>
                    </div>
                  </div>
                </div>
                {/* End of gallery */}
                {/* <div className="spinner" /> */}
              </div>
              {/* End of container */}
            </main>
          </div>
        );
      }
    };

 
export default Contact;