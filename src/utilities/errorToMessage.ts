export default function errorToMessage(error: any) {
    if(error.response && error.response.errors && error.response.errors.length > 0) {
        return error.response.errors[0].message;
    } else {
        return error.message;
    }
}
