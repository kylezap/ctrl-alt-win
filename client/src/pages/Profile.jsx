import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useMutation, useQuery } from '@apollo/client';
// import { QUERY_TECH } from '../utils/queries';
// import { CREATE_MATCHUP } from '../utils/mutations';

const Matchup = () => {
  // const { loading, data } = useQuery(QUERY_TECH);

  // const techList = data?.tech || [];

  // const [formData, setFormData] = useState({
  //   tech1: 'JavaScript',
  //   tech2: 'JavaScript',
  // });
  // let navigate = useNavigate();

  // const [createMatchup, { error }] = useMutation(CREATE_MATCHUP);

  // const handleInputChange = (event) => {
  //   const { name, value } = event.target;
  //   setFormData({ ...formData, [name]: value });
  // };

  // const handleFormSubmit = async (event) => {
  //   event.preventDefault();

  //   try {
  //     const { data } = await createMatchup({
  //       variables: { ...formData },
  //     });

  //     navigate(`/matchup/${data.createMatchup._id}`);
  //   } catch (err) {
  //     console.error(err);
  //   }

  //   setFormData({
  //     tech1: 'JavaScript',
  //     tech2: 'JavaScript',
  //   });
  // };

  return (
    
    <div class="container">
      <div class="row">
        <div class="col-md-12">
          <div id="content" class="content content-full-width">
          <div class="profile-header">
            <div class="profile-header-cover"></div>
            <div class="profile-header-content"></div>
            <div class="profile-header-img">
              <img src="https://images.theconversation.com/files/521751/original/file-20230419-18-hg9dc3.jpg?ixlib=rb-4.1.0&rect=398%2C2%2C1206%2C991&q=20&auto=format&w=320&fit=clip&dpr=2&usm=12&cs=strip" alt=""></img>
            </div>
            <div class="profile-header-info">
              <h4 class="m-t-10 m-b-5">Test User</h4>
              <p class="m-b-10">Professional Gamer</p>
              <a href="#" class="btn btn-sm btn-info mb-2">Edit Profile</a>
            </div>
          </div>
          <ul class="profile-header-tab nav nav-tabs">
            <li class="nav-item"><a href="" target="__blank" class="nav-linkl_">POSTS</a></li>
            <li class="nav-item"><a href="" target="__blank" class="nav-link_">ABOUT</a></li>
            <li class="nav-item"><a href="" target="__blank" class="nav-link_">PHOTOS</a></li>
            <li class="nav-item"><a href="" target="__blank" class="nav-link_">VIDEOS</a></li>
            <li class="nav-item"><a href="" target="__blank" class="nav-link_ active show">FRIENDS</a></li>
          </ul>
          </div>
        </div>
        <div class="profile-content">
        <div class="tab-content p-0">
        <div class="tab-pane fade active show" id="profile-post">
          <ul class="timeline">
            <li>
              <div class="timeline-time">
                <span class="date">Today</span>
                <span class="time">04:20</span>
              </div>
              <div class="timeline-icon">
                <a href="javascript:;">&nbsp;</a>
              </div>
              <div class="timeline-body">
                <div class="timeline-header">
                  <span class="userimage"><img src="https://images.theconversation.com/files/521751/original/file-20230419-18-hg9dc3.jpg?ixlib=rb-4.1.0&rect=398%2C2%2C1206%2C991&q=20&auto=format&w=320&fit=clip&dpr=2&usm=12&cs=strip" alt= ""></img></span>
                  <span class="username"><a href="javascript:;">Test User</a><small></small></span>
                  <span class="pull-right text-muted">20 views</span>
                </div>
                <div class="timeline-content">
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Est nam consequuntur nisi voluptatem modi?</p>
                </div>
                <div class="timeline-likes">
                  <div class="stats-right">
                    <span class="stats-text">250 Shares</span>
                    <span class="stats-text">21 Comments</span>
                  </div>
                  <div class="stats">
                    <span class="fa-stack fa-fw stats-icon">
                      <i class="fa fa-circle fa-stack 2x text-danger"></i>
                      <i class="fa fa-heart fa-stack-1x fa-inverse t-plus-1"></i>
                    </span>
                    <span class="fa-stack fa-fw stats-icon">
                      <i class="fa fa-circle fa-stack-2x text-primary"></i>
                      <i class="fa fa-thumbs-up fa-stack-1x fa-inverse"></i>
                    </span>
                    <span class="stats-total">1K</span>
                  </div>
                </div>
                <div class="timeline-footer">
                  <a href="javascript:;" class="m-r-15 text-inverse-lighter"><i class="fa fa-thumbs-up fa-fw fa-lg m-r-3"></i>Like</a>
                  <a href="javascript:;" class="m-r-15 text-inverse-lighter"><i class="fa fa-comments fa-fw fa-lg m-r-3"></i>Comment</a>
                  <a href="javascript:;" class="m-r-15 text-inverse-lighter"><i class="fa fa-share fa-fw fa-lg m-r-3"></i>Share</a>
                </div>
                <div class="timeline-comment-box">
                  <div class="user"><img src="https://s2.coinmarketcap.com/static/img/coins/200x200/10269.png"></img></div>
                  <div class="input">
                    <form action="">
                    </form>
                  </div>
                </div>
              </div>
            </li>
          </ul>
        </div>
        </div>
        </div>
      </div>
    </div>
    
    // <div className="card bg-white card-rounded w-25">
    //   <div className="card-header bg-dark text-center">
    //     <h1>Let's create a matchup!</h1>
    //   </div>
    //   <div className="card-body m-5">
    //     {loading ? (
    //       <div>Loading...</div>
    //     ) : (
    //       <form onSubmit={handleFormSubmit}>
    //         <label>Tech 1: </label>
    //         <select name="tech1" onChange={handleInputChange}>
    //           {techList.map((tech) => {
    //             return (
    //               <option key={tech._id} value={tech.name}>
    //                 {tech.name}
    //               </option>
    //             );
    //           })}
    //         </select>
    //         <label>Tech 2: </label>
    //         <select name="tech2" onChange={handleInputChange}>
    //           {techList.map((tech) => {
    //             return (
    //               <option key={tech._id} value={tech.name}>
    //                 {tech.name}
    //               </option>
    //             );
    //           })}
    //         </select>
    //         <button className="btn btn-danger" type="submit">
    //           Create Matchup!
    //         </button>
    //       </form>
    //     )}
    //   </div>
    //   {error && <div>Something went wrong...</div>}
    // </div>
  );
};

export default Matchup;
