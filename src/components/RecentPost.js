import React from "react";

function RecentPost(){
    return (
        <div className="canvas text-center">
        <div className="row m-0 recent-post">
            <div className="col-lg-6 text-center p-0">
                <img className="title-image" src="images/car.webp" alt="iphone-mockup" />
            </div>
            <div className="col-lg-6 p-0 m-0">
                <h1 className="heading">UN-DRAIN</h1>
                <p className="top-blog-text">All those hefty thoughts down the drain. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed neque leo, sollicitudin vitae egestas vitae, finibus ac massa. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Morbi eleifend, elit ut ullamcorper maximus, leo dui lobortis nisi, non sodales dui justo ut justo.</p>
                <button type="button" className="btn btn-lg btn-outline-danger function-button "> <i type="button" className="fa-regular fa-heart"></i> Like</button>
                <button type="button" className="btn btn-lg btn-outline-dark function-button"> <i type="button" className="fa-regular fa-bookmark"></i> Save</button>
                </div>
        </div>
        </div>
    )
}

export default RecentPost;