import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { AlertColor } from '@/components/common/ui/alert';

export interface AlertStore {
  color: AlertColor;
  title: string;
  description?: string;
  open: boolean;
  timeout: NodeJS.Timeout;
  hasTimeout: boolean;
}

export interface ShowToastAction {
  color: AlertColor;
  title: string;
  description?: string;
}

export interface setNewTimeoutAction {
  timeout: NodeJS.Timeout;
}

const initialState: AlertStore = {
  color: AlertColor.ERROR,
  title: '',
  description: '',
  open: false,
  timeout: null,
  hasTimeout: false,
};

const alertSlice = createSlice({
  name: 'alert',
  initialState,
  reducers: {
    showAlert: (state, { payload }: PayloadAction<ShowToastAction>) => {
      state.open = true;
      state.title = payload.title;
      state.color = payload.color;
      state.description = payload.description;
      state.hasTimeout = false;
    },
    hideAlert: state => {
      state.open = false;
      state.timeout = null;
      state.hasTimeout = false;
    },
    setNewTimeout: (state, { payload }: PayloadAction<setNewTimeoutAction>) => {
      state.timeout = payload.timeout;
      state.hasTimeout = true;
    },
  },
});

export const { showAlert, hideAlert, setNewTimeout } = alertSlice.actions;
export default alertSlice.reducer;