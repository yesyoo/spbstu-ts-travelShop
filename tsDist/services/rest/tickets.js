/* - пример использования методов с generic type <T>
  -  запрос на получение информации о туре
 */
export function getTicketById(id) {
    return fetch('https://62b9e756ff109cd1dc9dae16.mockapi.io/apiv/v1/ticket').then((response) => response.json())
        .then((data) => {
        return data;
    });
}
// запрос на на отправку данных - пока не используется
export function postTicketData(postData) {
    return fetch('https://62b9e756ff109cd1dc9dae16.mockapi.io/apiv/v1/ticket').then((response) => response.json())
        .then((data) => {
        return data;
    });
}
//# sourceMappingURL=tickets.js.map