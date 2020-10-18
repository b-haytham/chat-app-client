import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import {connect} from 'react-redux';
import AuthFlow from './AuthFlow';
import MainFlow from './MainFlow';

const Navigation = ({isAuth}:any) => {
  console.log(isAuth);
  return (
    <NavigationContainer>
      {isAuth ? <MainFlow /> :  <AuthFlow />}
    </NavigationContainer>
  );
};

const mapDispatchToProps = (state: any) => {
  return {
    isAuth: state.isAuth,
  };
};

export default connect(mapDispatchToProps)(Navigation);
