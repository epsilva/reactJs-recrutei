import { produce } from 'immer';

const INITIAL_STATE = {
    data: {},
    datas: [],
    loading: false,
    count: {},
};

export default function auth(state = INITIAL_STATE, action) {
    return produce(state, draft => {
        switch (action.type) {
            case '@post/REQUEST': {
                draft.loading = true;
                break;
            }
            case '@post/REQUEST_SUCCESS': {
                draft.datas = action.payload.datas;
                draft.loading = false;
                draft.count = action.payload.count;
                break;
            }
            case '@post/INSERT_REQUEST': {
                draft.loading = true;
                draft.data = action.payload.data;
                draft.count = action.payload.count;
                break;
            }
            case '@post/INSERT_SUCCESS': {
                draft.data = action.payload.data;
                draft.loading = false;
                draft.count = action.payload.count;
                break;
            }
            case '@post/UPDATE_REQUEST': {
                draft.loading = true;
                draft.data = action.payload.data;
                draft.count = action.payload.count;
                break;
            }
            case '@post/UPDATE_SUCCESS': {
                draft.data = action.payload.data;
                draft.count = action.payload.count;
                draft.loading = false;
                break;
            }
            case '@post/DELETE_REQUEST': {
                draft.loading = true;
                draft.data = action.payload.data;
                draft.count = action.payload.count;
                break;
            }
            case '@post/DELETE_SUCCESS': {
                draft.data = action.payload.data;
                draft.count = action.payload.count;
                draft.loading = false;
                break;
            }
            case '@post/POST_FAILURE': {
                draft.loading = false;
                break;
            }
            default:
        }
    });
}
