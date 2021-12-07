import React, { Component } from 'react'

export class News extends Component {
    render() {
        let { title, description, imageurl, newsUrl, date, source } = this.props;
        return (
            <div>
                <div class="card">
                <span class="position-absolute top-0 start-90 translate-corner badge rounded-pill bg-danger">
                        {source}
                    </span>
                     <img src={!imageurl ? "https://cdn.vox-cdn.com/thumbor/G_0TGkFwuA20tkFGRQ9eZtNhNVw=/0x146:2040x1214/fit-in/1200x630/cdn.vox-cdn.com/uploads/chorus_asset/file/21925557/vpavic_200929_4216_0121.jpg" : imageurl} />
                    <div class="card-body">
                        <h5 class="card-title">{title }</h5>
                        <p class="card-textstyle={{ textLength: 10 }">{description}</p>
                        <p class="card-text"><small class="text-muted">{new Date(date).toGMTString()}</small></p>
                     <a href={newsUrl} class="btn btn-primary">Read More</a>
                    </div>
                </div>
            </div>
        )
    }
}

export default News
