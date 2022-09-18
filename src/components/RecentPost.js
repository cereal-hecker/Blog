import React from "react";

function RecentPost(){
    return (
        <div class="canvas text-center">
        <div class="row m-0 recent-post">
            <div class="col-lg-6 text-center p-0">
                <img class="title-image" src="images/car.webp" alt="iphone-mockup" />
            </div>
            <div class="col-lg-6 p-0 m-0">
                <h1 class="heading">UN-DRAIN</h1>
                <p class="top-blog-text">All those hefty thoughts down the drain. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed neque leo, sollicitudin vitae egestas vitae, finibus ac massa. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Morbi eleifend, elit ut ullamcorper maximus, leo dui lobortis nisi, non sodales dui justo ut justo.</p>
                <button type="button" class="btn btn-lg btn-outline-danger function-button "> <i type="button" class="fa-regular fa-heart"></i> Like</button>
                <button type="button" class="btn btn-lg btn-outline-dark function-button"> <i type="button" class="fa-regular fa-bookmark"></i> Save</button>
            </div>
        </div>
        </div>
    )
}

export default RecentPost;