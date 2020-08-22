import React, {Component} from 'react';
import { View, Text, Button } from 'react-native';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import * as pageActions from '../actions/PageList';

class Home extends Component {
  incrementCount() {
    this.props.actions.getPageList();
  }

  render(){
    return (
      <View style={{ flex: 1 }}>
        <Button title='Get Employee' onPress={() => this.incrementCount()} />
        {
          !this.props.pageList && 
          this.props.pageList.map((employee) => (
            <Text>{employee.employee_name}</Text>
          ))
        }
      </View>
    )
  } 
}

const mapStateToProps = state => ({
  pageList: state.pageList.pageList
})

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(pageActions, dispatch)
})

export default connect(mapStateToProps, mapDispatchToProps)(Home)