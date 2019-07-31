import {action, observable} from "mobx";
import {TreatService}       from "../services/TreatService";

type Widget = {
    name: string,
    uuid: string,
    author: string,
    styleSource: string,
    scriptSource: string,
    templateSource: string,
}

type CreateWidgetInput = {
    name: string,
    author: string,
    templateSource: string,
    styleSource: string,
    scriptSource: string
}

class WidgetStore {

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

    @action registerWidgets = async (data: CreateWidgetInput) => {
        return await TreatService.mutate(`
            mutation ($data: CreateWidgetInput!) {
                createWidget(data: $data) {
                    uuid
                }
            }
        `, {data});
    };

    @action getWidgetByUuid = async (uuid: string): Promise<Widget> => {
        const result = await TreatService.query(`
            query ($uuid: String!) {
                widgets(uuid: $uuid) {
                    author
                    name
                    uuid
                    styleSource
                    scriptSource
                    templateSource
                }
            }
        `, {uuid});
        return result.widgets[0];
    }

}

export const widgetsStore = new WidgetStore();
