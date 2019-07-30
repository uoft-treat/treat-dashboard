import {request} from "graphql-request";

const API_ENDPOINT = "https://dev-gateway.treatproject.tk/graphql";

export class TreatService {

    static async query(query: string, variables: any): Promise<any> {
        return request(API_ENDPOINT, query, variables);
    }

    static async mutate(mutation: string, variables: any): Promise<any> {
        return request(API_ENDPOINT, mutation, variables);
    }

}
