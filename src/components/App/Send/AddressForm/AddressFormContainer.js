import { compose } from 'redux';
import { connect } from 'react-redux';
import { translate } from 'react-i18next';

import {
  sendActions, getAmount, getAsset, getDestination,
} from 'state/send';
import { getUsdPrice } from 'state/prices';

import AddressForm from './AddressForm';

const mapStateToProps = (state) => {
  const asset = getAsset(state);
  const amount = getAmount(state);
  const destination = getDestination(state);

  return {
    asset,
    amount,
    destination,
    usdAmount: getUsdPrice(state, {
      sellAsset: asset,
      sellAmount: amount,
    }),
  };
};

const mapDispatchToProps = {
  ...sendActions,
};

export default compose(
  connect(
    mapStateToProps,
    mapDispatchToProps
  ),
  translate('translation')
)(AddressForm);