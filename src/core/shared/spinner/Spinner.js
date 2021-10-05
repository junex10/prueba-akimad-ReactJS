import React from 'react';

export default class Spinner extends React.Component {
    constructor(props) {
        super(props);

        this.type = props.type
    }
    allPage = () => {
        return (
            <div>
                <button className="back-to-top d-flex align-items-center justify-content-center"><i className="bi bi-arrow-up-short"></i></button>
                <div id="preloader">
                    <div className='loading'>
                    </div>
                </div>
            </div>
        );
    }
    justWindow = () => {
        return (
            <div class="d-flex justify-content-center">
                <div class="spinner-border" role="status">
                    <span class="sr-only">Cargando...</span>
                </div>
            </div>
        );
    }
    render() {
        if (this.type === 'all') return <this.allPage />
        else return <this.justWindow />
    }
}