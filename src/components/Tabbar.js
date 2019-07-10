import React from 'react';
import { connect } from "react-redux";
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import { creators } from "../store/reducers/tabbar";


const mapStateToProps = state => {
  return {
    value: state.tabbar.ID
  };
};

const mapDispatchToProps = dispatch => {
  return {
    setTab: (value) => dispatch(creators.tabbar(value))
  };
};


function TabContainer(props) {
  return (
    <Typography component="div" style={{ padding: 8 * 3 }}>
      {props.children}
    </Typography>
  );
}

TabContainer.propTypes = {
  children: PropTypes.node.isRequired,
};

function LinkTab(props) {
  return (
    <Tab
      component="a"
      onClick={event => {
        event.preventDefault();
      }}
      {...props}
    />
  );
}

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
  },
}));

const comp = function NavTabs(props) { 
  const classes = useStyles();
  
  console.log("VALUE PROPS:", props);
  var value = props.value;

  function handleChange(event, newValue) {
    console.log("hanldeChange",newValue);
    props.setTab(newValue)
    //value = props.value
  }

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Tabs variant="fullWidth" value={props.value} onChange={handleChange}>
          <LinkTab value="identity" label="Identity" href="/identity" />
          <LinkTab value="createProposal" label="Create Proposal" href="/create-proposal" />
          <LinkTab value="proposals" label="Proposals" href="/proposals" />
          <LinkTab value="delegation" label="Delegation" href="/delegation" />
        </Tabs>
      </AppBar>
      {value === "identity" && <TabContainer>Identity</TabContainer>}
      {value === "createProposal" && <TabContainer>Create Proposal</TabContainer>}
      {value === "proposals" && <TabContainer>Proposals</TabContainer>}
      {value === "delegation" && <TabContainer>Delegation</TabContainer>}
    </div>
  );
}


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(comp);