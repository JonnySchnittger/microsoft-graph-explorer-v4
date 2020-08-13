import { IAction } from '../../../types/action';
import {
  CLEAR_RESPONSE, QUERY_GRAPH_RUNNING,
  QUERY_GRAPH_SUCCESS, VIEW_HISTORY_ITEM_SUCCESS
} from '../redux-constants';

export function graphResponse(state = {}, action: IAction): any {
  switch (action.type) {
    case QUERY_GRAPH_SUCCESS:
      return action.response;
    case VIEW_HISTORY_ITEM_SUCCESS:
      return action.response;
    case QUERY_GRAPH_RUNNING:
      return { body: undefined, headers: undefined };
    case CLEAR_RESPONSE:
      return { body: undefined, headers: undefined };
    default:
      return state;
  }
}
