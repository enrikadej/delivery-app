import React from 'react';
import './AcceptedOrder.scss';
import classNames from 'classnames';

type Props = {
  modalActive: boolean,
  setModalActive: (modal :boolean) => void,
};

export const AcceptedOrder:React.FC<Props> = ({ modalActive, setModalActive }) => (
  <div
    role="textbox"
    tabIndex={0}
    onClick={(event) => {
      event.stopPropagation();
      setModalActive(false);
    }}
    onKeyDown={(event) => {
      event.stopPropagation();
      setModalActive(false);
    }}
    className={classNames(
      'accepted',
      {
        modal__active: modalActive,
      },
    )}
  >
    <h1 className="accepted__title">
      Your order is accepted!
    </h1>
  </div>
);
