module.exports = {
    root: true,
    env: {
        node: true
    },
    extends: [
        "react-app",
        "react-app/jest",
        "prettier"
    ],
    parserOptions: {
        ecmaVersion: 2020,
        parser: '@typescript-eslint/parser'
    },
    rules: {
        'space-before-function-paren': 'off',
        'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
        'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
        indent: ['error', 4]
    }
}
