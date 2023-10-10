

import {DataSource} from "../../../../data-source/DataSource";
import {ArrayStore} from "../../../../data-source/Store/ArrayStore/ArrayStore";
import {tryCast} from "../../common/global";
export function asDataSource(value: any, nullOK = true) {
    const cv = tryCast(value, DataSource);
    if (cv != null) {
        return cv;
    }
    return (new ArrayStore(value));
}

