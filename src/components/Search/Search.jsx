import PropTypes from 'prop-types'
import {StyledSearchWrapper, StyledSearchLabel, StyledSearchInput} from './Search.Styled'
export const Search = ({filter, handleFilterChange}) => {
return (
<StyledSearchWrapper>
      <StyledSearchLabel>Find contacts by name</StyledSearchLabel>
      <StyledSearchInput
        type="text"
        value={filter}
        onChange={handleFilterChange}
      />
    </StyledSearchWrapper>)} 

Search.propTypes = {
      filter: PropTypes.string,
      handleFilterChange: PropTypes.func,
}