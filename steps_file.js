// steps_file.js
module.exports = function() {
  return actor({
    async openHomePage() {
      this.amOnPage('/');
      this.waitForVisible('.main-page', 10);
    },

    async selectCountry(countryName) {
      // Находим и кликаем по селектору выбора страны
      this.click('.country-selector');
      // Ждем появления выпадающего списка
      this.waitForVisible('.country-dropdown', 5);
      // Выбираем нужную страну из списка
      this.click(`//div[contains(@class, "country-item") and contains(text(), "${countryName}")]`);
    },

    async selectNights(minNights, maxNights) {
      // Находим и кликаем по селектору выбора ночей
      this.click('.nights-selector');
      // Ждем появления выпадающего списка
      this.waitForVisible('.nights-dropdown', 5);
      // Выбираем минимальное количество ночей
      this.fillField('.min-nights-input', minNights);
      // Выбираем максимальное количество ночей
      this.fillField('.max-nights-input', maxNights);
      // Применяем выбор
      this.click('.apply-nights-btn');
    },

    async selectDates(fromDate, toDate) {
      // Кликаем по полю выбора дат
      this.click('.date-selector');
      // Ждем появления календаря
      this.waitForVisible('.calendar-container', 5);
      // Выбираем дату начала
      if (fromDate) {
        this.click(`//div[contains(@class, "calendar-day") and @data-date="${fromDate}"]`);
      }
      // Выбираем дату окончания
      if (toDate) {
        this.click(`//div[contains(@class, "calendar-day") and @data-date="${toDate}"]`);
      }
    },

    async selectGuests(adults, children) {
      // Кликаем по селектору выбора гостей
      this.click('.guests-selector');
      // Ждем появления выпадающего списка
      this.waitForVisible('.guests-dropdown', 5);

      // Выбираем количество взрослых
      if (adults) {
        // Находим текущее значение
        let currentAdults = parseInt(await this.grabTextFrom('.adults-count'));
        // Увеличиваем или уменьшаем количество взрослых
        while (currentAdults != adults) {
          if (currentAdults < adults) {
            this.click('.adults-plus-btn');
            currentAdults++;
          } else {
            this.click('.adults-minus-btn');
            currentAdults--;
          }
        }
      }

      // Выбираем количество детей
      if (children) {
        // Находим текущее значение
        let currentChildren = parseInt(await this.grabTextFrom('.children-count'));
        // Увеличиваем или уменьшаем количество детей
        while (currentChildren != children) {
          if (currentChildren < children) {
            this.click('.children-plus-btn');
            currentChildren++;
          } else {
            this.click('.children-minus-btn');
            currentChildren--;
          }
        }
      }

      // Применяем выбор
      this.click('.apply-guests-btn');
    },

    async search() {
      // Кликаем по кнопке поиска
      this.click('.search-btn');
      // Ждем результатов поиска
      this.waitForVisible('.search-results', 30);
    },

    async chooseHotel(hotelName) {
      this.click(`//div[contains(@class, "hotel-item") and contains(., "${hotelName}")]`);
    },

    async chooseRoom(roomName) {
      this.click(`//div[contains(@class, "room-item") and contains(., "${roomName}")]`);
    },

    async bookRoom() {
      this.click('.book-btn');
    }
  });
};
