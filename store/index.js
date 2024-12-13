export const state = () => ({
    user: null,
    myHearts: [],
    numHearts: 0,
    myBag: [],
    numInBag: 0,
});

export const mutations = {
    SET_USER(state, payload) {
        state.user = payload;
    },
    SET_MY_HEARTS(state, payload) {
        state.myHearts = payload;
    },
    SET_NUM_HEARTS(state, payload) {
        state.numHearts = payload;
    },
    SET_MY_BAG(state, payload) {
        state.myBag = payload;
    },
    SET_NUM_IN_BAG(state, payload) {
        state.numInBag = payload;
    },
};

export const actions = {
    SET_USER(store, payload) {
        store.commit("SET_USER", payload);
    },
    SET_MY_HEARTS(store, payload) {
        const local = localStorage.getItem("myhearts");
        const arr = local ? JSON.parse(local).data : [];
        store.commit("SET_MY_HEARTS", arr);
        store.commit("SET_NUM_HEARTS", arr.length);
    },
    SET_MY_BAG(store, payload) {
        const local = localStorage.getItem("mybag");
        const arr = local ? JSON.parse(local).data : [];
        store.commit("SET_MY_BAG", arr);
        store.commit("SET_NUM_IN_BAG", arr.length);
    },
};

export const getters = {
    getUser(state) {
        return state.user;
    },
    getMyHearts(state) {
        return state.myHearts;
    },
    getNumHearts(state) {
        return state.numHearts;
    },
    getMyBag(state) {
        return state.myBag;
    },
    getNumInBag(state) {
        return state.numInBag;
    }
};
