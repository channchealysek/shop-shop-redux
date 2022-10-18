import { configureStore } from '@reduxjs/toolkit';
import reducer from '../utils/reducers';

const store = configureStore({reducer});

export default store
