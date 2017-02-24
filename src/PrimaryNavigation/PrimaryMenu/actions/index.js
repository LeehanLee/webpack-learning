const INIT_PRIMARY_MENU = "INIT_PRIMARY_MENU";

const primaryMenuInitAction = (data) => {
    return {
        type: INIT_PRIMARY_MENU,
        data
    };
}

export {INIT_PRIMARY_MENU, primaryMenuInitAction}