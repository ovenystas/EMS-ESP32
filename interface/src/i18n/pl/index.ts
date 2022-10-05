import type { BaseTranslation } from '../i18n-types';

const pl: BaseTranslation = {
  LANGUAGE: 'Język',
  RETRY: 'Ponów',
  LOADING: 'Ładowanie',
  IS_REQUIRED: 'Czy wymagany?',
  SIGN_IN: 'Zaloguj',
  SIGN_OUT: 'Wyloguj',
  USERNAME: 'Użytkownik',
  PASSWORD: 'Hasło',
  DASHBOARD: 'Pulpit',
  SETTINGS: 'Ustawienia',
  SAVED: 'zapisano',
  HELP: 'Pomoc',
  LOGGED_IN: 'Zalogowany jako',
  PLEASE_SIGNIN: 'Zaloguj się aby kontynuować',
  UPLOAD_SUCCESSFUL: 'Wysyłanie zakończone',
  DOWNLOAD_SUCCESSFUL: 'Pobieranie zakończone',
  INVALID_LOGIN: 'Niepoprawny login',
  NETWORK: 'Sieć',
  SECURITY: 'Bezpieczeństwo',
  ONOFF_CAP: 'WŁ/WYŁ',
  ONOFF: 'wł/wył',
  TYPE: 'Typ',
  DESCRIPTION: 'Opis',
  ENTITIES: 'Encje',
  REFRESH: 'Odśwież',
  EXPORT: 'Eksportuj',
  DEVICE_DETAILS: 'Szczegóły urządzenia',
  BRAND: 'Marka',
  ENTITY_NAME: 'Nazwa encji',
  VALUE: 'wartość',
  SHOW_FAV: 'Pokaż tylko "ulubione"',
  DEVICE_SENSOR_DATA: 'Dane z urządzeń EMS i czujników',
  DEVICES_SENSORS: 'Urządzenia i czujniki',
  ATTACHED_SENSORS: 'Podłączone czujniki',
  RUN_COMMAND: 'Wykonaj polecenie',
  CHANGE_VALUE: 'Zmień wartość',
  CANCEL: 'Anuluj',
  RESET: 'Resetuj',
  SEND: 'Wyślij',
  SAVE: 'Zapisz',
  REMOVE: 'Usuń',
  PROBLEM_UPDATING: 'Problem z aktualizacją',
  PROBLEM_LOADING: 'Problem z pobieraniem',
  ACCESS_DENIED: 'Brak dostępu',
  ANALOG_SENSOR: 'czujnika analogowego',
  ANALOG_SENSORS: 'Czujniki analogowe',
  UPDATED: 'Zaktualizowano',
  UPDATE: 'Aktualizacja',
  REMOVED: 'Usunięto',
  DELETION: 'Skasowano',

  OFFSET: 'Korekta +/-',
  FACTOR: 'Mnożnik',

  FREQ: 'Częstotliwość',
  STARTVALUE: 'Wartość początkowa',
  WARN_GPIO: 'Uwaga! Bądź ostrożny przypisując GPIO do czujnika!',
  EDIT: 'Edycja',
  TEMP_SENSOR: 'czujnika temperatury',
  TEMP_SENSORS: 'Czujniki temperatury',
  WRITE_COMMAND: 'Wyślij komendę {cmd}',
  EMS_BUS_WARNING:
    'Brak połączenia z magistralą EMS. Jeśli ten błąd występuje dłużej niż kilka sekund, sprawdź ustawienia oraz profil płytki interfejsu',
  EMS_BUS_SCANNING: 'Skanuję w poszukiwaniu urządzeń EMS...',
  CONNECTED: 'połączono',
  TX_ISSUES: 'Problem z zapisem na magistralę EMS. Spróbuj wybrać inny "tryb Tx"',
  DISCONNECTED: 'brak połączenia',
  EMS_SCAN: 'Czy napewno chcesz uruchomić pełne skanowanie magistrali EMS?',
  EMS_BUS_STATUS: 'Status magistrali EMS',
  ACTIVE_DEVICES: 'Aktywne urządzenia i czujniki',
  DEVICE: 'Urządzenie',
  SUCCESS: 'Udane',
  FAIL: 'Nieudane',
  QUALITY: 'Jakość',
  SCAN_DEVICES: 'Skanuj w poszukiwaniu nowych urządzeń',
  EMS_BUS_STATUS_TITLE: 'Aktywność',
  SCAN: 'Skanuj',
  STATUS_NAMES: [
    'EMS, telegramy odebrane (Rx)',
    'EMS, wysłane telegramy "odczyt" (Tx)',
    'EMS, wysłane telegramy "zapis" (Tx)',
    'Odczyty czujników temperatury 1-Wire®',
    'Odczyty czujników analogowych',
    'Publikacje MQTT',
    'Wywołania API',
    'Wpisy syslog'
  ],
  NUM_DEVICES: '{num} urządzeni{{a|e|a|a|a}} EMS',
  NUM_TEMP_SENSORS: '{num} czujni{{ki|k|ki|ki|ki}} temperatury',
  NUM_ANALOG_SENSORS: '{num} czujni{{ki|k|ki|ki|ki}} analogow{{e|y|e|e|e}}',
  NUM_DAYS: '{num} {{dni|dzień|dni|dni|dni}}',
  NUM_SECONDS: '{num} sekun{{d|da|dy|dy|d}}',
  NUM_HOURS: '{num} godzi{{n|na|ny|ny|n}}',
  NUM_MINUTES: '{num} minu{{t|ta|ty|ty|t}}',
  APPLICATION_SETTINGS: 'Ustawienia aplikacji',
  CUSTOMIZATION: 'Personalizacja',
  APPLICATION_RESTARTING: 'Trwa ponowne uruchamianie',
  BOARD_PROFILE_TEXT:
    'Wybierz z listy wstępną konfigurację płytki interfejsu lub stwórz własną konfigurację',
  BOARD_PROFILE: 'Profil płytki',
  BUTTON: 'Przycisk',
  TEMPERATURE: 'Temperatura',
  DISABLED: 'wyłączony',
  GENERAL_OPTIONS: 'Opcje podstawowe',
  LANGUAGE_ENTITIES: 'Język',
  HIDE_LED: 'Wyłącz LED',
  ENABLE_TELNET: 'Aktywuj dostęp dla konsoli Telnet',
  ENABLE_ANALOG: 'Aktywuj czujniki analogowe',
  CONVERT_FAHRENHEIT: "Konwertuj temperatury do skali Fahrenheita",
  BYPASS_TOKEN: 'Pomiń autoryzację tokenem w wywołaniach API',
  READONLY: 'Tryb pracy "tylko do odczytu" (blokuje wszystkie komendy zapisu na magistralę EMS)',
  UNDERCLOCK_CPU: 'Obniż taktowanie CPU',

  ENABLE_SHOWER_TIMER: 'Aktywuj minutnik prysznica',
  ENABLE_SHOWER_ALERT: 'Aktywuj alarm przysznica',
  TRIGGER_TIME: 'Wyzwalaj po czasie',
  COLD_SHOT_DURATION: 'Czas trwania tryśnięcia zimnej wody',
  FORMATTING_OPTIONS: 'Opcje formatowania',
  BOOLEAN_FORMAT_DASHBOARD: 'Format wartości binarnych dla pulpicie',
  BOOLEAN_FORMAT_API: 'Format wartości binarnych dla API/MQTT',
  ENUM_FORMAT: 'Format wartości numerowanych dla API/MQTT',
  INDEX: 'indeks',
  ENABLE_PARASITE: 'Aktywuj zasilanie pasożytnicze dla czujników temperatury 1-Wire®',

  LOGGING: 'Logowanie',
  LOG_HEX: 'Loguj telegramy EMS w systemie szesnastkowym (HEX)',
  ENABLE_SYSLOG: 'Włącz syslog',
  MARK_INTERVAL: 'Oznacz interwały',
  SECONDS: 'sekundy',
  MINUTES: 'minuty',
  HOURS: 'godziny',
  RESTART: 'Restart',
  RESTART_TEXT: 'Aby zastosować wprowadzone zmainy interfejs EMS-ESP musi zostać zrestartowany',
  RESTART_CONFIRM: 'Jesteś pewien, że chcesz zrestartować interfejs EMS-ESP?',
  COMMAND: 'Polecenie',
  CUSTOMIZATIONS_RESTART: 'Wszystkie personalizacje zostały usunięte. Restartuję...',
  CUSTOMIZATIONS_FULL: 'Wybrano za dużo obiektów. Wprowadź zmiany w mniejszych partiach',
  CUSTOMIZATIONS_SAVED: 'Personalizacje zapisane',
  CUSTOMIZATIONS_HELP_1: 'Wybierz urządzenie EMS, dostosuj opcje lub kliknij by zmienić nazwę encji',
  CUSTOMIZATIONS_HELP_2: 'oznacz jako ulubioną',
  CUSTOMIZATIONS_HELP_3: 'zablokuj możliwość zapisu',
  CUSTOMIZATIONS_HELP_4: 'wyklucz z MQTT i API',
  CUSTOMIZATIONS_HELP_5: 'ukryj na pulpicie',
  SELECT_DEVICE: 'Wybierz urządzenie',
  SET_ALL: 'Zaznacz wszystko jako',
  OPTIONS: 'Opcje',
  NAME: 'nazwa',
  CUSTOMIZATIONS_RESET:
    'Czy jesteś pewien, że chcesz usunąć wszystkie personalizacje łącznie z ustawieniami dla czujników temperatury i analogowych?',

  DEVICE_ENTITIES: 'Encje urządzenia',
  USER_CUSTOMIZATION: 'Personalizacje użytkownika',

  SUPPORT_INFORMATION: 'Dodatkowe informacje',
  CLICK_HERE: 'Kliknij tu',
  HELP_INFORMATION_1: 'Skorzystaj z wiki w celu znalezienia szczegółowych instrukcji jak skonfigurować EMS-ESP',
  HELP_INFORMATION_2: 'Skorzystaj z serwera Discord w celu komunikacji na żywo ze społecznością',
  HELP_INFORMATION_3: 'Aby zaproponować nową funkcjonalność lub zgłosić problem',
  HELP_INFORMATION_4:
    'gdy zgłaszasz problem, będzie on szybciej rozwiązany gdy do zgłoszenia dołączysz pełną informację systemową',
  HELP_INFORMATION_5:
    'EMS-ESP jest darmowym projektem typu open-source. Aby go wesprzeć, rozważ przyznanie nam gwiazdki na Github!',
  SUPPORT_INFO: 'Dodatkowe informacje',
  UPLOAD: 'Wysyłanie',
  DOWNLOAD: 'Pobieranie',
  ABORTED: 'przerwano',
  FAILED: 'nie powiodło się',
  SUCCESSFUL: 'udane',
  SYSTEM: 'System',
  LOG: 'Log',
  STATUS: 'Status',
  UPLOAD_DOWNLOAD: 'Pliki',
  SYSTEM_VERSION_RUNNING: 'Obecna wersja to:',
  SYSTEM_APPLY_FIRMWARE: 'aby zaktualizować firmware',
  CLOSE: 'Zamknij',
  USE: 'Skorzystaj z',
  FACTORY_RESET: 'Ustawienia fabryczne',
  SYSTEM_FACTORY_TEXT: 'Interfejs EMS-ESP został przywrócony do ustawień fabrycznych i zostanie teraz zrestartowany',
  SYSTEM_FACTORY_TEXT_DIALOG: 'Czy jesteś pewien, że chcesz zresetować interfejs EMS-ESP do ustawień fabrycznych? ',
  VERSION_CHECK: 'Firmware',
  THE_LATEST: 'Ostatnia',
  VERSION_IS: 'wersja to',
  PLATFORM: 'Urządzenie (platforma / SDK)',
  UPTIME: 'Czas działania systemu',
  CPU_FREQ: 'Taktowanie procesora (CPU)',
  HEAP: 'Pamięć (wolne / zaalokowane)',
  PSRAM: 'PSRAM (rozmiar / wolne)',
  FLASH: 'Pamięć flash (rozmiar / taktowanie)',
  APPSIZE: 'Aplikacja (wykorzystane / wolne)',
  FILESYSTEM: 'System plików (wykorzystane / wolne)',
  BUFFER_SIZE: 'Rozmiar bufora',
  COMPACT: 'Kompaktowy',
  ENABLE_OTA: 'Aktywuj aktualizacje OTA',
  DOWNLOAD_CUSTOMIZATION_TEXT: 'Pobierz personalizacje',
  DOWNLOAD_SETTINGS_TEXT:
    'Pobierz ustawienia aplikacji. Uważaj jeśli udostępniasz plik z ustawieniami, ponieważ zawiera on hasła oraz inne wrażliwe informacje',
  UPLOAD_TEXT: 'Wyślij firmware (.bin), ustawienia lub personalizacje (.json)',
  UPLOADING: 'Wysłano',
  UPLOAD_DROP_TEXT: 'Przeciągnij plik lub kliknij',
  ERROR: 'Nieoczekiwany błąd, spróbuj ponownie',
  TIME_SET: 'Ustaw czas',
  MANAGE_USERS: 'Zarządzanie użytkownikami',
  IS_ADMIN: 'Admin?',
  USER_WARNING: 'Przynajmniej jeden użytkownik musi mieć uprawnienia admina',
  ADD: 'Dodaj',
  ACCESS_TOKEN_FOR: 'Token dostępu dla',
  ACCESS_TOKEN_TEXT:
    'Token jest używany do korzystania z wywołań REST API, wymagających autoryzacji. Można go przekazać bezpośrednio lub przez URL',
  GENERATING_TOKEN: 'Generowanie tokenu',
  USER: 'Użytkownik',
  MODIFY: 'Modyfikuj',
  SU_TEXT:
    'Hasło su (super-użytkownika) jest wykorzystywane do autoryzacji tokenów oraz dostępu do konsoli z uprawnieniami admina',
  NOT_ENABLED: 'wyłączony',
  ERRORS: 'Błędy',
  DISCONNECT_REASON: 'Powód rozłączenia',
  ENABLE_MQTT: 'Aktywuj MQTT',
  OPTIONAL: 'opcjonalny',
  FORMATTING: 'Formatuj przesyłane dane',
  FORMAT: 'Format',
  MQTT_NEST_1: 'Zagnieżdzone w pojedyńczym temacie',
  MQTT_NEST_2: 'Jako indywidualne tematy',
  MQTT_RESPONSE: 'Publikuj odpowiedzi na komendy w temacie "response"',
  MQTT_PUBLISH_TEXT_1: 'Publikuj pojedyńcze wartości po zmianie',
  MQTT_PUBLISH_TEXT_2: 'Publikuj w temacie "command" (ioBroker)',
  MQTT_PUBLISH_TEXT_3: 'Włącz opcję MQTT Discovery (Home Assistant, Domoticz)',
  MQTT_PUBLISH_TEXT_4: 'Przedrostek do tematów "discovery"',
  MQTT_PUBLISH_INTERVALS: 'Czas pomiędzy publikacjami',
  MQTT_INT_BOILER: 'Kotły i pompy ciepła',
  MQTT_INT_THERMOSTATS: 'Termostaty',
  MQTT_INT_SOLAR: 'Panele solarne',
  MQTT_INT_MIXER: 'Mieszacze',
  DEFAULT: 'Domyślnie',
  MQTT_CLEAN_SESSION: '"Clean session"',
  MQTT_RETAIN_FLAG: 'Ustawiaj flagę "Retain"',
  INACTIVE: 'nieaktywny',
  ACTIVE: 'aktywny',
  UNKNOWN: 'nieznany',
  SET_TIME: 'Ustaw datę i godzinę',
  SET_TIME_TEXT: 'Wprowadź aktualną datę i godzinę',
  LOCAL_TIME: 'Czas lokalny',
  UTC_TIME: 'Czas UTC',
  ENABLE_NTP: 'Aktywuj NTP (data i godzina będą synchronizowane z podanym serwerem czasu)',
  TIME_ZONE: 'Strefa czasowa',
  ACCESS_POINT: 'Punkt dostępowy',
  AP_PROVIDE: 'Aktywuj punkt dostępowy (AP)',
  AP_PROVIDE_TEXT_1: 'zawsze',
  AP_PROVIDE_TEXT_2: 'gdy połączenie WiFi jest rozłączone',
  AP_PROVIDE_TEXT_3: 'nigdy',
  AP_PREFERRED_CHANNEL: 'Preferowany kanał',
  AP_HIDE_SSID: 'Ukryj SSID',
  NETWORK_SCAN: 'Skanuj sieci WiFi',
  IDLE: 'uśpiony',
  LOST: 'utracony',
  SCANNING: 'Skanuję',
  SCAN_AGAIN: 'Skanuj ponownie',
  NETWORK_SCANNER: 'Skaner sieci WiFi',
  NETWORK_NO_WIFI: 'Brak sieci WiFi w zasięgu',
  NETWORK_BLANK_SSID: 'pozostaw puste aby wyłączyć WiFi',
  POWER: 'moc',
  NETWORK_DISABLE_SLEEP: 'Wyłącz tryb usypiania WiFi',
  NETWORK_LOW_BAND: 'Używaj zmniejszonej przepustowości WiFi',

  NETWORK_USE_DNS: 'Włącz wsparcie dla mDNS',
  NETWORK_ENABLE_IPV6: 'Włącz wsparcie dla IPv6',
  NETWORK_FIXED_IP: 'Użyj stałego adresu IP',
  ADMIN: 'Admin',
  GUEST: 'Gość',
  NEW: 'Nowy',
  RENAME: 'Zmień nazwę',
  ENTITY: 'encji'
};

export default pl;