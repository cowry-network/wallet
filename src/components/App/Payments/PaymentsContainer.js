import { compose } from 'redux';
import { connect } from 'react-redux';
import { translate } from 'react-i18next';
import { createStructuredSelector } from 'reselect';

import { paymentsActions, getPayments, isLoading } from 'state/payments';
import Payments from './Payments';

const mapStateToProps = createStructuredSelector({
  payments: getPayments,
  isLoading,
});

const actions = {
  ...paymentsActions,
};

export default compose(
  connect(
    mapStateToProps,
    actions
  ),
  translate('translation')
)(Payments);
