const messageList = {
    400: "Bad Request",
    401: "Unaothorized",
    404: "Not Found"
}

const HttpError = (status, message = messageList[status])=> {
    const error = new Error(message);
    error.status = status;
    return error;
}

export default HttpError;