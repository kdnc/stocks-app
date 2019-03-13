import Avatar from 'components/Avatar';
import { UserCard } from 'components/Card';
import Notifications from 'components/Notifications';
import SearchInput from 'components/SearchInput';
import withBadge from 'hocs/withBadge';
import React from 'react';
import {
  MdClearAll,
  MdExitToApp,
  MdHelp,
  MdInsertChart,
  MdMessage,
  MdNotificationsActive,
  MdNotificationsNone,
  MdPersonPin,
  MdSettingsApplications,
} from 'react-icons/md';
import {
  Button,
  ListGroup,
  ListGroupItem,
  Nav,
  Navbar,
  NavItem,
  NavLink,
  Popover,
  PopoverBody,
} from 'reactstrap';
import bn from 'utils/bemnames';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { searchBarValueChanged } from '../../actions/searchActions';
import { stockPeersLoad } from '../../actions/stocksActions';

const bem = bn.create('header');

const MdNotificationsActiveWithBadge = withBadge({
  size: 'md',
  color: 'primary',
  style: {
    top: -10,
    right: -10,
    display: 'inline-flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  children: <small>0</small>,
})(MdNotificationsActive);

class Header extends React.Component {

  constructor(props) {
    super(props);
    this.searchBarVisibleRoutes = ['/search']
  }

  state = {
    isOpenNotificationPopover: false,
    isNotificationConfirmed: true,
    isOpenUserCardPopover: false,
  };

  static contextTypes = {
    router: PropTypes.object,
  };

  toggleNotificationPopover = () => {
    this.setState({
      isOpenNotificationPopover: !this.state.isOpenNotificationPopover,
    });

    if (!this.state.isNotificationConfirmed) {
      this.setState({ isNotificationConfirmed: true });
    }
  };

  toggleUserCardPopover = () => {
    this.setState({
      isOpenUserCardPopover: !this.state.isOpenUserCardPopover,
    });
  };

  handleSidebarControlButton = event => {
    event.preventDefault();
    event.stopPropagation();

    document.querySelector('.cr-sidebar').classList.toggle('cr-sidebar--open');
  };

  handleSearchInputKeyPress = (event) => {
    if(event.key === 'Enter'){
      this.dispatchStocksSearched();
    }
  };

  handleSearchInputChange = (event) => {
    this.props.searchBarValueChanged(event.target.value);
  };

  handleSearchButtonClick = () => {
    this.dispatchStocksSearched();
  };

  dispatchStocksSearched = () => {
    if(this.context.router.route.match.path.includes('/search')) {
      this.props.stockPeersLoad(this.props.searchText);
    }
  };

  render() {
    const { isNotificationConfirmed } = this.state;
    const isSearchBarVisible =
      this.searchBarVisibleRoutes.includes(this.context.router.route.match.path);
    const { searchText } = this.props;

    return (
      <Navbar light expand className={bem.b('bg-white')}>
        <Nav navbar className="mr-2">
          <Button outline onClick={this.handleSidebarControlButton}>
            <MdClearAll size={25} />
          </Button>
        </Nav>
        <Nav navbar>
          {isSearchBarVisible ? <SearchInput
            searchValue={searchText}
            handleSearchInputChange={this.handleSearchInputChange}
            handleSearchInputKeyPress={this.handleSearchInputKeyPress}
            handleSearchButtonClick={this.handleSearchButtonClick}/> : null }
        </Nav>

        <Nav navbar className={bem.e('nav-right')}>
          <NavItem className="d-inline-flex">
            <NavLink id="Popover1" className="position-relative">
              {isNotificationConfirmed ? (
                <MdNotificationsNone
                  size={25}
                  className="text-secondary can-click"
                  onClick={this.toggleNotificationPopover}
                />
              ) : (
                <MdNotificationsActiveWithBadge
                  size={25}
                  className="text-secondary can-click animated swing infinite"
                  onClick={this.toggleNotificationPopover}
                />
              )}
            </NavLink>
            <Popover
              placement="bottom"
              isOpen={this.state.isOpenNotificationPopover}
              toggle={this.toggleNotificationPopover}
              target="Popover1"
            >
              <PopoverBody>
                <Notifications notificationsData={[]} />
              </PopoverBody>
            </Popover>
          </NavItem>

          <NavItem>
            <NavLink id="Popover2">
              <Avatar
                onClick={this.toggleUserCardPopover}
                className="can-click"
              />
            </NavLink>
            <Popover
              placement="bottom-end"
              isOpen={this.state.isOpenUserCardPopover}
              toggle={this.toggleUserCardPopover}
              target="Popover2"
              className="p-0 border-0"
              style={{ minWidth: 250 }}
            >
              <PopoverBody className="p-0 border-light">
                <UserCard
                  title="Jane"
                  subtitle="jane@jane.com"
                  text="Last updated 3 mins ago"
                  className="border-light"
                >
                  <ListGroup flush>
                    <ListGroupItem tag="button" action className="border-light">
                      <MdPersonPin /> Profile
                    </ListGroupItem>
                    <ListGroupItem tag="button" action className="border-light">
                      <MdInsertChart /> Stats
                    </ListGroupItem>
                    <ListGroupItem tag="button" action className="border-light">
                      <MdMessage /> Messages
                    </ListGroupItem>
                    <ListGroupItem tag="button" action className="border-light">
                      <MdSettingsApplications /> Settings
                    </ListGroupItem>
                    <ListGroupItem tag="button" action className="border-light">
                      <MdHelp /> Help
                    </ListGroupItem>
                    <ListGroupItem tag="button" action className="border-light">
                      <MdExitToApp /> Signout
                    </ListGroupItem>
                  </ListGroup>
                </UserCard>
              </PopoverBody>
            </Popover>
          </NavItem>
        </Nav>
      </Navbar>
    );
  }
}

function mapStateToProps(state) {
  const {searchText} = state.searchBarData;
  return {searchText};
}

function mapDispatchToProps(dispatch) {
  return {
    searchBarValueChanged: bindActionCreators(searchBarValueChanged, dispatch),
    stockPeersLoad: bindActionCreators(stockPeersLoad, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Header);
