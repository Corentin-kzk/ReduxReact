import React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { updateDarkmode } from '../redux/creators/uiCreator';

function Banner() {
  const dispatch = useDispatch();
  const { darkMode } = useSelector((state) => state.ui);
  const { firstname, lastname} = useSelector((state) => state.user);
  //update darkmode
  const onUpdateDarkmode = () => {
    dispatch(updateDarkmode(!darkMode));
  };

  return (
    <header>
      <h1 style={styles.mainTitle}>
        <Link to="/">EZ Shopping</Link>
      </h1>

      <div style={{ display: 'flex' }}>
        <div style={styles.menuItem}>
          👱‍♂️ <Link to="/profile">{firstname} {lastname}</Link>
        </div>
        <div style={styles.menuItem}>
          🛒{' '}
          <Link to="/basket">
            <strong>4</strong> items
          </Link>
        </div>
        <div style={styles.menuItem}>
          🌓{' '}
          <Link to="#" onClick={() => onUpdateDarkmode()}>
            Dark Mode
          </Link>
        </div>
      </div>
    </header>
  );
}

const styles = {
  menuItem: { margin: '1rem', fontSize: '1.2rem' },
  mainTitle: { fontSize: '2rem', textAlign: 'center', margin: '1rem' },
};

export default Banner;
