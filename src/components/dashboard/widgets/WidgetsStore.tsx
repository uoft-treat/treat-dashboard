import {action, observable} from "mobx";
import {TreatService}       from "../../../services/TreatService";

type Widget = {
    name: string,
    uuid: string,
    author: string,
    styleSource: string,
    scriptSource: string,
    templateSource: string,
}

class WidgetsStore {

    @observable widgets: Widget[] = [];

    @action loadWidgets = async () => {
        const result = await TreatService.query(`
            {
                widgets {
                    author
                    name
                    uuid
                    styleSource
                    scriptSource
                    templateSource
                }
            }
        `, {});
        this.widgets = result.widgets;
    };

}

export const widgetsStore = new WidgetsStore();
