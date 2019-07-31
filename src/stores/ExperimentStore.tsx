import {action, observable} from "mobx";
import {TreatService}       from "../services/TreatService";

export type Experiment = {
    uuid: string,
    name: string,
    author: string,
    templateSource: string,
    scriptSource: string,
}

class ExperimentStore {

    @observable experiments: Experiment[] = [];

    @action loadExperiments = async () => {
        const result = await TreatService.query(`
            {
                experiments {
                    author
                    name
                    uuid
                    scriptSource
                    templateSource
                }
            }
        `, {});
        this.experiments = result.experiments;
    }

}

export const experimentStore = new ExperimentStore();
