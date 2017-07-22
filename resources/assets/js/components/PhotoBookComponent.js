import React, {Component} from 'react';

class PhotoBook extends Component {
    constructor(props) {
        super(props);

        this.renderInstagramAuth = this.renderInstagramAuth.bind(this);
        this.renderPhotoGallery = this.renderPhotoGallery.bind(this);
        this.paginateInstagram = this.paginateInstagram.bind(this);
    }

    componentDidMount() {
        this.props.fetchInstagram();
    }

    paginateInstagram() {
        this.props.paginateInstagram(this.props.photos.pagination.next_max_id);
    }

    renderInstagramAuth() {
        return (
            <div>
                {(!this.props.photos.authenticated) ?
                    <a className="btn btn-primary" href="/authenticate/instagram">Login with Instagram</a> : null}
            </div>
        );
    }

    renderPhotoGallery(photos) {
        return photos.map(photo => {
            return (
                <div className="col-md-4 portfolio-item" key={photo.id} >
                    <img src={photo.images.low_resolution.url} className="img-responsive"/>
                </div>

            );
        });
    }

    renderPagination() {
        return (
            <div className="row text-center">
                <div className="col-lg-12">
                    <ul className="pagination">
                        <li>
                            <a onClick={ () => this.paginateInstagram()}>Next »</a>
                        </li>
                    </ul>
                </div>
            </div>
        );
    }

    render() {
        const {data} = this.props.photos;

        return (
            <div className="container">

                <div className="row">
                    <div className="col-lg-12">
                        <h1 className="page-header">Instagram Photo Book
                        </h1>
                    </div>
                </div>
                {this.renderInstagramAuth()}
                <div className="row">
                    {(data) ? this.renderPhotoGallery(data) : ''}
                </div>

                {(data) ? this.renderPagination() : ''}
            </div>
        )
    };
}

export default PhotoBook;