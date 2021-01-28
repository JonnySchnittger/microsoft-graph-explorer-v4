import { ITheme } from '@uifabric/styling';
import { IDimensions } from './dimensions';
import { IQuery } from './query-runner';

export interface IPermission {
  value: string;
  consentDescription: string;
  isAdmin: boolean;
  consented: boolean;
}

export interface IPermissionProps {
  theme?: ITheme;
  styles?: object;
  dimensions: IDimensions;
  scopes: {
    data: IPermission[];
    pending: boolean;
    error: object;
  };
  panel: boolean;
  sample: IQuery[];
  tokenPresent: boolean;
  consentedScopes: string[];
  setPermissions: Function;
  actions?: {
    fetchScopes: Function;
    consentToScopes: Function;
  };
}

export interface IPermissionState {
  permissions: IPermission[];
}

export interface IPanelList {
  messages: any;
  columns: any[];
  classes: any;
  selection: any;
  renderItemColumn: any;
  renderDetailsHeader: Function;
}

export interface ITabList {
  columns: any[];
  classes: any;
  renderItemColumn: Function;
  renderDetailsHeader: Function;
  maxHeight: string;
}