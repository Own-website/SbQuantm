import { appRoutesV1 } from "./tracing/indexroutes";
import { BaseRoutes } from "./baseroutes";

/**
 * @description Defines routing for the app
 */

class ApiRoutes extends BaseRoutes {

    public path = '/api';

    constructor() {
        super();
        this.init();
    }

    private init() {

        // Mount Version 1 routes on this path
        this.router.use(appRoutesV1.path, appRoutesV1.routerinstance);
    }
}

export const appAPI = new ApiRoutes();