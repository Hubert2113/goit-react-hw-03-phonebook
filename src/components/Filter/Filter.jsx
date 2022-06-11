import PropTypes from 'prop-types';

export const Filter = ({ filter, handleChangeFilter }) => {
  return (
    <>
      <label
        htmlFor="filer"
        style={{ display: 'flex', flexDirection: 'column' }}
      >
        Find contacts by name
      </label>
      <input
        id="filer"
        type="text"
        value={filter}
        onChange={handleChangeFilter}
      />
    </>
  );
};

Filter.propTypes = {
  filter: PropTypes.string,
  handleChangeFilter: PropTypes.func
}