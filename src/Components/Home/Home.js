import React, { Component } from 'react';

// import { connect } from 'react-redux';

// import SearchForm from './SearchForm';
// import MoviesContainer from '../Movie/MoviesContainer';
// import Spinner from '../layout/Spinner';

export class Home extends Component {
    render() {
        // const { loading } = this.props;
        return (
            <div className="container">
                MUVI
                {/* <SearchForm />
                {loading ? <Spinner /> : <MoviesContainer />} */}
            </div>
        );
    }
}

// const mapStateToProps = state => ({
//     loading: state.movies.loading
// });

// export default connect(mapStateToProps)(Home);
export default Home