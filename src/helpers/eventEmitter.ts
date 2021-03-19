const createEmitter = () => {
    const store = {};

    return {
        emit (key, data) {
            if (!store[key]) {
                store[key] = []
            }

            for (let i = 0; i < store[key].length; ++i) {
                store[key][i](data)
            }
        },

        on (key, f) {
            if (!store[key]) {
                store[key] = []
            }

            store[key].push(f)
        },

        showStore () {
            console.log(store)
        },
    }
};


export let emitter = () => {}
