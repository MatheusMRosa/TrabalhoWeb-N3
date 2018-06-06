export const ALTER_STATUS_TO_DO = "ALTER_STATUS_TO_DO";
export const DELETE_TO_DO = "DELETE_TO_DO";

export const alterStatusToDo = (item,status) => ({
    type: "ALTER_STATUS_TO_DO",
    payload: {'item': item, 'status': status}
});

export const deleteToDo = (item) => ({
    type: "DELETE_TO_DO",
    payload: item
});