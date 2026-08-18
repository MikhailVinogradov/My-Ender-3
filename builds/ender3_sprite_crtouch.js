module.exports = {
  board_env: "STM32F103RE_creality", // Окружение для платы 4.2.7
  active: true,
  meta: {
    stable_name: "ender_3_4.2.7-sprite-crtouch-{{marlin_version}}-{{uid}}",
    nightly_name: "ender_3_4.2.7-sprite-crtouch-{{current_date}}-{{uid}}"
  },
  based_on: {
    repo: "https://github.com",
    path: "/config/examples/Creality/Ender-3/CrealityV427/", // Базовая конфигурация Ender 3 (4.2.7)
  },
  configuration: {
    enable: [
      "BLTOUCH", // Активация CR-Touch
      "USE_PROBE_FOR_Z_HOMING", // CR-Touch как Z-концевик
      "AUTO_BED_LEVELING_BILINEAR", // Автоуровень
      ["GRID_MAX_POINTS_X", 5], // Точная сетка замеров 5х5 вместо 3х3
      ["DEFAULT_AXIS_STEPS_PER_UNIT", [80, 80, 400, 424.9]], // Шаги для Sprite (E424.9)
      ["NOZZLE_TO_PROBE_OFFSET", [-36.5, -40.0, 0]], // Смещение датчика Sprite
      ["PROBING_MARGIN", 20], // Уменьшенный отступ от краев до 20 мм
      ["X_BED_SIZE", 235], // Верный размер стола по оси X
      ["Y_BED_SIZE", 235], // Верный размер стола по оси Y
      ["TEMP_SENSOR_0", 5], // Высокотемпературный термистор Sprite Pro (100k Honeywell)
      ["HEATER_0_MAXTEMP", 315] // Лимит нагрева 315°C (дает рабочие 300°C)
    ],
    disable: [
      "Z_MIN_PROBE_USES_Z_MIN_ENDSTOP_PIN" // Отключение старого Z-концевика
    ]
  },
  configuration_adv: {
    enable: [
      "INVERT_E0_DIR" // Обратное вращение мотора Sprite
    ]
  }
};

