export const ALTER_STATUS_TO_DO = "ALTER_STATUS_TO_DO";

export const alterStatusToDo = (status) => ({
    type: "ALTER_STATUS_TO_DO",
    payload: status
});