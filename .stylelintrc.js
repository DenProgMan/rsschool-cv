module.exports = {
    extends: ["stylelint-config-standard",
        "stylelint-config-rational-order"],
    plugins: ["stylelint-order", "stylelint-scss"],
    rules: {
        "indentation": 4,
        "at-rule-no-unknown": [true, {
            "ignoreAtRules": ["include", "mixin", "extend"],
        }],
        "number-leading-zero": ["never"],
    }
};
