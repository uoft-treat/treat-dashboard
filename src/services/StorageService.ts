export class StorageService {

    static async setItem(key: string, value: string) {
        localStorage.setItem(key, value);
    }

    static async getItem(key: string): Promise<string | null> {
        return localStorage.getItem(key);
    }

}
