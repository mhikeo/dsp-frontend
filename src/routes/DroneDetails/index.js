import { injectReducer } from '../../store/reducers';

export default (store) => ({
  path: 'drone-details',
  name: 'Drone List', /* Breadcrumb name */
  getComponent(nextState, cb) {
    require.ensure([], (require) => {
      const DroneDetails = require('./containers/DroneDetailsContainer').default;
      const reducer = require('./modules/DroneDetails').default;

      injectReducer(store, { key: 'droneDetails', reducer });
      cb(null, DroneDetails);
    }, 'DroneDetails');
  },
});
