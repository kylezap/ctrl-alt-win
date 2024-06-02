// import { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import { useMutation, useQuery } from '@apollo/client';
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
    
    <div className="container">
      <div className="row">
        <div className="col-md-12">
          <div id="content" className="content content-full-width">
          <div className="profile-header">
            <div className="profile-header-cover"></div>
            <div className="profile-header-content"></div>
            <div className="profile-header-img">
              <img src="https://images.theconversation.com/files/521751/original/file-20230419-18-hg9dc3.jpg?ixlib=rb-4.1.0&rect=398%2C2%2C1206%2C991&q=20&auto=format&w=320&fit=clip&dpr=2&usm=12&cs=strip" alt=""></img>
            </div>
            <div className="profile-header-info">
              <h4 className="m-t-10 m-b-5">Test User</h4>
              <p className="m-b-10">Professional Gamer</p>
              <a href="#" className="btn btn-sm btn-info mb-2">Edit Profile</a>
            </div>
          </div>
          <ul className="profile-header-tab nav nav-tabs">
            <li className="nav-item"><a href="" target="__blank" className="nav-linkl_">POSTS</a></li>
            <li className="nav-item"><a href="" target="__blank" className="nav-link_">ABOUT</a></li>
            <li className="nav-item"><a href="" target="__blank" className="nav-link_">PHOTOS</a></li>
            <li className="nav-item"><a href="" target="__blank" className="nav-link_">VIDEOS</a></li>
            <li className="nav-item"><a href="" target="__blank" className="nav-link_ active show">FRIENDS</a></li>
          </ul>
          </div>
        </div>
        <div className="profile-content">
        <div className="tab-content p-0">
        <div className="tab-pane fade active show" id="profile-post">
          <ul className="timeline">
            <li>
              <div className="timeline-time">
                <span className="date">Today</span>
                <span className="time">04:20</span>
              </div>
              <div className="timeline-icon">
                <a href="javascript:;">&nbsp;</a>
              </div>
              <div className="timeline-body">
                <div className="timeline-header">
                  <span className="userimage"><img src="https://media.tenor.com/-pqqVCuYlBEAAAAM/agent-peely-work-it-emote.gif" alt= ""></img></span>
                  <span className="username"><a href="javascript:;">Test User</a><small></small></span>
                  <span className="pull-right text-muted">20 views</span>
                </div>
                <div className="timeline-content">
                  <p>Just destroyed once again in Fortnite singles...Come at me bro!!</p>
                </div>
                <div className="timeline-likes">
                  <div className="stats-right">
                    <span className="stats-text">250 Shares</span>
                    <span className="stats-text">3 Comments</span>
                  </div>
                  <div className="stats">
                    <span className="fa-stack fa-fw stats-icon">
                      <i className="fa fa-circle fa-stack 2x text-danger"></i>
                      <i className="fa fa-heart fa-stack-1x fa-inverse t-plus-1"></i>
                    </span>
                    <span className="fa-stack fa-fw stats-icon">
                      <i className="fa fa-circle fa-stack-2x text-primary"></i>
                      <i className="fa fa-thumbs-up fa-stack-1x fa-inverse"></i>
                    </span>
                    <span className="stats-total">1K</span>
                  </div>
                </div>
                <div className="timeline-footer">
                  <a href="javascript:;" className="m-r-15 text-inverse-lighter"><i className="fa fa-thumbs-up fa-fw fa-lg m-r-3"></i>Like</a>
                  <a href="javascript:;" className="m-r-15 text-inverse-lighter"><i className="fa fa-comments fa-fw fa-lg m-r-3"></i>Comment</a>
                  <a href="javascript:;" className="m-r-15 text-inverse-lighter"><i className="fa fa-share fa-fw fa-lg m-r-3"></i>Share</a>
                </div>
                <div className="timeline-comment-box">
                  <div className="user"><img src="https://media.tenor.com/sQPNk_VgG-cAAAAd/dancing-peely-peely-fortnite.gif"></img></div>
                  <div className="input">
                    <form action="">
                      <div className="input-group">
                        <input type="text" className="form-control rounded-corner" placeholder="write a comment...">
                        </input>
                        <span className="input-group-btn p-l-10">
                          <button className="btn btn-primary f-s-12 rounded-corner" type="button">Comment</button>
                        </span>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </li>
            <li>
              <div className="timeline-time">
                <span className="date">yesterday</span>
                <span className="time">20:17</span>
              </div>
              <div className="timeline-icon">
                <a href="javascript:;">&nbsp;</a>
              </div>
              <div className="timeline-body">
                <div className="timeline-header">
                  <span className="userimage"><img src="https://media3.giphy.com/media/MBZuMSqKlqHC4lDIci/200.gif" alt=""></img></span>
                  <span className="username">Gold Fish</span>
                  <span className="pull-right text-muted">82 Views</span>
                </div>
                <div className="timeline-content">
                  <p>Squad Up My Guy!!</p>
                </div>
                <div className="timeline-footer">
                <a href="javascript:;" class="m-r-15 text-inverse-lighter"><i class="fa fa-thumbs-up fa-fw fa-lg m-r-3"></i> Like</a>
                <a href="javascript:;" class="m-r-15 text-inverse-lighter"><i class="fa fa-comments fa-fw fa-lg m-r-3"></i> Comment</a> 
                <a href="javascript:;" class="m-r-15 text-inverse-lighter"><i class="fa fa-share fa-fw fa-lg m-r-3"></i> Share</a>
                </div>
              </div>
            </li>
            <li>
              <div className="timeline-time">
                <span className="date">1 June 2024</span>
                <span className="time">01:22</span>
              </div>
              <div className="timeline-icon">
                <a href="javascript:;">&nbsp;</a>
              </div>
              <div className="timeline-body">
                <div className="timeline-header">
                  <span className="userimage"><img src="https://www.icegif.com/wp-content/uploads/icegif-6745.gif" alt=""></img></span>
                  <span className="username">Get Iced!!</span>
                  <span className="pull-right text-muted">1,282 Views</span>
                </div>
                <div className="timeline-content">
                  <p className="lead">
                    <i className="fa fa-quote-left fa-fw pull-left"></i>
                    I'm down if you guys are?
                  </p>
                </div>
                <div className="timeline-footer">
                <a href="javascript:;" class="m-r-15 text-inverse-lighter"><i class="fa fa-thumbs-up fa-fw fa-lg m-r-3"></i> Like</a>
                <a href="javascript:;" class="m-r-15 text-inverse-lighter"><i class="fa fa-comments fa-fw fa-lg m-r-3"></i> Comment</a> 
                <a href="javascript:;" class="m-r-15 text-inverse-lighter"><i class="fa fa-share fa-fw fa-lg m-r-3"></i> Share</a>
                </div>
              </div>
            </li>
            <li>
              <div className="timeline-time">
                <span className="date">2 June 2024</span>
                <span className="time">20:43</span>
              </div>
              <div className="timeline-icon">
                <a href="javascript:;">&nbsp;</a>
              </div>
              <div className="timeline-body">
                <div className="timeline-header">
                  <span className="userimage"><img src="https://media.tenor.com/ov1bhqF8mzUAAAAd/rick-sanchez-fortnite.gif" alt=""></img></span>
                  <span className="username">Rickity Rick!!</span>
                  <span className="pull-right text-muted">6 Views</span>
                </div>
                <div className="timeline-content">
                  <p className="lead">
                    <i className="fa fa-quote-left fa-fw pull-left"></i>
                    Heeeeeey!! What about me?
                  </p>
                </div>
                <div className="timeline-footer">
                <a href="javascript:;" class="m-r-15 text-inverse-lighter"><i class="fa fa-thumbs-up fa-fw fa-lg m-r-3"></i> Like</a>
                <a href="javascript:;" class="m-r-15 text-inverse-lighter"><i class="fa fa-comments fa-fw fa-lg m-r-3"></i> Comment</a> 
                <a href="javascript:;" class="m-r-15 text-inverse-lighter"><i class="fa fa-share fa-fw fa-lg m-r-3"></i> Share</a>
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
