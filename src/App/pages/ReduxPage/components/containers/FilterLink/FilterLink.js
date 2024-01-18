import { connect } from 'react-redux';

import Link from '@/App/pages/ReduxPage/components/Link';
import { setVisibilityFilter } from '@/App/pages/ReduxPage/redux/actions';

const mapStateToProps = (state, ownProps) => ({
  active: ownProps.filter === state.visibilityFilter,
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  onClick: () => dispatch(setVisibilityFilter(ownProps.filter)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Link);
