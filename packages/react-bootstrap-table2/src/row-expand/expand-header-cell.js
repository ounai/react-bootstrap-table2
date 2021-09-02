/* eslint react/require-default-props: 0 */
/* eslint no-nested-ternary: 0 */
import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class ExpansionHeaderCell extends Component {
  static propTypes = {
    isAnyExpands: PropTypes.bool.isRequired,
    onAllRowExpand: PropTypes.func.isRequired,
    hideExpandHeaderColumn: PropTypes.bool,
    expandHeaderColumnRenderer: PropTypes.func
  }

  constructor() {
    super();
    this.handleCheckBoxClick = this.handleCheckBoxClick.bind(this);
  }

  handleCheckBoxClick(e) {
    const { isAnyExpands, onAllRowExpand } = this.props;

    onAllRowExpand(e, !isAnyExpands);
  }

  render() {
    const {
      isAnyExpands,
      expandHeaderColumnRenderer,
      hideExpandHeaderColumn
    } = this.props;

    const attrs = {
      onClick: this.handleCheckBoxClick
    };

    if (hideExpandHeaderColumn) {
      return <th className="expand-cell-header" data-row-selection />;
    } else return (
      <th className="expand-cell-header" data-row-selection { ...attrs }>
        {
          expandHeaderColumnRenderer ?
            expandHeaderColumnRenderer({ isAnyExpands }) :
            (isAnyExpands ? '(-)' : '(+)')
        }
      </th>
    );
  }
}
