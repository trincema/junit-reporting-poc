module.exports = {
    "roots": [
      "./src"
    ],
    "testMatch": [
      "**/__tests__/**/*.+(ts|tsx|js)",
      "**/?(*.)+(spec|test).+(ts|tsx|js)"
    ],
    "transform": {
      "^.+\\.(ts|tsx)$": "ts-jest"
    },
    reporters: [
      'default',
      [
        '@reportportal/agent-js-jest',
        {
          endpoint: 'http://localhost:8080/api/v1',
          apiKey: 'default_HONZdd1cQe-sGpPyUPwCO0YBgl0e-r49k6WZ91T7aB8f5xDgqP-VZruuo6O8doBR',
          project: 'default_personal',
          launch: 'Jest launch',
          description: 'Jest launch',
          attributes: [
            {
              key: "attributeKey",
              value: "attrbiuteValue",
            },
            {
              value: "anotherAttrbiuteValue",
            },
            ],
            mode: 'DEFAULT',
        }
      ]
    ],
  }